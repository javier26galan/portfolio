import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { ColorService } from './color.service';
import { ColorPattern } from '../interfaces/colorPatter.interface';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[gradientBackground]',
})
export class GradientBackgroundDirective {
  private colorSubscription: Subscription;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private colorService: ColorService
  ) {
    console.log("directiva");
    this.colorSubscription = this.colorService.colorPattern$.subscribe(
      (pattern) => {
        console.log('directiva', pattern);
        this.applyGradient(pattern);
      }
    );
  }

  private applyGradient(pattern:ColorPattern) {
    const primaryColor = pattern.primary;
    const secondaryColor = pattern.secondary;

    const gradientStyle = `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`;
    this.renderer.setStyle(this.el.nativeElement, 'background', gradientStyle);
  }
}
