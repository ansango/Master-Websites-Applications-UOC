import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import {
  Activity,
  ActivityCategory,
  ActivitySubcategoryBeach,
  ActivityLanguage,
  ActivitySubcategoryWine,
  MyActivity,
} from 'src/app/models/activity';
import {
  Education,
  EducationType,
  EducationUniversity,
  EducationTraining,
} from 'src/app/models/education';

import { UserNationality, User, UserType } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities: Activity[] = [
      {
        id: 1,
        name: 'Surfing',
        category: ActivityCategory.BEACH,
        subcategory: ActivitySubcategoryBeach.ACTIVITY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 20,
        date: new Date(2020, 10, 28),
        peopleRegistered: 1,
        adminId: 2,
      },
      {
        id: 2,
        name: 'Snorkel',
        category: ActivityCategory.BEACH,
        subcategory: ActivitySubcategoryBeach.ACTIVITY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 20,
        date: new Date(2020, 10, 28),
        peopleRegistered: 5,
        adminId: 2,
      },
      {
        id: 3,
        name: 'Drink',
        category: ActivityCategory.WINE,
        subcategory: ActivitySubcategoryWine.WINERY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 10,
        date: new Date(2020, 10, 28),
        peopleRegistered: 1,
        adminId: 3,
      },
      {
        id: 4,
        name: 'Tinto',
        category: ActivityCategory.WINE,
        subcategory: ActivitySubcategoryWine.WINERY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 10,
        date: new Date(2020, 10, 28),
        peopleRegistered: 1,
        adminId: 3,
      },
      {
        id: 5,
        name: 'Verdejo',
        category: ActivityCategory.WINE,
        subcategory: ActivitySubcategoryWine.WINERY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 10,
        date: new Date(2020, 10, 28),
        peopleRegistered: 1,
        adminId: 3,
      },
      {
        id: 6,
        name: 'Ribera',
        category: ActivityCategory.WINE,
        subcategory: ActivitySubcategoryWine.WINERY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 10,
        date: new Date(2020, 10, 28),
        peopleRegistered: 1,
        adminId: 3,
      },
      {
        id: 7,
        name: 'EE',
        category: ActivityCategory.WINE,
        subcategory: ActivitySubcategoryWine.WINERY,
        description: 'asfadg',
        language: ActivityLanguage.EN,
        price: 10,
        date: new Date(2020, 10, 28),
        peopleRegistered: 1,
        adminId: 3,
      },
    ];
    const myActivities: MyActivity[] = [
      {
        id: 1,
        activityId: 1,
        userId: 1,
      },
      {
        id: 2,
        activityId: 2,
        userId: 2,
      },
      {
        id: 3,
        activityId: 2,
        userId: 1,
      },
    ];
    const users: User[] = [
      {
        id: 1,
        firstName: 'anibal',
        lastName: 'santos',
        userType: UserType.TOURIST,
        email: 'a@a.es',
        password: 'asg',
        birthday: new Date(1989, 1, 7),
        phone: '645227483',
        nationality: UserNationality.ES,
        nif: '70873352W',
        about: 'Soy Anibal Santos, un turista',
      },
      {
        id: 2,
        firstName: 'anibal',
        lastName: 'santos',
        userType: UserType.COMPANY,
        email: 'b@b.es',
        password: 'asg',
        birthday: new Date(1989, 1, 7),
        phone: '645227483',
        nationality: UserNationality.ES,
        nif: '70873352W',
        about: 'Soy Anibal Santos, un empresario',
        companyName: 'Metropolis Coop',
        companyDescription: 'Cooperativa de Vigo',
        cif: 'A58818501',
      },
    ];
    const education: Education[] = [
      {
        id: 1,
        userId: 1,
        name: 'Master Web',
        school: 'UOC',
        finishDate: new Date(2021, 11, 31),
        type: EducationType.UNIVERSITY,
        level: EducationUniversity.MASTER,
      },
      {
        id: 2,
        userId: 1,
        name: 'Law Degree',
        school: 'USAL',
        finishDate: new Date(2012, 11, 31),
        type: EducationType.UNIVERSITY,
        level: EducationUniversity.GRADUATE2,
      },
      {
        id: 3,
        userId: 2,
        name: 'Law Degree',
        school: 'USAL',
        finishDate: new Date(2012, 11, 31),
        type: EducationType.UNIVERSITY,
        level: EducationUniversity.GRADUATE2,
      },
      {
        id: 3451,
        userId: 1,
        name: 'DAM',
        school: 'Ilerna Online',
        finishDate: new Date(2021, 11, 31),
        type: EducationType.TRAINING,
        level: EducationTraining.HNC,
      },
    ];
    return { activities, myActivities, users, education };
  }
}
