

export interface Curriculum {
  id: number,
  category: string,
  schoolName: string,
  courseName: string,
  city: string,
  grade: number
}

export class CurriculumData {
  static curriculum: Curriculum[] = [
    {
      id: 1,
      category: 'Education',
      schoolName: 'UCP',
      courseName: 'Business Administration',
      city: 'Lisbon',
      grade: 15
    },
    {
      id: 2,
      category: 'Education',
      schoolName: 'UCP',
      courseName: 'MIF - Master in Finance',
      city: 'Lisbon',
      grade: 15
    }
  ]
}
