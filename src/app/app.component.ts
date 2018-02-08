import { Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  open =false;
  activeLink;

  public triggerMenu;
  public activeLinkChange;

  constructor() {
    this.triggerMenu=triggerMenu.bind(this);
    this.activeLink=-1;
   }

  getPage(outlet) {
    let page=outlet.activatedRouteData['page'];
    if(page == -3){
        this.activeLink=outlet.activatedRoute.params._value.id;
    }else{
      this.activeLink=page ;
    }
  return this.activeLink;

}


  }

  function triggerMenu(){
    this.open=!this.open;
  }
