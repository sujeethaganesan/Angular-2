import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import {KeyUp1Component, KeyUp2Component, KeyUp3Component, KeyUp4Component} from './key-up.component'; 
import {LittleHeroComponent} from './little-tour-heroes.component';
import {LoopBackComponent} from './loop-back.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyUp1Component,
    KeyUp2Component,
    KeyUp3Component,
    KeyUp4Component,
    LittleHeroComponent,
    LoopBackComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
