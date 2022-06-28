import { AppFileUploadComponent } from './components/app-file-upload/app-file-upload.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugListPageComponent } from './components/bug-list-page/bug-list-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateIssueComponent } from './subcomponents/create-issue/create-issue.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectNavBarComponent } from './components/project-nav-bar/project-nav-bar.component';
import { SettingsComponent } from './subcomponents/settings/settings.component';
import { BuglistComponent } from './subcomponents/buglist/buglist.component';

@NgModule({
  declarations: [
    AppComponent,
    BugListPageComponent,
    NavbarComponent,
    HomePageComponent,
    CreateIssueComponent,
    AppFileUploadComponent,
    ProjectNavBarComponent,
    SettingsComponent,
    BuglistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AmplifyAuthenticatorModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
