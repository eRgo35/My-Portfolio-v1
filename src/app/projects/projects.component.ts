import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.getElementById("root"), 'background', '#3A6EA5');
    this.renderer.removeClass(document.getElementById("menu"), 'menuAboutTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeAboutTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuHobbiesTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeHobbiesTab');
    this.renderer.addClass(document.getElementById("menu"), 'menuProjectsTab');
    this.renderer.addClass(document.getElementById("home"), 'homeProjectsTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuContactTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeContactTab');
  }

  ngOnInit() {
  }

}
