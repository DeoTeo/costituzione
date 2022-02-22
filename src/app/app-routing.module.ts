import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	
	// altrimenti ritorno a Paziente
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
