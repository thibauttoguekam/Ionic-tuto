import { Component, OnInit } from '@angular/core';
import { StartSService } from '../start.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../Contact.model';
import { Alert } from 'selenium-webdriver';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-start-detail',
  templateUrl: './start-detail.page.html',
  styleUrls: ['./start-detail.page.scss'],
})
export class StartDetailPage implements OnInit {
  loadContact: Contact;
  constructor(private contactService: StartSService,
    private activateRoute: ActivatedRoute,
    private route: Router,
    private alertcrl: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paraMap => {
      if (!paraMap.has('id')) {
        //redirect
        return;
      }
      const contact = paraMap.get('id');
      console.log(contact);
      this.loadContact = this.contactService.getContact(parseInt(contact));
    });
  }
  onDeleteContact() {
    this.alertcrl.create({
      header: 'Are you sure?',
      message: "Do you really want to delete the contact",
      buttons: [{
        text: 'cancel',
        role: 'cancel'
      },
      {
        text: 'delete',
        handler: () => {
          this.contactService.deleteRecipe(this.loadContact.id);
          console.log(this.loadContact.id);
          this.route.navigate(['start']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });

  }

}
