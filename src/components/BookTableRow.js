import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa';

class BookTableRow extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleDelete = () => {
        this.props.onClick(this.props.book.id)
    }

    render() {
        return (
            <tr>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.pages}</td>
                <td>{this.props.book.status}</td>
                <td><button onClick={this.handleDelete}><FaTrash /></button></td>
            </tr>
        )
    }
}

export default BookTableRow
