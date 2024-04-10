import { Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { LoginComponent } from './components/front-page/login/login.component';
import { RegisterComponent } from './components/front-page/register/register.component';

export const routes: Routes = [
    {
        path: '', component: FrontPageComponent, children: [
            {path: '', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
    }
];
