import {MenuComponent} from "./menu/menu.component"
import {IndexComponent} from "./index/index.component"
import {AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormsUpComponent } from './forms-up/forms-up.component';

export class Route {

  public static list =[
  {path:"", component:IndexComponent},
  {path:"users", component:UsersComponent},
  {path:"users/form/:id", component:UsersComponent},
  {path:"forms/", component:FormsListComponent},
  {path:"forms/up", component:FormsUpComponent}
  ];


}
