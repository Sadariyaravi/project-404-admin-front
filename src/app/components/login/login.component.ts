import { ɵparseCookieValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  catchError,
  filter,
  map,
  merge,
  observable,
  Observable,
  Observer,
  of,
  pluck,
  scan,
} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  SignupForm!: FormGroup;
  LoginForm!: FormGroup;

  SignupFormActive: boolean = true;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
  ) {
    this.SignupForm = this.formbuilder.group({
      UserName: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(2)],
      ],
      UserPhoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]{1}[0-9]{9}$/)],
      ],
      UserEmailId: ['', [Validators.required, Validators.email]],
      UserRoleID: [3],
      Password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
      ConfirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });

    this.LoginForm = this.formbuilder.group({
      LoginUserPhoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]{1}[0-9]{9}$/)],
      ],
      LoginPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
          ),
        ],
      ],
    });
  }
  ngOnInit(): void {
    const message = Observable.create((observer: any) => {
      observer.next('Hello Goodmorning');
    });
    const message2 = Observable.create((observer: any) => {
      observer.next('my name is ravi');
    });
    const pracObservable = of(1, 2, 3, 4);

    // using of
    const observable1 = of(1, 2, 3).subscribe((data) => console.log(data));

    // using merge
    const mergedObservable = merge(message, message2);
    mergedObservable.subscribe((data) => {
      console.log(data);
    });

    try {
      // using filter and pipe
      const filterPrac = pracObservable
        .pipe(
          filter((x: number) => x % 2 == 0),
          map((x) => x * 10)
        )
        .subscribe((data) => {
          console.log(data, 'filter - practice');
        });
    } catch (error) {
      console.log(error);
    }
  }

  // Login() {
  //   if (!this.LoginForm.valid) {
  //     this.LoginForm.markAllAsTouched();
  //   } else {
  //     let LoginData: LoginData = {
  //       UserPhoneNumber: this.LoginForm.value.LoginUserPhoneNumber,
  //       Password: this.LoginForm.value.LoginPassword,
  //     };
  //     this.Loginservice.Login(LoginData).subscribe({
  //       next: (data) => {
  //         if (!data.message) {
  //           this.snackbar.open('Server Error Please Re-Login', 'Ok', {
  //             duration: 3000,
  //           });
  //         } else {
  //           let Toast = this.snackbar.open(data.message, 'Ok', {
  //             duration: 3000,
  //           });
  //         }
  //         this.Loginservice.setUserName(this.cookieService.get('userName'));
  //         this.Loginservice.setLoginStatus(true);
  //       },
  //       error: (error) => {
  //         if (error.error.message) {
  //           let Toast = this.snackbar.open(error.error.message, 'close', {
  //             duration: 3000,
  //           });
  //         } else {
  //           this.snackbar.open('Internal server error please Re-Login', 'Ok', {
  //             duration: 3000,
  //           });
  //         }
  //       },
  //       complete: () => {
  //         this.LoginForm.reset();
  //         this.router.navigate(['Post']);
  //       },
  //     });
  //   }
  // }
  // SignUp() {
  //   if (!this.SignupForm.valid) {
  //     this.SignupForm.markAllAsTouched();
  //   } else if (this.Password?.value != this.ConfirmPassword?.value) {
  //     console.log(this.Password, this.ConfirmPassword);
  //   } else {
  //     let UserData: UserSignup = {
  //       UserName: this.SignupForm.value.UserName,
  //       UserEmailId: this.SignupForm.value.UserEmailId,
  //       UserPhoneNumber: this.SignupForm.value.UserPhoneNumber,
  //       UserRoleID: this.SignupForm.value.UserRoleID,
  //       Password: this.SignupForm.value.Password,
  //     };
  //     this.Loginservice.Signup(UserData).subscribe({
  //       next: (data) => {
  //         let toast = this.snackbar.open(data.message, 'ok', {
  //           duration: 3000,
  //         });
  //       },
  //       error: (error) => {
  //         let toast = this.snackbar.open(error.error.message, 'ok', {
  //           duration: 3000,
  //         });
  //       },
  //       complete: () => {
  //         this.SignupForm.reset();
  //         this.SignupFormActive = false;
  //       },
  //     });
  //   }
  // }

  get UserName() {
    return this.SignupForm.get('UserName');
  }

  get UserPhoneNumber() {
    return this.SignupForm.get('UserPhoneNumber');
  }

  get UserEmailId() {
    return this.SignupForm.get('UserEmailId');
  }

  get Password() {
    return this.SignupForm.get('Password');
  }

  get ConfirmPassword() {
    return this.SignupForm.get('ConfirmPassword');
  }

  get LoginUserPhoneNumber() {
    return this.LoginForm.get('LoginUserPhoneNumber');
  }

  get LoginPassword() {
    return this.LoginForm.get('LoginPassword');
  }

  get LoginConfirmPassword() {
    return this.LoginForm.get('LoginConfirmPassword');
  }

  ChangeForm() {
    if (this.SignupFormActive) {
      this.SignupFormActive = false;
    } else {
      this.SignupFormActive = true;
    }
  }
}
