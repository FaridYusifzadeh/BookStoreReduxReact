import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions/';
import { compose } from '../../utils/';

class BookList extends Component {
  componentDidMount() {
    // iki sey etmeliyik
    // 1. melumatlari elde etmek
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);
    //2. peredat deystviye v store dispatch

    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book, index) => {
          return (
            <li key={index}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

//burda biz uje qlobal statetden gotururk ve unpuck edirik ki  returnda bele books: state.books yazmayaq qisa sadece books yazaq
const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
