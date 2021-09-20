import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneralModule } from '../../_metronic/partials/content/general/general.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    GeneralModule,
    HighlightModule,
    NgbNavModule,
    NgbTooltipModule,
    DataTablesModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ]
})
export class UsersModule { }
