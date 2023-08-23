import { Component, OnInit } from '@angular/core';
import { ColorPattern } from 'src/app/interfaces/colorPatter.interface';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  color!: ColorPattern;

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {

  }

}
