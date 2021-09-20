import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';
import * as _ from 'lodash';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user = {
    pic : './assets/media/users/default.jpg'
  };
  imageError: string;
  isImageSaved: boolean;
  previewImagePath: string;
  newUserForm: FormGroup;
  cardImageBase64: string;

  segmentList = [];
  basicSegment: string;
  segmentUrlName = ' ';
  saveData: object;
  
  constructor( private usersService: UsersService, private router: Router, private formBuilder: FormBuilder, private _cdr: ChangeDetectorRef) {
    this.newUserForm = new FormGroup({
      name: new FormControl(null,[Validators.required, ]),
      phone: new FormControl(null,[Validators.required, ]),
      position: new FormControl(null,[Validators.required, ]),
      url: new FormControl(null,[Validators.required, ]),
      image: new FormControl(null,[Validators.required, ]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      segment: new FormControl(Validators.required),
      whatsappPhone: new FormControl(null,[Validators.required,]),
      whatsappMsg: new FormControl('Hi! Can you give me more information about',[Validators.required, ])
    })
   }

  ngOnInit(): void {

    
    this.getSegments();

  }

  save(){
    this.saveData = {
      userInfo:{
        name: this.newUserForm.get('name').value,
        phone: this.newUserForm.get('phone').value,
        position: this.newUserForm.get('position').value,
        url: this.segmentUrlName + '/' + this.newUserForm.get('url').value+'.html',
        email: this.newUserForm.get('email').value,
        image: this.previewImagePath,
        segment_id: this.newUserForm.get('segment').value.id
      },
      whatsappInfo:{
        phone: this.newUserForm.get('whatsappPhone').value,
        msg: this.newUserForm.get('whatsappMsg').value
      }
    }
    console.log(this.newUserForm);
    this.usersService.createUser(this.saveData).subscribe(response => {
      if(response.status === 1){
        Swal.fire(
          'Éxito',
          'Registro Agregado',
          'success'
        )
        this.router.navigate(['/users/'])
      }else if(response.error === 'ER_DUP_ENTRY'){
        Swal.fire(
          'Error',
          'Ocurrió un problema al guardar al usuario, url ya existe',
          'error'
        )
      }else{
        Swal.fire(
          'Error',
          'Ocurrió un problema al guardar al usuario',
          'error'
        )
      }
    });
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = async rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    this.newUserForm.get('image').updateValueAndValidity();
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64  = imgBase64Path;
                    await this.cardImageBase64;
                    this.isImageSaved = true;
                    this.previewImagePath = imgBase64Path;
                    this._cdr.detectChanges();
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

  getSegments(){
    this.usersService.segments().subscribe(response => {
      this.segmentList = response.results;
      this._cdr.detectChanges();
    });
  }

  segmentSelect(){
    this.basicSegment = this.newUserForm.get('segment').value.name

    this.segmentUrlName = this.basicSegment.replace(/ /g,"-");
    this.segmentUrlName = this.segmentUrlName.toLowerCase();
  }

  navigateToUsers(){
    this.router.navigate(['/users/']);
  }
}
