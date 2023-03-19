import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Cv } from '@dan/interfaces';

@Component({
  selector: 'wd-cv',
  templateUrl: './cv.page.html',
  styleUrls: ['./cv.page.scss'],
})
export class CvPage {
  cvList!: Cv[];

  constructor(private readonly cvService: CvService) {
    this.cvService.getAll().subscribe((cv) => {
      this.cvList = cv;
    });
  }
}
