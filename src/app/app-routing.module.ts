import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  // Main Paths
  { path: '', component: AboutmeComponent, data: { animation: 'isFarLeft' } },
  { path: 'hobbies', component: HobbiesComponent, data: { animation: 'isLeft' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'isRight' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'isFarRight' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
