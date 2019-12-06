import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from '../reducers/book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBookLoading = createSelector(
  selectBookState,
  state => state.loading
);

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
);

/*
export const complexExample = createSelector(
  selectBookLoading,
  selectBooks,
  (stateLoading, stateBooks, props) => ({
    isbn: stateBooks[props.nr].isbn
  })
);
*/
