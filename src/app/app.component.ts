import { Component } from '@angular/core';
import { ColorService } from './shared/color.service';
import { ColorPattern } from './interfaces/colorPatter.interface';
import { slideInFromRight } from './shared/animations/slide-in-from-rigth-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInFromRight],
})
export class AppComponent {
  title = 'portfolio-front';
  colors!: ColorPattern;

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.setPattern('experience');
    this.colorService.colorPattern$.subscribe((pattern) => {
      this.colors = pattern;
    });
  }
}
