import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { RoomsListComponent } from './ng-if-directive/rooms-list/rooms-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingSyntaxComponent,
    NgIfDirectiveComponent,
    NgSwitchCaseComponent,
    RoomsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
