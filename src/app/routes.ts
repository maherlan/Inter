import {MenuComponent} from "./menu/menu.component"
import {IndexComponent} from "./index/index.component"
import {AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormsUpComponent } from './forms-up/forms-up.component';
import { FormTypeListComponent } from './form-type-list/form-type-list.component';


export class Route {

  public static list =[
  {path:"", component:IndexComponent,data: { page: 0 }},
  {path:"users", component:UsersComponent,data: { page: -1 }},
  {path:"users/up/:id", component:UsersComponent,data: { page: -1 }},
  {path:"forms", component:FormsListComponent,data: { page: -2}},
  {path:"forms/up", component:FormsUpComponent,data: { page: -2 }},
  {path:"form-type/:id", component:FormTypeListComponent,data: { page:-3}}
  ];


}
