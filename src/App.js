import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Header from './components/Header';
import BookTable from './components/BookTable';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    if(localStorage.getItem('localBooks') !== null) {
      const booksData = JSON.parse(localStorage.getItem('localBooks'))
      this.setState({ books: booksData })
      } 
  }

  handleSubmit = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] },
      () => localStorage.setItem('localBooks', JSON.stringify(this.state.books)))
  }

  handleDelete = (bookId) => {
    const books = this.state.books
    const updatedBooks = books.filter(book => book.id !== bookId)
    this.setState({ books: updatedBooks }, () => localStorage.setItem('localBooks', JSON.stringify(this.state.books)))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <InputForm onClick={this.handleSubmit}/>
        <BookTable booksData={this.state.books} onClick={this.handleDelete}/>
      </div>
    )
  }
}

export default App;
