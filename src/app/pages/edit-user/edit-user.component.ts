import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user = {
    pic : './assets/media/users/default.jpg'
  };
  id: number;
  userInfo;
  segmentList = [];
  editUserForm: FormGroup;
  basicSegment: string;
  segmentUrlName = '';
  cardImageBase64: string;
  imageError: string;
  isImageSaved: boolean;
  previewImagePath: string;
  splitUrl: string;
  urlSplitted = [];
  urlSplitArray = [];
  saveData: object;


  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute, private _cdr: ChangeDetectorRef) {
    this.editUserForm = new FormGroup({
      name: new FormControl(null,[Validators.required, ]),
      phone: new FormControl(null,[Validators.required,]),
      position: new FormControl(null,[Validators.required, ]),
      url: new FormControl(null,[Validators.required,]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      image: new FormControl(null),
      selectSegment: new FormControl(null,[Validators.required]),
      whatsappPhone: new FormControl(null,[Validators.required, ]),
      whatsappMsg: new FormControl(null,[Validators.required,])
    })
   }


  ngOnInit(): void {
    this.getSegments();
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
        this.getUserInfo(params.id)
      }
    )
  }

  getUserInfo(user_id){
    this.usersService.userDetail(user_id).subscribe(response => {
      this.patchForm(response.results);
      this._cdr.detectChanges();
    });
  }

  getSegments(){
    this.usersService.segments().subscribe(response => {
      this.segmentList = response.results;
    });
  }

  save(){
    this.saveData = {
      userInfo:{
        user_id: this.id,
        name: this.editUserForm.get('name').value,
        phone: this.editUserForm.get('phone').value,
        position: this.editUserForm.get('position').value,
        url: this.segmentUrlName + '/' + this.editUserForm.get('url').value+'.html',
        email: this.editUserForm.get('email').value,
        image: this.cardImageBase64,
        segment_id: this.editUserForm.get('selectSegment').value
      },
      whatsappInfo:{
        phone: this.editUserForm.get('whatsappPhone').value,
        msg: this.editUserForm.get('whatsappMsg').value 
      }
    }
    console.log(this.editUserForm);
    this.usersService.updateUser(this.saveData).subscribe(response => {
      if(response.status === 1){
        Swal.fire(
          'Éxito',
          'Registro Actualizado',
          'success'
        )
        this.router.navigate(['/users/'])
      }else if(response.error.code === 'ER_DUP_ENTRY'){
        Swal.fire(
          'Error',
          'Ocurrió un problema al guardar al usuario, url ya existe',
          'error'
        )
      }else{
        Swal.fire(
          'Error',
          'Ocurrió un problema al actualizar al usuario',
          'error'
        )
      }
    })
    
  }

  segmentSelect(){
    this.basicSegment = this.editUserForm.get('selectSegment').value;
    const filter = this.segmentList.filter(segment => segment.id == this.basicSegment);

   this.segmentUrlName = filter[0].name.replace(/ /g,"-");
   this.segmentUrlName = this.segmentUrlName.toLowerCase();
  }

  getPic(img) {
    //console.log(img);
    if (!img) {
      return 'none';
    }

    return `url('${img}')`;
  }

  downloadPic(){
    console.log(this.cardImageBase64);
    var a = document.createElement("a"); //Create <a>
    a.href = this.cardImageBase64; //Image Base64 Goes here
    a.download = "UserImage"; //File name Here
    a.click(); //Downloaded file
  }

  patchForm(data){
    if(data[0].image){
      this.isImageSaved = true
      this.cardImageBase64 = data[0].image;
        const max_width = 25600;
      this.editUserForm.get('image').patchValue('');
    }
    this.splitUrl = data[0].url;
    this.urlSplitArray = this.splitUrl.split('/');
    this.segmentUrlName = this.urlSplitArray[0];
    this.urlSplitted =  this.urlSplitArray[1].split('.')
  
    this.editUserForm.get('name').patchValue(data[0].name);
    this.editUserForm.get('position').patchValue(data[0].position);
    this.editUserForm.get('phone').patchValue(data[0].phone);
    this.editUserForm.get('email').patchValue(data[0].email);
    this.editUserForm.get('selectSegment').setValue(data[0].segment_id);
    this.editUserForm.get('url').patchValue(this.urlSplitted[0]);
    this.editUserForm.get('whatsappPhone').patchValue(data[0].whatsappPhone);
    this.editUserForm.get('whatsappMsg').patchValue(data[0].whatsappMessage);

 
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
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                //console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64  = imgBase64Path;
                    // console.log(imgBase64Path);
                    this.isImageSaved = true;
                    this.previewImagePath = imgBase64Path;
                    this.getPic(imgBase64Path);
                    this._cdr.detectChanges();
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  
  navigateToUsers(){
    this.router.navigate(['/users/']);
  }
}
