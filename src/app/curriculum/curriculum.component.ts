import { Component } from '@angular/core';
import { CurriculumService } from './curriculum.service';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {

  pageTitle = 'Curriculum Vitae - most relevant';
  selectedOption = 'All';

  private categorySelectedSubject = new BehaviorSubject<string>('All');
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  curriculums$ = combineLatest([
    this.curriculumService.getCurriculums(),
    this.categorySelectedAction$
  ])
    .pipe(
      map(([cvs, selectedCategory]) =>
        cvs.filter(cv =>
          selectedCategory !== 'All' ? cv.category === selectedCategory : true
        ))
    )

  constructor(private curriculumService: CurriculumService) { }

  onSelected() {
    this.categorySelectedSubject.next(this.selectedOption);
  }

}
