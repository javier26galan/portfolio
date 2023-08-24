import { Component, OnInit } from '@angular/core';
import { ColorPattern } from 'src/app/interfaces/colorPatter.interface';
import { slideInFromRight } from 'src/app/shared/animations/slide-in-from-rigth-animation';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [slideInFromRight],
})
export class PersonalComponent implements OnInit {
  colors!: ColorPattern;

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.setPattern('personal');
    this.colorService.colorPattern$.subscribe((pattern) => {
      this.colors = pattern;
    });
  }
}
