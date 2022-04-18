import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../curriculum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from '../curriculum-data';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {
  pageTitle: string = 'Cv Detail';
  curriculum: Curriculum = {
    id: 0,
    category: '',
    institution: '',
    title: '',
    period: '',
    description: '',
  };

  constructor(private curriculumService: CurriculumService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCv(id);
    }
  }

  getCv(id: number) {
    this.curriculumService.getCvById(id).subscribe(
      curriculum => this.curriculum = curriculum
    );
  }

  onBack(): void {
    this.router.navigate(['/cv']);
  }

}
