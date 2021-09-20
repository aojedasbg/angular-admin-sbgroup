import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneralModule } from '../../_metronic/partials/content/general/general.module';
import { NewUserComponent } from './new-user.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';


@NgModule({
  declarations: [NewUserComponent],
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
        component: NewUserComponent,
      },
    ]),
  ]
})
export class NewUserModule { }
