import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import {MenuComponent} from "./menu/menu.component"
import {IndexComponent} from "./index/index.component"
import {AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormsUpComponent } from './forms-up/forms-up.component';

import {Route} from "./routes"




@NgModule({
  declarations: [
    AppComponent,MenuComponent,IndexComponent, UsersComponent, UserDetailsComponent, FormsListComponent, FormsUpComponent
  ],
  imports: [BrowserModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),  RouterModule.forRoot(
      Route.list,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
