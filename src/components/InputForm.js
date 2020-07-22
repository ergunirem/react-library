import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            bookStatus: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {

        const newBook = {
            id: uuidv4(),
            title: this.state.bookTitle,
            author: this.state.bookAuthor,
            pages: this.state.bookPages,
            status: this.state.bookStatus
        }

        if (newBook.title === '' || newBook.author === '' || newBook.pages === '' || newBook.status === '') {
            alert('Please fill in all of the fields and select book\'s status')

        } else {
            this.props.onClick(newBook);
            this.setState({
                bookTitle: '',
                bookAuthor: '',
                bookPages: '',
                bookStatus: ''
            })
        }
    }

    render() {
        return (
            <div>
                <form name="form" action="">
                    <h1 id="inputTitle">New Book</h1>
                    <input
                        onChange={this.handleChange}
                        value={this.state.bookTitle} type="text" name="bookTitle" id="title" placeholder="Title" />
                    <input
                        onChange={this.handleChange}
                        value={this.state.bookAuthor} type="text" name="bookAuthor" id="author" placeholder="Author" />
                    <input
                        onChange={this.handleChange}
                        value={this.state.bookPages} type="number" name="bookPages" id="pages" min='1' placeholder="Number of pages" />
                    <select
                        onChange={this.handleChange}
                        value={this.state.bookStatus} name="bookStatus" id="read">
                        <option disabled value="">Read/To Read</option>
                        <option value="read">read</option>
                        <option value="not-read">to-read</option>
                    </select>
                    <button
                        onClick={this.handleSubmit}
                        type="submit">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default InputForm
