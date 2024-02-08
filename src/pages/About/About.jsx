import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
    return (
      <div className='about-page'>
          <header className='height-75'>
              <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                  <h1 className='text-center fw-semibold'>About Us</h1>
                  <p className='text-center w-75 mb-5' style={{ fontSize: '1.2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', lineHeight: '1.5' }}>
                      Welcome to our educational hub where passion meets learning. We are dedicated to providing high-quality courses that empower individuals to achieve their academic and professional goals. Our commitment to excellence and innovation sets us apart in the realm of education.
                  </p>
              </div>
          </header>
  
          <div className='container my-5'>
              <div className="row">
                  <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                      <h2 className='mb-4 mb-lg-5' style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', lineHeight: '1.2' }}>
                          Study with Us
                      </h2>
                      <p style={{ fontSize: '1.1rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    Embark on a transformative learning journey with our diverse range of courses. Explore the realms of knowledge and expertise as you delve into engaging and innovative curriculum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Our courses are designed to challenge and inspire, offering a unique blend of theory and hands-on experience. Whether you're a novice or an expert, our educational offerings cater to learners of all levels. Join us on this educational adventure, where discovery knows no bounds!
</p>

<p className='mb-4 mb-lg-5' style={{ fontSize: '1.1rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    Immerse yourself in our captivating courses tailored to elevate your skills and expand your knowledge. Lorem ipsum dolor sit amet consectetur adipisicing elit. Uncover a world of possibilities as you embark on a learning journey filled with discovery and growth. Our courses are meticulously designed to provide a comprehensive understanding of the subject matter, blending theoretical insights with practical applications. Whether you aspire to excel in your career or explore a new passion, our courses offer a pathway to success. Join us in embracing knowledge and shaping a brighter future.
</p>

                      <Link to="/contact">
                          <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0' style={{ fontSize: '1.2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                              Contact Us
                          </button>
                      </Link>
                  </div>
                  <div className='col-lg-6 d-flex justify-content-center'>
                      <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                  </div>
              </div>
          </div>
  
          <div className='bg-dark text-light py-5'>
              <ChooseSection />
          </div>
  
          <div className='bg-body-tertiary py-5'>
              <div className="container">
                  <h2 className='text-center mb-5' style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      Our Winners
                  </h2>
                  <div className='row g-4'>
                      {persons.map((person) => (
                          <div key={person.id} className='col-md-4'>
                              <img src={person.img} className='img-fluid' alt="" />
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  
export default About;