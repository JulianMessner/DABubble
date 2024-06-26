import { Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { LoginComponent } from './components/front-page/login/login.component';
import { RegisterComponent } from './components/front-page/register/register.component';
import { AvatarComponent } from './components/front-page/avatar/avatar.component';
import { MainContentComponent } from './components/main-content/main-content.component';

export const routes: Routes = [
    {
        path: 'front',
        component: FrontPageComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'avatar', component: AvatarComponent }
        ]
    },
    {
        path: '', component: MainContentComponent
    }
];
