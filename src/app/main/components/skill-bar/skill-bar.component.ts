import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {
  skills = [
    { name: 'HTML & CSS', progress: 85 },
    { name: 'JavaScript', progress: 75 },
    { name: 'Angular', progress: 65 },
    { name: 'NodeJS', progress: 60 },
    { name: 'PHP', progress: 65 },
    { name: 'Wordpress', progress: 75 },
    // Agrega más habilidades aquí
  ];

  constructor() {}

  ngOnInit(): void {}
}
