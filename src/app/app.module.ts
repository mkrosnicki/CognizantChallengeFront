import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';
import { ScoresPageComponent } from './scores-page/scores-page.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SubmissionResultHeaderPipe } from './pipes/submission-result-header.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionPageComponent,
    ScoresPageComponent,
    AppBarComponent,
    SubmissionResultHeaderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
