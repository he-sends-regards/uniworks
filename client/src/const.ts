export const courses: {name: string, id: string, eventKey: string, disabled: boolean}[] = [
  {
    name: '3 курс',
    id: 'thirdCourse',
    eventKey: 'third-course',
    disabled: false
  },
  {
    name: '2 курс',
    id: 'secondCourse',
    eventKey: 'second-course',
    disabled: true
  },
  {
    name: '1 курс',
    id: 'firstCourse',
    eventKey: 'first-course',
    disabled: true
  }
];

interface Subjects {
  secondCourse: [];
  firstCourse: [];
  thirdCourse: {
    name: string,
    id: string,
    eventkey: string,
    href: string,
    data: string[]
  }[]
}

export const subjects:Subjects = {
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
