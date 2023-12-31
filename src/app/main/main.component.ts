import { Component, OnInit } from '@angular/core';
import { ColorPattern } from '../interfaces/colorPatter.interface';
import { ColorService } from '../shared/color.service';
import { slideInFromRight } from '../shared/animations/slide-in-from-rigth-animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideInFromRight],
})
export class MainComponent implements OnInit {
  colors!: ColorPattern;

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.setPattern('welcome');
    this.colorService.colorPattern$.subscribe((pattern) => {
      this.colors = pattern;
    });
  }
  ngDestroy() {}
}
