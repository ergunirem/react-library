import React, { Component } from 'react'
import BookTableRow from './BookTableRow'
import { FaTrash } from 'react-icons/fa';

class BookTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleDelete = (bookId) => {
        this.props.onClick(bookId)
    }

    render() {
        const bookComponents = this.props.booksData.map(book => <BookTableRow key={book.id} book={book} onClick={this.handleDelete} />)
        return (
            <div>
                <table border={"1"} className="my-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Pages</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.booksData.length === 0 
                        ? <tr>
                                <td>Sample Title</td>
                                <td>Sample Author</td>
                                <td>999</td>
                                <td>to-read</td>
                                <td><button onClick={this.handleDelete}><FaTrash /></button></td>
                            </tr>
                        : bookComponents }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BookTable
