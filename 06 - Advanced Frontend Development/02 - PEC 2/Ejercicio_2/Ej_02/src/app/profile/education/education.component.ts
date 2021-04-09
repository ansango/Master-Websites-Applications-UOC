import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserId } from 'src/app/auth/state/auth.selectors';
import { Education } from 'src/app/models/education';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store/app.state';
import { deleteEducation, loadEducation } from '../state/profile.actions';
import { getEducation } from '../state/profile.selectors';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  profileId?: number = 0;
  education$!: Observable<Education[]>;
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.education$ = this.store.select(getEducation);
    this.store.select(getUserId).subscribe((id) => (this.profileId = id));
    this.store.dispatch(loadEducation({ idUser: this.profileId }));
  }

  onDelete(id?: number) {
    if (confirm('Are you sure you want to delete?') && id !== undefined) {
      this.store.dispatch(deleteEducation({ id }));
    }
  }
}
