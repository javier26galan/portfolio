import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColorPattern } from '../interfaces/colorPatter.interface';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private colorPatternSubject = new BehaviorSubject<ColorPattern>({
    primary: '#944dfe',
    secondary: '#fe944d',
  });

  colorPattern$ = this.colorPatternSubject.asObservable();
  private colorPatterns: { [key: string]: ColorPattern } = {
    welcome: {
      primary: '#944dfe',
      secondary: '#fe944d',
    },
    skills: {
      primary: '#fe4d5f',
      secondary: '#fe944d',
    },
    experience: {
      primary: '#4AB840',
      secondary: '#fe4db7',
    },
    projects: {
      primary: '#18dcff',
      secondary: '#e334d0',
    },
    personal: {
      primary: '#fe4d5f',
      secondary: '#4ab840',
    },
  };

  constructor() {
    this.colorPattern$.subscribe((pattern) => {
      console.log('constructor colorService:', pattern);
    });
  }

  getColors(): ColorPattern {
    return this.colorPatternSubject.value;
  }

  setPattern(pattern: string): void {
    if (this.colorPatterns[pattern]) {
      this.colorPatternSubject.next(this.colorPatterns[pattern]);
    }
  }
}
