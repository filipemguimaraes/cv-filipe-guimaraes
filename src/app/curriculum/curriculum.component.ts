import { Component, OnInit } from '@angular/core';
import { CurriculumService } from './curriculum.service';
import { Observable } from 'rxjs';
import { Curriculum } from './curriculum-data';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  pageTitle = 'Curriculum Vitae';

  curriculums$: Observable<Curriculum[]> = this.curriculumService.getCurriculums();

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
  }

  onSelected(value: any) {

  }

  onAdd() {

  }

  detailCV(id: number) {

  }

  deleteCv(id: number) {
  }

}
