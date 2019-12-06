import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/book';
import { HttpErrorResponse } from '@angular/common/http';

export const loadBooks = createAction(
  '[Book] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ data: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: HttpErrorResponse }>()
);
