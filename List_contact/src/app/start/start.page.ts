import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { StartSService } from './start.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Contact } from './Contact.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  contacts: Contact[];
  contact: Contact;
  b = true;
  id = 0;
  constructor(private router: Router,
    private contactService: StartSService,
    private activateRoute: ActivatedRoute,
    private http: HttpClient) { }

  loadJson() {
    var loadContact = [];
    this.http.get('https://randomuser.me/api/?results=10')
      .subscribe(res => {
        console.log(res.results[0]);
        res.results.forEach(element => {
          ++this.id;
          const contac = { id: this.id, name: element.name.first, numero: element.phone,
             url: element.picture.thumbnail, url1: element.picture.medium };
          loadContact.push(contac);
        });
      }, (err) => {
        alert('failed loading json data');
      })
    return loadContact;
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paraMap => {
      if (paraMap.has('/start')) {
        return;
      }
      if (this.b) {
        this.contacts = this.loadJson();
        this.b = false;
      }
      this.contactService.setcontact(this.contacts);
      console.log(this.contacts);
    });
  }



}
