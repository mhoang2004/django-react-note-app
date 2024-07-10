import RegisterForm from '../components/RegisterForm'
import '../styles/RegisterForm.css'

const Register = () => {
    return (
        <div className="vh-100">
            <div className="mask d-flex align-items-center h-100 gradient-custom-4">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card custom-border">
                                <div className="card-body p-5">
                                    <RegisterForm route="/api/user/register/" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
