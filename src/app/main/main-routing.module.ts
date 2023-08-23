import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SkilsComponent } from './components/skils/skils.component';
import { ProjectComponent } from './components/project/project.component';
import { PersonalComponent } from './components/personal/personal.component';
import { JobComponent } from './components/job/job.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'skills', component: SkilsComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'about-me', component: PersonalComponent },
  { path: 'experience', component: JobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
