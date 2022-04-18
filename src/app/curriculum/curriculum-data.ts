import { InMemoryDbService } from 'angular-in-memory-web-api';


export interface Curriculum {
  id: number,
  category: string,
  institution: string,
  title: string,
  period: string,
  description: string,
  others?: string
}

export class CurriculumData implements InMemoryDbService {

  createDb() {
    const curriculums: Curriculum[] = [
      {
        id: 1,
        category: 'Education',
        institution: 'Católica Lisbon School of Business & Economics',
        title: 'Business Administration',
        period: '2008 - 2012',
        description: 'Business Administration and Management, General',
        others: 'Grade 12/20'
      },
      {
        id: 2,
        category: 'Other',
        institution: 'Australia',
        title: 'Gap year',
        period: 'Sep/2012 - May/2013',
        description: 'I worked in the hospitality industry and took C1 Advanced level on the Cambridge institute'
      },
      {
        id: 3,
        category: 'Employment',
        institution: 'Associação Nacional de Farmácias',
        title: 'Accountant / Financial Analyst',
        period: 'Jan/2014 - Aug/2014',
        description: '● Accounting services; ● Analysis and budgeting development on projects of various departments of the ANF. '
      },
      {
        id: 4,
        category: 'Employment',
        institution: 'BlueCrow Capital',
        title: 'Market Research Analyst',
        period: 'Sep/2014 - Oct/2015',
        description: 'BlueCrow Capital is a consulting company for private investment, operates in advising financial instruments to their clients. It is suited to investors who seek to maintain flexibility and independence in counseling their investments; '
          + '● Market and financial instruments analyst; '
          + '● Development of savings instruments / personal investment in partnership with an insurance company.'
      },
      {
        id: 5,
        category: 'Education',
        institution: 'Católica Lisbon School of Business & Economics',
        title: 'MIF - Master in Finance',
        period: '2015 - 2016',
        description:
          'The program starts with the Foundations of Finance Courses, which cover all the content of the CFA(R) Level I examination.' +
          'From January onward, participants enroll in the main block of advanced courses, whose scope goes well beyond the subjects of the CFA(R) Level II examination.' +
          '● Activities and societies: CFA level 2 candidate',
        others: 'Grade 12/20'
      },
      {
        id: 6,
        category: 'Entrepreneurship',
        institution: 'Startup Portugal',
        title: 'Entrepreneurship Scholarship',
        period: 'Apr/2018 - Mar/2019',
        description: 'Awarded an entrepreneurship grant under the StartUP Voucher program. The StartUP Voucher is one of the measures of IAPMEI to stimulate the development of business projects that are in an idea phase, over a period of up to 12 months of preparation of the business project.\n' +
          '● Market research in 2017, through work as a promoter and host with several companies (Activation, Hospedeiras de Portugal, Status Events, etc), to better know the market and establish contacts in side companies;\n' +
          '● Product design and mock-ups creation with www.figma.com (platform for collaborative design projects).\n' +
          '● Multiple business plans and presentation in order to meet requests of the StartUp Voucher.',

      },
      {
        id: 7,
        category: 'Entrepreneurship',
        institution: 'GigZap',
        title: 'Founder',
        period: 'Apr/2019 - Sep/2019',
        description: 'GigZap is an online marketplace targeted for temporary jobs (gigs). Our aim is to improve communication between recruiters and workers, while integrating various human resource management tools.\n' +
          '● GigZap was awarded a scholarship for 6 months and later received a prize of € 10,000 for implementation of the idea, under the program Empreende JÁ;\n' +
          '● With the completion of the MVP (minimum value product) in 2018, the first market tests were carried out, with about 500 people registered on the platform;\n' +
          '● A private investment of € 50,000 was raised in Oct/2018, for technical improvements in the platform; \n' +
          '\n' +
          'GigZap (www.gigzap.com) is online job platform for small "gigs" (jobs from one hour to a month, normally paid by the hour).\n' +
          '\n' +
          'This is a very intense and volatile market, with jobs at any time of the day and although many people have interest they have little and uncertain availability, since they are mainly college students.\n' +
          '\n' +
          'Although simple in theory this could be one of the recruitment market more unique. Recruitment Agencies have never had success using generic job platforms and has resorted to informal platforms like Facebook and WhatsApp groups, or even word of mouth to advertise job offers.\n' +
          '\n' +
          'It was with the observation of these and other pains that the recruiters of these agencies passed that GigZap was born.',

      },
      {
        id: 8,
        category: 'Education',
        institution: 'UpAcademy',
        title: 'Intensive Programming course',
        period: 'Oct/2019 - Jan/2020',
        description: 'Intensive course of 3 months, focused on JAVA and javascript languages and completed with a project on the Angular framework',

      },
      {
        id: 9,
        category: 'Employment',
        institution: 'Critical TechWorks',
        title: 'Intensive Programming course',
        period: 'Fev/2020 - present',
        description: 'Critical TechWorks is a joint venture between Critical Software and the BMW Group. ● During my time at the company I have mostly done frontend development on the Angular framework and e2e testing on Cypress framework ',
      }
    ];
    return { curriculums };
  }
}
