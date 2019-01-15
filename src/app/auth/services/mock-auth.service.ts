import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {delay} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class MockAuthService extends AuthService {

    private MOCKUSER: User = {
        jwt: 'sjlkjfsdlf324jlk324j23k4j2k23l4kj',
        user: {
            username: 'Ben',
            email: 'user@email.com'
        }
    };

    authenticate(username: string, password: string): Observable<User> {
        return of(this.MOCKUSER).pipe(delay(2000));
    }
}
