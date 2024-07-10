import { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const RegisterForm = ({ route }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    console.log(route)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            await api.post(route, { username, password })
            navigate('/login')
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>

            <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                />
                <div className="form-text">More than 5 words</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Comfirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                />
            </div>

            <p className="text-muted mb-3 mb-0">
                Have already an account?{' '}
                <a href="/login" className="fw-bold text-body">
                    <u>Login here</u>
                </a>
            </p>

            <button type="submit" className="btn btn-primary float-end">
                Submit {loading ? <img src="./loading1.svg" /> : ''}
            </button>
        </form>
    )
}

export default RegisterForm
