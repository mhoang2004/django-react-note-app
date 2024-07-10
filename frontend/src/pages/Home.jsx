import { useState, useEffect } from 'react'
import Note from '../components/Note'
import api from '../api'
import '../styles/Home.css'

const Home = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        api.get('/api/notes/')
            .then((res) => res.data)
            .then((notes) => {
                setNotes(notes.reverse())
                console.log(notes)
            })
            .catch((error) => alert(error))
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}`)
            .then((res) => {
                if (res.status === 204) alert('Note deleted!')
                else alert('Failed!')
                getNotes()
            })
            .catch((error) => alert(error))
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post('/api/notes/', { content, title })
            .then((res) => {
                if (res.status === 201) alert('Note created')
                else alert('Failed!')
                getNotes()
            })
            .catch((error) => alert(error))
    }
    return (
        <div className="container">
            <h1 className="text-center mb-4">Note Web App</h1>
            <div className="d-flex justify-content-between">
                <div className="flex-half p-2">
                    <h2 className="text-center bg-warning p-1">Create</h2>
                    <form onSubmit={createNote}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                autoFocus
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">
                                Content
                            </label>
                            <textarea
                                className="form-control"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                htmlFor="content"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="flex-half p-2">
                    <h2 className="text-center bg-info p-1">Notes</h2>

                    <div>
                        {notes.map((note) => (
                            <Note note={note} onDelete={deleteNote} key={note.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
