import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ScanComponent } from './scan/scan.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'registration',component:RegisterComponent},
  {path:'scan/:id',component:ScanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
