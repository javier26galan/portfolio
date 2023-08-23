import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
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

  ngOnInit(): void {}
}
