import { Component, Renderer2 } from '@angular/core';
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
export class HobbiesComponent {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.getElementById("root"), 'background', '#F49F0A');
    this.renderer.removeClass(document.getElementById("menu"), 'menuAboutTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeAboutTab');
    this.renderer.addClass(document.getElementById("menu"), 'menuHobbiesTab');
    this.renderer.addClass(document.getElementById("home"), 'homeHobbiesTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuProjectsTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeProjectsTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuContactTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeContactTab');
  }

  items = [
    {
      type: 'Google Earth Studio',
      href: 'https://www.youtube.com/playlist?list=PLgm7_rin1dVzcviyHPVFLvvuzX2dogIPV'
    },
    {
      type: 'Portal Speedruns',
      href: 'https://www.youtube.com/playlist?list=PLgm7_rin1dVwmGrP2i2eXddbrT1H4lwAo'
    },
    {
      type: 'Card Magic',
      href: 'https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ'
    },
    {
      type: 'Speedcubing',
      href: 'https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ'
    }
  ]
}
