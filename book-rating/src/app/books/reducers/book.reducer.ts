import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from '../actions/book.actions';

export const bookFeatureKey = 'book';

export interface State {

}

export const initialState: State = {

};

const bookReducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => state),
  on(BookActions.loadBooksSuccess, (state, action) => state),
  on(BookActions.loadBooksFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}
