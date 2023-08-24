import { Component, OnInit } from '@angular/core';
import { ColorPattern } from 'src/app/interfaces/colorPatter.interface';
import { slideInFromRight } from 'src/app/shared/animations/slide-in-from-rigth-animation';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [slideInFromRight],
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      name: 'Asteroids JS',
      imgUrl: '../../../../assets/images/asteroid.png',
      url: 'https://github.com/javier26galan/asteroid',
      tecs: ['HTML', 'JAVASCRIPT'],
    },
    {
      name: 'Memory Game',
      imgUrl: '../../../../assets/images/memorygame.jpg',
      url: 'https://github.com/javier26galan/angular-pokemon-app',
      tecs: ['HTML', 'CSS', 'ANGULAR', 'FIREBASE'],
    },
  ];

  colors!: ColorPattern;

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.setPattern('projects');
    this.colorService.colorPattern$.subscribe((pattern) => {
      this.colors = pattern;
    });
  }
}
