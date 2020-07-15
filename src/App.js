import React, { Component } from 'react';
import AuthorInput from './components/AuthorInput';
import Authors from './components/Authors';
import BookInput from './components/BookInput';
import Books from './components/Books';
import authorsReducer from './reducers/authorsReducer';
import booksReducer from './reducers/booksReducer';
 
const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})
 
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Authors</h2>
          <AuthorInput />
          <Authors />
        </div>
        <div>
          <h2>Book</h2>
          <BookInput />
          <Books />
        </div>
      </div>
    );
  }
};

export default App;
