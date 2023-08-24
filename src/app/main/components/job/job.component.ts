import { Component, OnInit } from '@angular/core';
import { ColorPattern } from 'src/app/interfaces/colorPatter.interface';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  jobs = [
    {
      companyName: 'Garaje de ideas',
      projects: [
        {
          projectName: 'Web Igenomix',
          workDescription:
            'Administration of a group of wordpress pages, maintenance, plugin developing...',
          imgUrl: '',
          url: 'https://www.igenomix.eu/',
          skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'WORDPRESS'],
        },
        {
          projectName: 'E-commerce Colecciones el pais',
          workDescription:
            'Maintenance of a prestashop and helping to improve security',
          imgUrl: '',
          url: 'https://colecciones.elpais.com/',
          skills: ['HTML', 'JAVASCRIPT', 'PHP', 'PRESTASHOP'],
        },
      ],
    },
  ];
  colors!: ColorPattern;

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.setPattern('experience');
    this.colorService.colorPattern$.subscribe((pattern) => {
      this.colors = pattern;
    });
  }

}
