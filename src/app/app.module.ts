//Vendors
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// Component
import {MenuComponent} from "./menu/menu.component";
import {IndexComponent} from "./index/index.component";
import {AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormsUpComponent } from './forms-up/forms-up.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormTypeListComponent } from './form-type-list/form-type-list.component';

//Services
import {FormsService} from './services/forms.service';
//router
import {Route} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    UsersComponent,
    UserDetailsComponent,
    FormsListComponent,
    FormsUpComponent,
    ConfirmDialogComponent,
    FormTypeListComponent
  ],
  imports: [BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot(Route.list,{ enableTracing: false }),
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule],
  providers: [FormsService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})

export class AppModule { }
