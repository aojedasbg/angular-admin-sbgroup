import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../../../modules/auth/_models/user.model';
import { AuthService } from '../../../../../../modules/auth/_services/auth.service';

@Component({
  selector: 'app-user-offcanvas',
  templateUrl: './user-offcanvas.component.html',
  styleUrls: ['./user-offcanvas.component.scss'],
})
export class UserOffcanvasComponent implements OnInit {
  adminName: string;
  adminEmail: string;
  adminCapital: string;
  extrasUserOffcanvasDirection = 'offcanvas-right';
  user$: Observable<UserModel>;

  constructor(private layout: LayoutService, private auth: AuthService) {
    try {
      this.adminName = localStorage.getItem('adminName');
      this.adminCapital = this.adminName.charAt(0).toUpperCase();
      this.adminEmail = localStorage.getItem('adminEmail');
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    this.extrasUserOffcanvasDirection = `offcanvas-${this.layout.getProp(
      'extras.user.offcanvas.direction'
    )}`;
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  logout() {
    this.auth.logout();
    document.location.reload();
  }
}
