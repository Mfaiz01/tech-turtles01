import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Faculty.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ChetanKumarV from '../../utils/images/ChetanKumarV.jpg';
import DrMCPadma from '../../utils/images/DrMCPadma.jpeg';
import shruthi from '../../utils/images/shruthi.jpg';
import DrNagarathna from '../../utils/images/DrNagarathna.jpg';
import DrRGirisha from '../../utils/images/DrRGirisha.jpg';
import DrumeshDR from '../../utils/images/drumeshDR.jpeg';
import PrasannaP from '../../utils/images/PrasannaP.jpg';
import RamyaShreeHP from '../../utils/images/RamyaShreeHP.jpg';
import SurajBS from '../../utils/images/SurajBS.jpg';

const Person = [
  {
    id: 1,
    img: [ChetanKumarV],
    title: 'Chetan Kumar V',
    description: 'Assistant Professor',
  },
  {
    id: 2,
    img: [DrMCPadma],
    title: 'Dr MC Padma',
    description: 'Professor',
  },
  {
    id: 3,
    img: [shruthi],
    title: 'shruthi',
    description: 'Assistant Professor',
  },
  {
    id: 4,
    img: [DrNagarathna],
    title: 'Dr Nagarathna',
    description: 'HOD & Professor',
  },
  {
    id: 5,
    img: [DrRGirisha],
    title: 'Dr.R Girisha',
    description: 'Professor & Dean (Academics)',
  },
  {
    id: 6,
    img: [DrumeshDR],
    title: 'Dr.D.R.Umesh',
    description: 'Professor & Deputy Dean (Academics)',
  },
  {
    id: 7,
    img: [PrasannaP],
    title: ' P Prasanna',
    description: 'Associate Professor',
  },
  {
    id: 8,
    img: [RamyaShreeHP],
    title: 'H.P Ramyashree',
    description: 'Assitant Professor',
  },
  {
    id: 9,
    img: [SurajBS],
    title: 'Suraj B S',
    description: 'Assistant Professor',
  },
];

function Faculty() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className='F-page' style={props}>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Faculty Chapter</h1>
          <p className='text-center w-75 mb-5'>
            Preparation of the academic almanac, monitoring the progress of class work, syllabus coverage, student
            counseling/mentoring, directing and supervising student activity programs.
          </p>
        </div>
      </header>

      <div className='bg-body-tertiary py-5'>
        <div className='container'>
          <div className='row g-4'>
            {Person.map((Person) => (
              <div key={Person.id} className='col-md-6 col-lg-4'>
                <Link to='' className='text-decoration-none'>
                  <animated.div style={props}>
                    <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                      <Card.Img variant='top' src={Person.img} />
                      <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                        <Card.Title className='fs-2 mb-4'>{Person.title}</Card.Title>
                        <Card.Text className='text-center'>{Person.description}</Card.Text>
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

export default Faculty;
