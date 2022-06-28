import { BuglistComponent } from './subcomponents/buglist/buglist.component';
import { CreateIssueComponent } from './subcomponents/create-issue/create-issue.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugListPageComponent } from './components/bug-list-page/bug-list-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SettingsComponent } from './subcomponents/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'bug-list',
    component: BugListPageComponent,
    children: [
      { path: '', component: BuglistComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
