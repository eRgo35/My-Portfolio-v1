import { Component, OnInit, Renderer2 } from '@angular/core';
import { SliderAnimation } from '../animations/SliderAnimation';

interface ROUTE {
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  animations: [SliderAnimation]
})
export class HobbiesComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.getElementById("root"), 'background', '#fdd835');
    this.renderer.removeClass(document.getElementById("menu"), 'menuAboutTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeAboutTab');
    this.renderer.addClass(document.getElementById("menu"), 'menuHobbiesTab');
    this.renderer.addClass(document.getElementById("home"), 'homeHobbiesTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuProjectsTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeProjectsTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuContactTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeContactTab');
  }

  ngOnInit() {
  }

}
