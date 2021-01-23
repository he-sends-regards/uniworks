export interface ISubject {
  name: string;
  id: string;
  eventkey: string;
  href: string;
  data: string[];
}
interface ISubjects {
  secondCourse: [];
  firstCourse: [];
  thirdCourse: ISubject[]
}

export const courses: {name: string, id: string, eventKey: string, disabled: boolean, subjects: ISubject[]}[] = [
  {
    name: '3 курс',
    id: 'thirdCourse',
    eventKey: 'third-course',
    disabled: false,
    subjects: [
      {
        name: 'ММДС',
        id: 'mmds',
        eventkey: 'mmds',
        href: '',
        data: [
          'л.р.№3.1',
          'л.р.№3.2',
          'РГР',
          'л.р.№4.1',
          'л.р.№4.2',
          'л.р.№4.3',
          'л.р.№4.4',
        ]
      },
      {
        name: 'СА',
        id: 'sa',
        eventkey: 'sa',
        href: '',
        data: [
          'л.р.№1',
          'л.р.№2',
          'л.р.№3',
          'л.р.№1_2',
          'ДЗ',
          'МКР№1',
          'МКР№2',
        ]
      },
      {
        name: 'ОТИС',
        id: 'otis',
        eventkey: 'otis',
        href: '',
        data: [
          'л.р.№1-1',
          'л.р.№1-2',
          'л.р.№1-3',
          'МКР№1',
          'л.р.№2-1',
          'л.р.№2-2',
          'л.р.№2-3',
          'л.р.№2-4',
          'МКР№2',
        ]
      },
      {
        name: 'ММДО',
        id: 'mmdo',
        eventkey: 'mmdo',
        href: '',
        data: [
          'л.р.№1',
          'ДЗ'
        ]
      },
      {
        name: 'ТКП',
        id: 'tkp',
        eventkey: 'tkp',
        href: '',
        data: [
          'л.р.№1',
          'л.р.№2',
          'л.р.№3',
          'л.р.№4',
          'л.р.№5',
          'л.р.№6',
          'л.р.№7',
          'МКР№1',
          'МКР№2'
        ]
      },
      {
        name: 'ОБДЗ',
        id: 'obdz',
        eventkey: 'obdz',
        href: '',
        data: [
          'л.р.№1',
          'л.р.№2',
          'л.р.№3',
          'л.р.№4',
          'л.р.№5',
          'л.р.№6',
          'МКР№1',
          'МКР№2',
          'Курсовая'
        ]
      }
    ]
  },
  {
    name: '2 курс',
    id: 'secondCourse',
    eventKey: 'second-course',
    disabled: true,
    subjects: []
  },
  {
    name: '1 курс',
    id: 'firstCourse',
    eventKey: 'first-course',
    disabled: true,
    subjects: []
  }
];

export const subjects:ISubjects = {
  thirdCourse: [
    {
      name: 'ММДС',
      id: 'mmds',
      eventkey: 'mmds',
      href: '',
      data: [
        'л.р.№3.1',
        'л.р.№3.2',
        'РГР',
        'л.р.№4.1',
        'л.р.№4.2',
        'л.р.№4.3',
        'л.р.№4.4',
      ]
    },
    {
      name: 'СА',
      id: 'sa',
      eventkey: 'sa',
      href: '',
      data: [
        'л.р.№3.1',
        'л.р.№3.2',
        'РГР',
        'л.р.№4.1',
        'л.р.№4.2',
        'л.р.№4.3',
        'л.р.№4.4',
      ]
    },
    {
      name: 'ОТИС',
      id: 'otis',
      eventkey: 'otis',
      href: '',
      data: [
        'л.р.№3.1',
        'л.р.№3.2',
        'РГР',
        'л.р.№4.1',
        'л.р.№4.2',
        'л.р.№4.3',
        'л.р.№4.4',
      ]
    },
    {
      name: 'ММДО',
      id: 'mmdo',
      eventkey: 'mmdo',
      href: '',
      data: [
        'л.р.№3.1',
        'л.р.№3.2',
        'РГР',
        'л.р.№4.1',
        'л.р.№4.2',
        'л.р.№4.3',
        'л.р.№4.4',
      ]
    },
    {
      name: 'ТКП',
      id: 'tkp',
      eventkey: 'tkp',
      href: '',
      data: [
        'л.р.№3.1',
        'л.р.№3.2',
        'РГР',
        'л.р.№4.1',
        'л.р.№4.2',
        'л.р.№4.3',
        'л.р.№4.4',
      ]
    },
    {
      name: 'ОБДЗ',
      id: 'obdz',
      eventkey: 'obdz',
      href: '',
      data: [
        'л.р.№3.1',
        'л.р.№3.2',
        'РГР',
        'л.р.№4.1',
        'л.р.№4.2',
        'л.р.№4.3',
        'л.р.№4.4',
      ]
    },
    {
      name: 'Английский',
      id: 'english',
      eventkey: 'english',
      href: '',
      data: [
        'л.р.№3.1',
        'л.р.№3.2',
        'РГР',
        'л.р.№4.1',
        'л.р.№4.2',
        'л.р.№4.3',
        'л.р.№4.4',
      ]
    },
  ],
  secondCourse: [],
  firstCourse: []
};

type StringObject = {
  [key: string]: string
}

export const AuthorizationStatus: StringObject = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH'
}
