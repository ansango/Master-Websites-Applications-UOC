import { languageLevels, activityLenguages } from 'src/app/Shared/Enums/publicEnums';

export class Language {
    uid: number;
    level: languageLevels;
    language: activityLenguages;
    finish: string;
}
