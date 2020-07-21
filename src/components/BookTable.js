import React, { Component } from 'react'
import BookTableRow from './BookTableRow'

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
                        {bookComponents}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BookTable
