import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[appActiveLink]',
})
export class ActiveLinkDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.routerState.snapshot.url;
        console.log('current url', currentUrl);
        this.removePreviousClasses();

        let activeClass = '';
        if (currentUrl === '/skills') {
          activeClass = 'gradient-underline-skills';
        } else if (currentUrl === '/about-me') {
          activeClass = 'gradient-underline-personal';
        } else if (currentUrl === '/projects') {
          activeClass = 'gradient-underline-projects';
        } else if (currentUrl === '/skills') {
          activeClass = 'gradient-underline-skills';
        } else if (currentUrl === '/experience') {
          activeClass = 'gradient-underline-experience';
        } else if (currentUrl === '/') {
          activeClass = 'gradient-underline-welcome';
        }

        this.renderer.addClass(this.el.nativeElement, activeClass);
      });
  }
  private removePreviousClasses(): void {
    const classNames = [
      'gradient-underline-welcome',
      'gradient-underline-skills',
      'gradient-underline-experience',
      'gradient-underline-projects',
      'gradient-underline-personal',
    ];

    for (const className of classNames) {
      this.renderer.removeClass(this.el.nativeElement, className);
    }
  }
}
