import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneralModule } from '../../_metronic/partials/content/general/general.module';
import { EditUserComponent } from './edit-user.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';



@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralModule,
    HighlightModule,
    NgbNavModule,
    NgbTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditUserComponent,
      },
    ]),
  ]
})
export class EditUserModule { }
