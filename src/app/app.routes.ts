import { Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { LoginComponent } from './components/front-page/login/login.component';
import { RegisterComponent } from './components/front-page/register/register.component';
import { MainContentComponent } from './components/main-content/main-content.component';

export const routes: Routes = [
    {
        path: 'front-page', component: FrontPageComponent, children: [
            {path: '', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
    },
    {
        path: '', component: MainContentComponent
    }
];
