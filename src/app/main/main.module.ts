import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SkilsComponent } from './components/skils/skils.component';
import { PersonalComponent } from './components/personal/personal.component';
import { JobComponent } from './components/job/job.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';



@NgModule({
  declarations: [
    MainComponent,
    SkilsComponent,
    PersonalComponent,
    JobComponent,
    ProjectComponent,
    SkillBarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
