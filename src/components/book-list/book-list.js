import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css'

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book,index) => {
          return (
            <li key={index} >
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BookList;
