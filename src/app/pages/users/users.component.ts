import { Component, OnInit, OnDestroy, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {

  dtTrigger = new Subject();

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  usersList = [];
  dtOptions: DataTables.Settings = {};
  userId: number;
  rowUserId;

  constructor(private usersService: UsersService, private router: Router, private renderer: Renderer2) { }

  ngOnDestroy(): void {
   this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnInit(): void {
    interface Data {
      id;
    }
    this.dtOptions = {
      language:{
        lengthMenu: 'Mostrar _MENU_ registros por página',
        zeroRecords: 'Registros no encontrados',
        info: 'Mostrando página _PAGE_ de _PAGES_',
        infoEmpty: 'Registros no encontrados',
        infoFiltered: '(Filtrando de _MAX_ registros totales)',
        search: 'Buscar',
        paginate:{
          previous: 'Anterior',
          next: 'Siguiente',
          first: 'Primero',
          last: 'Último'
        }
      },
      ajax: environment.sysConfig.apiUrl + 'client-side/users',
      columns: [{
        title: 'Nombre',
        data: 'name'
      }, {
        title: 'Puesto',
        data: 'position'
      }, {
        title: 'Teléfono',
        data: 'phone'
      }, {
        title: 'Correo electrónico',
        data: 'email'
      }, {
        title: 'Segmento',
        data: 'segment_name',
      },{
        title: 'Acciones',
        render(data, type, full){
         return '<button id="editBtn" type="button" class="btn btn-primary btn-sm mr-2 edit"><i class="fas fa-edit edit" style="padding-left:5px;" ></i></button><button type="button" id="deleteBtn" class="btn btn-danger btn-sm mr-2"><i class="fa fa-times" style="padding-left:5px;"></i></button>';
        }
      }
    ],
    rowCallback: (row: Node, data: Data, index: number) => {
      const self = this;
      $('#editBtn', row).on('click', () => {
        this.rowUserId = data.id;
        this.editUserNav(this.rowUserId);
      });
      $('#deleteBtn', row).on('click', () => {
        this.rowUserId = data.id;
        this.deleteUsr(this.rowUserId);
      });
      return row;
    }
    };
    
  }

  getUsers(){
    this.usersService.users().subscribe(response =>  {
      this.usersList = response.results;
    });
  }

  editUserNav(userId){
    this.router.navigate(['/edit-user', userId]);
  }

  deleteUsr(user_id){
    const data = {
      user_id: user_id
    }
    Swal.fire({
      title: 'Confirmar',
      text: "Esta seguro de borrar este usuario?",
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#6AA12A',
      cancelButtonColor: '#383838',
      confirmButtonText: 'Si',
      reverseButtons: true,

    }).then((result) => {
      if(result.isConfirmed === true){
        this.usersService.deleteUser(data).subscribe(response => {
          console.log(response);
          this.rerender();
          if (response.status === 1) {
            Swal.fire(
              'Eliminado',
              'Usuario eliminado',
              'success'
            )
          }else{
            Swal.fire(
              'Error',
              'Algo ocurrio al eliminar el registro',
              'error'
            )
          }
        });
      }else{
        Swal.close();
      }
    })
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  

}
