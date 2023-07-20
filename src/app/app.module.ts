import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { TrafficSectionComponent } from './components/traffic-section/traffic-section.component';
import { ReviewSectionComponent } from './components/review-section/review-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponentComponent } from './pages/main-page-component/main-page-component.component';
import { AuthorizationComponentComponent } from './components/authorization-component/authorization-component.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PersonalOfficePageComponent } from './pages/personal-office-page/personal-office-page.component';
import { PersonalOfficeComponent } from './components/personal-office/personal-office.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { HistoryComponent } from './history/history.component';
import { AuthorizationService } from './services/authorization.service';
import { AllUserVievComponent } from './components/all-user-viev/all-user-viev.component';
import { DriverCheckComponent } from './components/driver-check/driver-check.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: MainPageComponentComponent},
  { path: 'authorizatoin', component: AuthorizationComponentComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'personalOffice', component: PersonalOfficeComponent},
  { path: 'task', component: TaskComponent},
  { path: 'history', component: HistoryComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainSectionComponent,
    TrafficSectionComponent,
    ReviewSectionComponent,
    ContactSectionComponent,
    WorkSectionComponent,
    MainPageComponentComponent,
    AuthorizationComponentComponent,
    RegistrationComponent,
    PersonalOfficePageComponent,
    PersonalOfficeComponent,
    TaskComponent,
    HistoryComponent,
    AllUserVievComponent,
    DriverCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),//передача маршрутизаторов
    HttpClientModule//для авторизации
  ],
  // providers:[
  //   AuthorizationService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
