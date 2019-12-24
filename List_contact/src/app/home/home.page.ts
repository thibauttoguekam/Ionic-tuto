import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message = 'this default message';


  onchangeText(){
    this.message = 'message on change';
  }
  
  constructor() {}

}
