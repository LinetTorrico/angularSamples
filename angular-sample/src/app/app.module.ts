import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HeaderComponent } from './header/header.component';
import { GridviewComponent } from './gridview/gridview.component';
import { ImageInputComponent } from './image-input/image-input.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LeftMenuComponent,
    HeaderComponent,
    GridviewComponent,
    ImageInputComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
