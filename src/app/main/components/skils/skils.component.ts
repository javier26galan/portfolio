import { Component, OnInit } from '@angular/core';
import { ColorPattern } from 'src/app/interfaces/colorPatter.interface';
import { slideInFromRight } from 'src/app/shared/animations/slide-in-from-rigth-animation';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss'],
  animations: [slideInFromRight],
})
export class SkilsComponent implements OnInit {
  colors!: ColorPattern;

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.setPattern('skills');
    this.colorService.colorPattern$.subscribe((pattern) => {
      this.colors = pattern;
    });
  }
}
