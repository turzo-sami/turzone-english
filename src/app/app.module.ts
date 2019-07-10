import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './appRouting.module';

import { AppComponent } from './app.component';
import { Home } from './Components/Home';



import { MasterService } from './Services/master.service';
import { CommonService } from './Services/common.service';
import { DictionaryService } from './Services/dictionary.service';



@NgModule({
  declarations: [
    AppComponent,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    MasterService,
    CommonService,
    DictionaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
