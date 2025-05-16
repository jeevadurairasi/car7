import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { VehicletypesComponent } from './vehicletypes/vehicletypes.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminComponent } from './admin/admin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes=[
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'vehicletypes',component:VehicletypesComponent},
  {path:'carlist',component:CarlistComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'profile', component: ProfileComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'cancelbooking',component:CancelbookingComponent},
  {path: 'admin',component:AdminComponent},
  {path:'changepassword',component:ChangepasswordComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgetpasswordComponent,
    VehicletypesComponent,
    CancelbookingComponent,
    CarlistComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProfileComponent,
    EditProfileComponent,
    AdminComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
