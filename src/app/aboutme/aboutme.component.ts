import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.getElementById("root"), 'background', '#dfdfdf');
    this.renderer.addClass(document.getElementById("menu"), 'menuAboutTab');
    this.renderer.addClass(document.getElementById("home"), 'homeAboutTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuHobbiesTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeHobbiesTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuProjectsTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeProjectsTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuContactTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeContactTab');
  }

  ngOnInit() {
  }

}
