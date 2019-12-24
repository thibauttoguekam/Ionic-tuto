import { Injectable } from '@angular/core';
import {Contact} from './Contact.model';
import {Credential} from './credential.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StartSService {

  private credentials: Credential = {
    username: 'thibauttoguekam',
    token: 'c7924695c6ce936aac95cc048d2c0a10d83d2e3c'
  };

  

  private contacts: Contact[] = [];
  constructor() { }

  getAllContact(){
 return [...this.contacts] ;

  }

  getContact(contactID: number){
    console.log("getcontact", this.contacts);
    return {...this.contacts.find(contact=>{
      return contact.id === contactID;
    })
  };
  }
 setcontact(contact: Contact[]){
   this.contacts = contact;
   console.log("set contact", this.contacts);
 }
  deleteRecipe(contactID: number) {
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== contactID;
      });
  }
 
}


