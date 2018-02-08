//vendors
import { Component,Input } from '@angular/core';

//services
import {FormsService} from '../services/forms.service';

//models
import {Form} from '../models/form';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
@Input() triggerFn =()=> {};
@Input() activeLink;


public dynamicLinks=[];
constructor(private formsService:FormsService  ){
  formsService.getFormsList().subscribe((res:Form[]) =>{
    this.dynamicLinks=res;
  })

}

}
