import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Curriculum, CurriculumData } from './curriculum/curriculum-data';

export class AppData implements InMemoryDbService {

  createDb(): { curriculum: Curriculum[]} {
    const curriculum = CurriculumData.curriculum;
    return { curriculum };
  }
}
