/* eslint-disable react/prop-types */

const Note = ({ note, onDelete }) => {
    const formattedDate = new Date(note.created_at).toLocaleDateString('en-US')

    return (
        <div className="card mt-2">
            <div className="card-body p-3">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text note-content" >{note.content}</p>
                <p className="card-text font-monospace text-secondary">{formattedDate}</p>
                <button className="btn btn-danger float-end" onClick={() => onDelete(note.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Note
