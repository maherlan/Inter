import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';
@Injectable()
export class FormsService {

  private httpClient:HttpClient;

  constructor(private http:HttpClient) {
    this.httpClient=http;
   }

getFormsList(){

//todo: change source of data


  return this.httpClient.get("assets/test/forms.json");
}

getForm(id){

}

addForm(){

}

updateForm(id){

}

deleteForm(id){

}

}
