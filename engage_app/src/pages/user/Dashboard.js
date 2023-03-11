// import React from 'react'
// import Layout from '../../components/Layout/Layout'

// const Dashboard = () => {
//   return (
//     <Layout>
//         <h1>Dashboard</h1>
//     </Layout>
//   )
// }

// export default Dashboard



import React, {useState,useEffect} from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios";
import { toast } from "react-hot-toast";

const REACT_APP_API = 'http://localhost:8080'


const Dashboard = () => {
  const [auth,setAuth] = useAuth();

  useEffect(() => {
    const { name,email,password, phone, firstname,lastname,location,postcode,state,area,country} = auth?.user ?? {} ;
   setName(name);
   setEmail(email);
   setPassword(password);
    setPhone(phone);
    setFirstname(firstname);
    setLastname(lastname);
    setLocation(location);
    setPostcode(postcode);
    setState(state);
    setArea(area);
    setCountry(country);
  }, [auth?.user]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [postcode, setPostcode] = useState ("")
  const [state, setState] = useState("")
  const [area, setArea] = useState("")
  const [country, setCountry] = useState("")

  const navigate = useNavigate()
  //profile function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.put(`${REACT_APP_API}/api/v1/auth/dashboard`,
      {name,email,password,firstname, lastname, phone, location, postcode, state, area, country }
      );
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };




  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container rounded bg-white mt-5 mb-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="pi" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">First Name</label><input value={firstname} onChange = {(e) => setFirstname(e.target.value)}type="text" className="form-control" placeholder="first name" required /></div>
                <div className="col-md-6"><label className="labels">Last Name</label><input value={lastname} onChange = {(e) => setLastname(e.target.value)} type="text" className="form-control" placeholder="surname"required /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Number</label><input value={phone} onChange = {(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="enter phone number" required /></div>
                <div className="col-md-12"><label className="labels">Address </label><input value={location} onChange = {(e) => setLocation(e.target.value)}  type="text" className="form-control" placeholder="enter address line 1" required /></div>
                <div className="col-md-12"><label className="labels">Postcode</label><input value={postcode} onChange = {(e) => setPostcode(e.target.value)} type="text" className="form-control" placeholder="enter address line 2" required /></div>
                <div className="col-md-12"><label className="labels">State</label><input value={state} onChange = {(e) => setState(e.target.value)} type="text" className="form-control" placeholder="enter address line 2"required/></div>
                <div className="col-md-12"><label className="labels">Area</label><input  value={area} onChange = {(e) => setArea(e.target.value)} type="text" className="form-control" placeholder="enter address line 2" required /></div>
                <div className="col-md-12"><label className="labels">Email ID</label><input value={email} onChange = {(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="enter email id" disabled /></div>
                {/* <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" /></div> */}
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Country</label><input value={country} onChange = {(e) => setCountry(e.target.value)} type="text" className="form-control" placeholder="country" /></div>
                <div className="col-md-6"><label className="labels">Password</label><input value={password} onChange = {(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="state" /></div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Experience</span></div><br />
              <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" /></div> <br/>
              <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" /></div>
            </div>
          </div> */}
        </div>
        </form>
      </div>

     




    </Layout>
  



  );
};

export default Dashboard;