import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { userTypes } from 'src/app/Shared/Enums/publicEnums';
import { userNationalities } from 'src/app/Shared/Enums/publicEnums';
import { User } from '../../profile/models/user';
import { activityCategories } from 'src/app/Shared/Enums/publicEnums';
import { activityLenguages } from 'src/app/Shared/Enums/publicEnums';
import { activityStates } from 'src/app/Shared/Enums/publicEnums';
import { languageLevels } from 'src/app/Shared/Enums/publicEnums';
import { educationTypes } from 'src/app/Shared/Enums/publicEnums';
import { cycleLevelTypes } from 'src/app/Shared/Enums/publicEnums';
import { CultureHeritageCategoryOptions } from 'src/app/Shared/Enums/publicEnums';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      // tslint:disable-next-line: max-line-length
      {
        id: 1,
        profile: {
          type: userTypes.Company,
          name: 'Joan',
          companyName: 'Activities S.A.',
          surname: 'López Torras',
          email: 'jlopez@gmail.com',
          password: 'jlopez',
          birthDate: '30/05/1976',
          phone: 666556555,
          nationality: userNationalities.ES,
          nif: '24222123H',
          aboutMe: 'Me gusta hacer actividades',
        },
        languages: [
          {
            uid: 1,
            level: languageLevels.B1,
            language: activityLenguages.ES,
            finish: '12/12/2020',
          },
          {
            uid: 2,
            level: languageLevels.C2,
            language: activityLenguages.CA,
            finish: '12/12/2020',
          },
        ],
        educations: [
          {
            uid: 1,
            type: educationTypes.cycle,
            level: cycleLevelTypes.gradoSuperior,
            name: 'Informática',
            university: 'UOC',
            finish: '12/12/2000',
          },
        ],
      },
      // tslint:disable-next-line: max-line-length
      {
        id: 2,
        profile: {
          type: userTypes.Tourist,
          name: 'Xavier',
          surname: 'Diu Gómez',
          email: 'xdiu@gmail.com',
          password: 'xdiu',
          birthDate: '30/05/1978',
          phone: 666526555,
          nationality: userNationalities.ES,
          nif: '24222123H',
          aboutMe: '',
        },
        languages: [
          {
            uid: 1,
            level: languageLevels.B1,
            language: activityLenguages.ES,
            finish: '12/12/2020',
          },
          {
            uid: 2,
            level: languageLevels.C2,
            language: activityLenguages.CA,
            finish: '12/12/2020',
          },
        ],
        educations: [
          {
            uid: 1,
            type: educationTypes.cycle,
            level: cycleLevelTypes.gradoSuperior,
            name: 'Informática',
            university: 'UOC',
            finish: '12/12/2000',
          },
        ],
      },
      {
        id: 3,
        profile: {
          type: userTypes.Company,
          name: 'Manel',
          companyName: 'Activities 2 S.A.',
          surname: 'Giménez García',
          email: 'mgimenez@gmail.com',
          password: 'mgimenez',
          birthDate: '30/05/1982',
          phone: 664566555,
          nationality: userNationalities.ES,
          nif: '24222123H',
          aboutMe: 'Me gusta hacer actividades',
        },
        languages: [
          {
            uid: 1,
            level: languageLevels.B1,
            language: activityLenguages.ES,
            finish: '12/12/2020',
          },
          {
            uid: 2,
            level: languageLevels.C2,
            language: activityLenguages.CA,
            finish: '12/12/2020',
          },
        ],
        educations: [
          {
            uid: 1,
            type: educationTypes.cycle,
            level: cycleLevelTypes.gradoSuperior,
            name: 'Informática',
            university: 'UOC',
            finish: '12/12/2000',
          },
        ],
      },
      {
        id: 4,
        profile: {
          type: userTypes.Tourist,
          name: 'Xavier',
          surname: 'Diu Gómez',
          email: 'a@a.com',
          password: 'a',
          birthDate: '30/05/1978',
          phone: 666526555,
          nationality: userNationalities.ES,
          nif: '24222123H',
          aboutMe: '',
        },
        languages: [
          {
            uid: 1,
            level: languageLevels.B1,
            language: activityLenguages.ES,
            finish: '12/12/2020',
          },
          {
            uid: 2,
            level: languageLevels.C2,
            language: activityLenguages.CA,
            finish: '12/12/2020',
          },
        ],
        educations: [
          {
            uid: 1,
            type: educationTypes.cycle,
            level: cycleLevelTypes.gradoSuperior,
            name: 'Informática',
            university: 'UOC',
            finish: '12/12/2000',
          },
        ],
      },
      {
        id: 5,
        profile: {
          type: userTypes.Company,
          name: 'Manel',
          companyName: 'Activities 2 S.A.',
          surname: 'Giménez García',
          email: 'b@b.com',
          password: 'a',
          birthDate: '30/05/1982',
          phone: 664566555,
          nationality: userNationalities.ES,
          nif: '24222123H',
          aboutMe: 'Me gusta hacer actividades',
        },
        languages: [
          {
            uid: 1,
            level: languageLevels.B1,
            language: activityLenguages.ES,
            finish: '12/12/2020',
          },
          {
            uid: 2,
            level: languageLevels.C2,
            language: activityLenguages.CA,
            finish: '12/12/2020',
          },
        ],
        educations: [
          {
            uid: 1,
            type: educationTypes.cycle,
            level: cycleLevelTypes.gradoSuperior,
            name: 'Informática',
            university: 'UOC',
            finish: '12/12/2000',
          },
        ],
      },
    ];

    const activities = [
      {
        id: 1,
        name: 'Museo Picasso',
        category: activityCategories.Culture_Heritage,
        subcategory: CultureHeritageCategoryOptions.museoMonumento,
        description: 'Visita museo Picasso',
        language: activityLenguages.ES,
        date: '20/12/2020',
        price: 20.1,
        miniumCapacity: 10,
        limitCapacity: 30,
        state: activityStates.Places_available,
        peopleRegistered: 1,
        idUser: 1,
        signUpUsers: [2],
      },
      // tslint:disable-next-line: max-line-length
      {
        id: 2,
        name: 'Museo Miro',
        category: activityCategories.Culture_Heritage,
        subcategory: CultureHeritageCategoryOptions.museoMonumento,
        description: 'Visita museo Miró',
        language: activityLenguages.FR,
        date: '20/12/2020',
        price: 30.55,
        miniumCapacity: 10,
        limitCapacity: 30,
        state: activityStates.Places_available,
        peopleRegistered: 1,
        idUser: 1,
        signUpUsers: [],
      },
      {
        id: 3,
        name: 'Museo modernista',
        category: activityCategories.Culture_Heritage,
        subcategory: CultureHeritageCategoryOptions.museoMonumento,
        description: 'Visita museo modernista',
        language: activityLenguages.FR,
        date: '20/01/2021',
        price: 24,
        miniumCapacity: 10,
        limitCapacity: 30,
        state: activityStates.Places_available,
        peopleRegistered: 0,
        idUser: 3,
        signUpUsers: [],
      },
    ];

    return { users, activities };
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  }
}
