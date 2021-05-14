import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {

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

  items = [
    {
      type: 'Web Development',
      content: [
      {
        title: 'Project TSI',
        version: '4.1.1',
        href: 'https://github.com/eRgo35/Project-TSI'
      },
      {
        title: 'JS Calculator',
        version: '1.0.0',
        href: 'https://github.com/eRgo35/JS-Calculator'
      },
      {
        title: 'Ergo Framework',
        version: '1.0.2',
        href: 'https://github.com/eRgo35/Ergo-Framework'
      },
      {
        title: 'To-Do App',
        version: '0.1.0',
        href: 'https://github.com/eRgo35/To-Do-App'
      }
    ]
    },
    {
      type: 'C# Projects',
      content: [
        {
          title: 'Server Manager',
          version: '1.0.0',
          href: 'https://github.com/eRgo35/Server-Manager'
        }
      ]
    },
    {
      type: 'C++ Projects',
      content: [
        {
          title: 'Base Converter',
          version: '1.0.0',
          href: 'https://github.com/eRgo35/Base-Converter'
        },
        {
          title: 'Telephone Number Converter',
          version: '1.0.0',
          href: 'https://github.com/eRgo35/Telephone-Number-Converter'
        }
      ]
    },
    {
      type: 'Python Projects',
      content: [
        {
          title: 'Guess the Number',
          version: '2.0.0',
          href: 'https://github.com/eRgo35/Guess-the-Number' 
        },
        {
          title: 'Telephone Number Converter',
          version: '1.0.0',
          href: 'https://github.com/eRgo35/Telephone-Number-Converter-Py'
        }
      ]
    }
  ]
}
