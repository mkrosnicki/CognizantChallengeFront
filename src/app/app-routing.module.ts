import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoresPageComponent} from './scores-page/scores-page.component';
import {SubmissionPageComponent} from './submission-page/submission-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'submission', pathMatch: 'full'},
  {path: 'submission', component: SubmissionPageComponent, pathMatch: 'full'},
  {path: 'scores', component: ScoresPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
