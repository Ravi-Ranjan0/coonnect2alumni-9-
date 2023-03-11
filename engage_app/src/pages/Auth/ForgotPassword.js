import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import axios from 'axios'


const REACT_APP_API = 'http://localhost:8080'

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${REACT_APP_API}/api/v1/auth/forgotpassword`,
            {email, newPassword, answer}
            );
            if(res && res.data.success){
                toast.success(res.data.message)
                navigate('/login')
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    };



  return (
    <Layout>
        <section  className="registration-section">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsl(0, 0%, 96%)'}}>
            <div className="container">
            <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                    <span className="text-primary">Students</span><br />
                    Forgot Password
                </h1>
                <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
                "Log In to Access Our Comprehensive Career Resources and Connect with Alumni Mentors for Success!
                Get Ahead in Your Career with Our Mentorship Platform "
                </p>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                    <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit}>
                        {/* <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1">First name</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" />
                            <label className="form-label" htmlFor="form3Example2">Last name</label>
                            </div>
                        </div>
                        </div> */}
                        {/* <div className="form-outline mb-4">
                        <input type="text"
                            value={name}
                            onChange = {(e) => setName(e.target.value)}
                            id="form3Example1" 
                            className="form-control"
                            placeholder=' Enter your Username'
                            required />
                        </div> */}
                        <div className="form-outline mb-4">
                        <input type="email" 
                        value={email} 
                        onChange = {(e) => setEmail(e.target.value)}
                        id="form3Example2" 
                        className="form-control" 
                        placeholder=' Enter your Email address'
                        required  />
                        </div>
                        <div className="form-outline mb-4">
                        <input type="text"
                            value={answer}
                            onChange = {(e) => setAnswer(e.target.value)}
                            id="form3Example1" 
                            className="form-control"
                            placeholder=' Enter your Favourite Sports'
                            required />
                        </div> 
                        
                        <div className="form-outline mb-4">
                        <input type="password" 
                        value={newPassword} 
                        onChange = {(e) => setNewPassword(e.target.value)}
                        id="form3Example3" 
                        className="form-control" 
                        placeholder=' Enter your New Password'
                        required />
                        </div>
                        {/* <div className="form-check mb-4">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                        <label className="form-check-label" htmlFor="form2Example33">
                            Subscribe to our newsletter
                        </label>
                        </div> */}
                        <button type="submit" className="btn btn-primary btn-block mb-4">
                        Reset
                        </button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </Layout>
  )
}

export default ForgotPassword