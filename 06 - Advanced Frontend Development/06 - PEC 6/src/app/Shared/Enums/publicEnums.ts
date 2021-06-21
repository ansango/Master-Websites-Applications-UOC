
// Fichero que contiene todas las enumeraciones utilitzadas en la aplicación

export enum userTypes {
    Tourist = 'Tourist',
    Company = 'Company'
}

export enum userNationalities {
    ES = 'ES',
    FR = 'FR',
    IT = 'IT',
    PT = 'PT'
}

export enum activityCategories {
    Culture_Heritage = 'Cultura y patrimonio',
    Wine_tourism = 'Enoturismo',
    Beaches = 'Playas'
}

export enum activityLenguages {
    GB = 'Inglés',
    CA = 'Catalán',
    ES = 'Español',
    FR = 'Francés',
    DE = 'Alemán'
}

export enum activityStates {
    Cancelled  = 'Cancelado',
    Complete = 'Completo',
    Places_available = 'Plazas disponibles'
}

export enum languageLevels {
    A1  = 'A1',
    A2  = 'A2',
    B1  = 'B1',
    B2  = 'B2',
    C1  = 'C1',
    C2  = 'C2'
}

export enum educationTypes {
    university  = 'Título universitario',
    cycle  = 'Ciclo formativo'
}

export enum universityLevelTypes {
    grado  = 'Grado',
    diplomado  = 'Diplomado',
    licenciado  = 'Licenciado',
    ingeniero = 'Ingeniero',
    master = 'Máster',
    doctorado = 'Doctorado'
}

export enum cycleLevelTypes {
    gradoSuperior  = 'Grado superior',
    gradoMedio = 'Grado medio'
}

export enum CultureHeritageCategoryOptions {
    concierto  = 'Concierto',
    espectaculo = 'Espectáculo',
    excursion = 'Excursión',
    festivales = 'Festivales',
    visita = 'Visita guiada',
    museoMonumento = 'Museo y monumento'
}

export enum WineTourismCategoryOptions {
    bodega  = 'Bodega',
    cata = 'Cata de productos',
    excursion = 'Excursión',
    museo = 'Museo del vino',
    visita = 'Visita guiada'
}

export enum BeachesCategoryOptions {
    actividadNautica  = 'Actividad náutica',
    cala = 'Cala',
    concierto = 'Concierto',
    excursion = 'Excursión',
    taller = 'Taller'
}

export enum FilterType {
    myActivitiesFilter = 'My activities Filter',
    favoritesFilter = 'Favorites Filter'
}
