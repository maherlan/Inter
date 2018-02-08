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
    this.activeLinkChange=activeLinkChange.bind(this);
    this.activeLink=0;

   }

  }

  function triggerMenu(){
    this.open=!this.open;
  }

  function activeLinkChange(id){
    this.activeLink=id;
  }
