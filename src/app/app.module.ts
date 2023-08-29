import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickModifiersPlugin } from './click-modifiers.plugin';

import { EVENT_MANAGER_PLUGINS } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: ClickModifiersPlugin,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
