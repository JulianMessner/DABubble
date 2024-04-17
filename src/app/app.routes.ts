import { Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { LoginComponent } from './components/front-page/login/login.component';
import { RegisterComponent } from './components/front-page/register/register.component';
import { AvatarComponent } from './components/front-page/avatar/avatar.component';

export const routes: Routes = [
    {
        path: '', component: FrontPageComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'avatar', component: AvatarComponent }
        ]
    }
];
