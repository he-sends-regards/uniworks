export interface ISubject {
  name: string;
  id: string;
  eventkey: string;
  href: string;
  data: string[];
}

const faculties = [
  {
    id: 'fkkpi',
    name: 'ФККПИ'
  }
];

const courses = [
  {
    id: 'thirdCourse',
    name: 'Третий курс'
  },
  {
    id: 'secondCourse',
    name: 'Второй курс'
  },
  {
    id: 'firstCourse',
    name: 'Первый курс'
  },
];

const subjects = {
  fkkpi: {
    thirdCourse: [
      {
        id: 'mmds',
        name: 'ММДС'
      },
      {
        id: 'sa',
        name: 'СА'
      },
      {
        id: 'obdz',
        name: 'ОБДЗ'
      },
    ]
  }
};

const works = {
  mmds: [
    {
      id: 'lw3_1',
      name: 'Л.Р.№3-1'
    },
    {
      id: 'lw3_2',
      name: 'Л.Р.№3-2'
    },
    {
      id: 'rgr',
      name: 'РГР'
    },
  ],
  sa: [
    {
      id: 'lw1_1',
      name: 'Л.Р.№1'
    },
    {
      id: 'lw1_2',
      name: 'Л.Р.№2'
    },
  ],
  obdz: [
    {
      id: 'lw1',
      name: 'Л.Р.№1'
    },
    {
      id: 'lw2',
      name: 'Л.Р.№2'
    },
  ]
};

export {faculties, courses, subjects, works};

export type StringObjectType = {
  [key: string]: string
}

export const AuthorizationStatus: StringObjectType = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH'
}
