import { useState } from 'react'
import api from '../api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const LoginForm = ({ route }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const res = await api.post(route, { username, password })

            // save user's token
            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)

            navigate('/')
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-uppercase text-center mb-3">LOGIN</h2>

            <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                />
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

            <p className="text-muted mb-3 mb-0">
                Do not have an account?{' '}
                <a href="/register" className="fw-bold text-body">
                    <u>Register here</u>
                </a>
            </p>

            <button type="submit" className="btn btn-primary float-end">
                Login {loading ? <img src="./loading1.svg" /> : ''}
            </button>
        </form>
    )
}

export default LoginForm
