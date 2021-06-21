
import { Language } from './language';
import { Education } from './education';
import { Profile } from './profile';

export class User {
    id: number;
    profile: Profile;
    languages: Language [];
    educations: Education [];
    constructor() {
        this.profile = new Profile();
    }
}
