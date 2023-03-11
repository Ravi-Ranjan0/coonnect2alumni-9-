import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import falgun from '../images/falgun.jpeg'
import radha from'../images/radha.jpeg'
import parth from'../images/parth.jpeg'
import harsh from'../images/harsh.jpeg'
import ravi from'../images/ravi.jpg'
import sagar from '../images/sagar.jpeg'


import {FaFacebookSquare , FaTwitterSquare , FaGithubSquare } from 'react-icons/fa'

import './homepage.css'
const HomePage = () => { 
  const [auth] = useAuth();

  return (
    <Layout>




        <section id="hero" className="d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
                  <h1>"Join our thriving <span style={{color:'#93BFCF'}} >alumni community!</span> </h1>
                  <h2>Connect with your fellow alumni and stay engaged with our vibrant community!</h2>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <NavLink to = '/about' className="btn-get-started" style={{textDecoration:'none'}}>Get Started</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay={200}>
                  <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid animated" alt="asset page" />
                </div>
              </div>
            </div>
        </section>
        <section id="services" className="services section-bg">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch" >
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble" /></div>
                  <h4>Networking opportunities</h4>
                  <p>This can be a valuable resource for students looking to build their careers and for alumni seeking to give back to their alma mater.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file" /></div>
                  <h4>Knowledge sharing</h4>
                  <p>This can help students to learn about different career paths and industries, as well as gain insights into the job search process</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer" /></div>
                  <h4>Career services</h4>
                  <p>This can help students to find internships and entry-level positions, while also providing alumni with access to a pool of qualified candidates for their own hiring needs.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" >
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-layer" /></div>
                  <h4>Community building</h4>
                  <p>The platform can help to build a culture of support and collaboration that benefits everyone involved.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
            <p>Effective communication is key to the success of a 6-member team, as it allows for efficient coordination and a shared understanding of goals and expectations. Regular check-ins and feedback sessions can help to ensure that everyone is on the same page and working towards the same objectives. Overall, a well-functioning 6-member team can be a highly productive and dynamic group, capable of achieving great things.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={harsh} className="img-fluid" alt="pic" /></div>
                <div className="member-info">
                  <h4>Harsh Prakash Bharti</h4>
                  <span>Leader  - FrontEnd Developer </span>
                  <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  <div className="social">
                  <i><FaGithubSquare /></i>
                  <i><FaTwitterSquare /></i>
                  <i><FaFacebookSquare /></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0 ">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={falgun} className="img-fluid" alt="pic" /></div>
                <div className="member-info">
                  <h4>Falgun Patel</h4>
                  <span>Backend Developer</span>
                  <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                  <div className="social">
                  <i><FaGithubSquare /></i>
                  <i><FaTwitterSquare /></i>
                  <i><FaFacebookSquare /></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={radha} className="img-fluid" alt="pic" /></div>
                <div className="member-info">
                  <h4>Radha Sharma</h4>
                  <span>Frontend Developer</span>
                  <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  <div className="social">
                  <i><FaGithubSquare /></i>
                  <i><FaTwitterSquare /></i>
                  <i><FaFacebookSquare /></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4" >
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={parth} className="img-fluid" alt="pic" /></div>
                <div className="member-info">
                  <h4>Parth Goel</h4>
                  <span>FrontEnd Developer</span>
                  <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  <div className="social">
                  <i><FaGithubSquare /></i>
                  <i><FaTwitterSquare /></i>
                  <i><FaFacebookSquare /></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={sagar} className="img-fluid" alt="pic" /></div>
                <div className="member-info">
                  <h4>Sagar Sharma</h4>
                  <span>Frontend Developer</span>
                  <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  <div className="social">
                  <i><FaGithubSquare /></i>
                  <i><FaTwitterSquare /></i>
                  <i><FaFacebookSquare /></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4" >
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={ravi} className="img-fluid" alt="pic" /></div>
                <div className="member-info">
                  <h4>Ravi Ranjan</h4>
                  <span>Backend Developer</span>
                  <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  <div className="social">
                  <i><FaGithubSquare /></i>
                  <i><FaTwitterSquare /></i>
                  <i><FaFacebookSquare /></i>
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

export default HomePage



