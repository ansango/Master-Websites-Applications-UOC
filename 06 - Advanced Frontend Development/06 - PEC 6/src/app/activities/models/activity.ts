import { activityCategories, activityLenguages, activityStates } from 'src/app/Shared/Enums/publicEnums';

export class Activity {
    id: number;
    name: string;
    category: activityCategories;
    subcategory: any;
    description: string;
    language: activityLenguages;
    date: string;
    price: number;
    miniumCapacity: number;
    limitCapacity: number;
    state: activityStates;
    peopleRegistered: number;
    // Identificador del usuario administrador de la actividad
    idUser: number;
    // Usarios apuntados a la actividad
    signUpUsers: number [];
}
