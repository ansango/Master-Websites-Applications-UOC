import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Education } from '../models/education';
import { Profile } from '../models/profile';
import { UserType } from '../models/user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  profileId!: number;
  profileType!: string;
  educationId!: number;

  private readonly urlEducation = 'api/education';
  private readonly urlProfiles = 'api/profiles';

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  getProfile(id: number): Observable<Profile> {
    this.profileId = id;
    const url = `${this.urlProfiles}/${id}`;
    return this.http.get<Profile>(url);
  }

  getEducation(): Observable<Education[]> {
    const url = `${this.urlEducation}`;
    return this.http.get<Education[]>(url);
  }

  getEducationById(id: number): Observable<Education> {
    this.educationId = id;
    if (id === 0) return of();
    const url = `${this.urlEducation}/${id}`;
    return this.http.get<Education>(url);
  }

  postProfile(profile: Profile): void {
    this.http
      .post<Profile>(this.urlProfiles, profile, this.httpOptions)
      .subscribe();
  }

  postEducation(education: Education): Observable<Education> {
    education.userId = this.profileId;
    return this.http.post<Education>(
      this.urlEducation,
      education,
      this.httpOptions
    );
  }

  updateProfile(profile: Profile): Observable<any> {
    if (profile.cif) profile.type = UserType.COMPANY;
    profile.type = UserType.TOURIST;
    profile.id = this.profileId;
    return this.http.put(this.urlProfiles, profile, this.httpOptions);
  }

  updateEducation(education: Education): Observable<any> {
    education.userId = this.profileId;
    education.id = this.educationId;
    return this.http.put(this.urlEducation, education, this.httpOptions);
  }

  deleteEducation(education: Education): Observable<Education> {
    const id = education.id;
    const url = `${this.urlEducation}/${id}`;
    return this.http.delete<Education>(url, this.httpOptions).pipe(
      tap((_) => {
        console.log(`education with id: ${id} was deleted`);
      })
    );
  }
}
