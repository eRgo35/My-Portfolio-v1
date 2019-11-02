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

}
