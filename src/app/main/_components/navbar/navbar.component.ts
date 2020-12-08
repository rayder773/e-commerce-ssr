import { Component } from '@angular/core';
import {SignUpComponent} from '../sign-up/sign-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor() {}

  test = 3;

  ngOnInit(): void {
    // this.openDialog();
  }

}
