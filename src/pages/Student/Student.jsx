import React from 'react';
import { animated, useSpring } from 'react-spring';
import './Student.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import s1 from '../../utils/images/s1.jpg';
import s2 from '../../utils/images/s2.jpg';
import s3 from '../../utils/images/s3.jpg';
import s4 from '../../utils/images/s4.jpg';
import s5 from '../../utils/images/s5.jpg';
import s6 from '../../utils/images/s6.jpg';

const Person = [
  {
    id: 1,
    img: [s1],
    title: 'Isabella',
    description: 'Placement coordinator',
  },
  {
    id: 2,
    img: [s2],
    title: 'Mia',
    description: 'Academic Coordinator',
  },
  {
    id: 3,
    img: [s3],
    title: 'Grace',
    description: 'Area Coordinator',
  },
  {
    id: 4,
    img: [s4],
    title: 'Arly',
    description: 'Enrollment Coordinator',
  },
  {
    id: 5,
    img: [s5],
    title: 'Baylen',
    description: 'Program coordinator',
  },
  {
    id: 6,
    img: [s6],
    title: 'Daryian',
    description: 'Volunteer coordinator',
  },
];

function Student() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className='blog-page' style={props}>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Coordinators</h1>
          <p className='text-center w-75 mb-5'>
            Campus Coordinators plan, direct, or coordinate student instruction, administration, and services, as well
            as other research and educational activities, at postsecondary institutions, including universities, colleges,
            and junior and community colleges.
          </p>
        </div>
      </header>

      <div className='bg-body-tertiary py-5'>
        <div className='container'>
          <div className='row g-4'>
            {Person.map((person) => (
              <div key={person.id} className='col-md-6 col-lg-4'>
                <Link to='' className='text-decoration-none'>
                  <animated.div style={props}>
                    <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                      <Card.Img variant='top' src={person.img} />
                      <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                        <Card.Title className='fs-2 mb-4'>{person.title}</Card.Title>
                        <Card.Text className='text-center'>{person.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </animated.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Student;
