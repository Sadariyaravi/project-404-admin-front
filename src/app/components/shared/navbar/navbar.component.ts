import { Component, OnInit } from '@angular/core';
// import { MenuItem } from 'primeng/api/menuitem';
// import { LoginService } from 'src/app/services/login.service';
// import { PrimeTemplate } from 'primeng/api';
// import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sidebarVisible: boolean = false;
  items!: any[];
  loginStatus: boolean = false;
  constructor(
    // private loginService: LoginService,
    // private cookie: CookieService,
    private router: Router
  ) {
    // this.loginService.Username.subscribe((name) => {
    //   this.userName = name;
    // });

    // this.loginService.CheckLogin.subscribe((status) => {
    //   this.loginStatus = status;
    // });
  }
  userName: string = '';
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'fa-solid fa-house',
        styleClass:
          'bg-[#f1faee] text-black font-semibold border-2 border-black mr-2',
      },
      {
        label: 'About Us',
        icon: 'fa-solid fa-file-invoice-dollar',
        styleClass:
          'bg-[#f1faee] text-black font-semibold border-2 border-black mr-2',
      },
      {
        label: 'Contact Us',
        icon: 'fa-solid fa-envelope',
        styleClass:
          'bg-[#f1faee] text-black font-semibold border-2 border-black mr-2',
      },
      {
        label: 'News',
        icon: 'fa-regular fa-newspaper',
        styleClass:
          'bg-[#f1faee] text-black font-semibold border-2 border-black mr-2',
        routerLink: 'Post',
      },
      {
        label: 'Admission form',
        icon: 'fa-solid fa-person-shelter',
        styleClass:
          'bg-[#f1faee] text-black font-semibold border-2 border-black mr-2',
        routerLink: 'Admission_form',
      },
      {
        label: 'Fees Payment',
        icon: 'fa-solid fa-file-invoice-dollar',
        styleClass:
          'bg-[#f1faee] text-black font-semibold border-2 border-black mr-2',
      },
    ];
  }

  Logout() {
    // this.cookie.deleteAll();
    // this.loginService.setLoginStatus(false);
    this.router.navigate(['/']);
  }
}
