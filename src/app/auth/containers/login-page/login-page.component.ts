import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MatSnackBar} from '@angular/material';
import {Login} from '../../actions/auth.actions';
import {Observable} from 'rxjs';
import {LoginCredentials} from '../../models/login-credentials';
import * as fromAuth from '../../reducers';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

    authState$: Observable<any>;


    constructor(private store: Store<fromAuth.State>, public snackBar: MatSnackBar) {
        // this.authState$ = this.store.select(fromAuth.selectAuthState);

    }

    ngOnInit() {
        // this.loginForm.valueChanges.subscribe(value => console.warn(value));
    }

    authenticate(credentials: LoginCredentials) {
        this.store.dispatch(new Login(credentials));
    }
}
