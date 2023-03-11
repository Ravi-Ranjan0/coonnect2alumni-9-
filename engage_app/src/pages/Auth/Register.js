import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout'
import './register.css'
import {Link,useNavigate} from 'react-router-dom'
// import {FaFacebookSquare , FaTwitterSquare , FaGithubSquare } from 'react-icons/fa'
// import {FcGoogle} from'react-icons/fc'
import {toast} from 'react-hot-toast'
import axios from 'axios'

const REACT_APP_API = 'http://localhost:8080'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${REACT_APP_API}/api/v1/auth/register`,
            {name, email, password, answer}
            );
            if(res && res.data.success){
                toast.success(res.data.message)
                navigate('/dashboard')
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
    {/* <section  className="registration-section">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsl(0, 0%, 96%)'}}>
            <div className="container">
            <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                <span className="text-primary">Students</span><br />
                Registeration 
                </h1>
                <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
                "Join Our Community of Future Leaders and Gain Valuable Career Insights from Experienced Alumni Mentors!
                Discover Endless Career Opportunities with Our Powerful Network of Alumni Mentors and Resources!"
                </p>
                <button type="submit" className="btn btn-primary btn-block mb-4">
                        Register for Alumni
                </button>
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
                        </div>
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
                        <input type="password" 
                        value={password} 
                        onChange = {(e) => setPassword(e.target.value)}
                        id="form3Example3" 
                        className="form-control" 
                        placeholder=' Enter your Password'
                        required />
                        </div>
                        <div className="form-outline mb-4">
                        <input type="text" 
                        value={answer} 
                        onChange = {(e) => setAnswer(e.target.value)}
                        id="form3Example4" 
                        className="form-control" 
                        placeholder='Enter is  your favourite Sports'
                        required />
                        </div> */}
                        {/* <div className="form-check mb-4">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                        <label className="form-check-label" htmlFor="form2Example33">
                            Subscribe to our newsletter
                        </label>
                        </div> */}
                        {/* <button type="submit" className="btn btn-primary btn-block mb-4">
                        Sign up
                        </button>
                        <div className="text-center">
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FaFacebookSquare />
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FcGoogle />
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FaTwitterSquare />
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FaGithubSquare />
                        </button>
                        </div>
                        <p className='text-center mt-3'>Already have an account? <Link to="/login">Log in here</Link></p>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section> */} 

    <div className='d-flex justify-content-center'>
    <div className="text-center mt-3 mb-5">
    <form onSubmit={handleSubmit}>
    <div className="form-signin w-100 m-auto" >
    <div>
        <img className="mb-4" src="https://cdn-icons-png.flaticon.com/512/3365/3365355.png" alt='pic' width={100} height={100} />
        <h1 className="h3 mb-3 fw-bold">Welcome to Connect2Alumni</h1>
      </div>
      <div className="card text-center ">
        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button  to ='/register' className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"  role="tab" aria-controls="home-tab-pane" aria-selected="true">Sign Up</button>
          </li>
          <li className="nav-item" role="presentation">
            <p to='/login' className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"  role="tab" aria-controls="profile-tab-pane" aria-selected="false"><Link to="/login" style={{textDecoration:'none'}}>Login</Link></p>
          </li>
        </ul>
       
        <div className="tab-content" id="myTabContent">
        
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
            <div className="card-body">
              <div className="form-floating mt-3">
                <input type="text" value={name} 
                        onChange = {(e) => setName(e.target.value)} className="form-control" id="floatingInput" placeholder="Username" required />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating mt-3">
                <input value={email} 
                        onChange = {(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" required />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mt-3">
                <input value={password} 
                        onChange = {(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mt-3">
                <input value={answer} 
                        onChange = {(e) => setAnswer(e.target.value)} type="text" className="form-control" id="floatingAnswer" placeholder="Answer" required/>
                <label htmlFor="floatingPassword">Answer</label>
              </div>
              <button className="w-100  mt-3 btn btn-lg btn-primary" type="submit">Create An Account</button>
            </div>
          </div>
          
          {/* <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
            <div className="card-body">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            </div>
          </div> */}
        </div>
        <p className="mt-5 mb-3 text-muted">© Tech Troopers</p>
      </div>
      
   
  </div>
  </form>
</div>
</div>


    </Layout>
  )
}

export default Register