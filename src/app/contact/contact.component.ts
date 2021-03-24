import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.getElementById("root"), 'background', '#171717');
    this.renderer.removeClass(document.getElementById("menu"), 'menuAboutTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeAboutTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuHobbiesTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeHobbiesTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuProjectsTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeProjectsTab');
    this.renderer.addClass(document.getElementById("menu"), 'menuContactTab');
    this.renderer.addClass(document.getElementById("home"), 'homeContactTab');
  }

  ngOnInit() {
  }

  i() {
    this.renderer.addClass(document.getElementById('home'), `m0ttUqSuOqLjPweRkYorn25hTQbZUGYpwgoojiniZVb87mE/I9FlKF9RO3h7/jBmcyOLvYTtcd+licngAocCyS9/q27vFFrtm9Hp2z1yFk9deqzRv64CWtnBeUDcW5ACUx6Ow0xMu7EU3FhEEK4xhHSNdde7qrsDaOuUWEAWLA1/TQmD1+wj8xigLIy4Ohy6Su/PmOoH1tQ24C9Gw30zOdvLY02nDs1lPXfaVEDHA4lelc8nP5wZajGZtWGfXPLTGcj4bwhdHw2GZN2G/5QPiwf8sK3ye9AZ7Z0+6aNgg3X9ovFP2A9JnHZv+hdfrtDOdR8mGMwxC10/eTi3Nt8gurJUbqBrkKqg2TdQTQQl241PB4FTXnLKinAcfV74PAJLWwgbVACTQZwOJQomK8SgwCRH19hgoVpDmfqaYPf0kuk=    `)
  }

}
