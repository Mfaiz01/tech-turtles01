import React from 'react';
import './Achievements.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/ac5.avif';
import Blog2Img from '../../utils/images/ac7.jpg';
import Blog3Img from '../../utils/images/ac10.avif';
import Blog4Img from '../../utils/images/ac8.jpg';
import Blog5Img from '../../utils/images/ac6.avif';
import Blog6Img from '../../utils/images/ac9.avif';

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: 'GIRISH T M',
    description: '4PS19AU009',
    description1:'Automobile Engineering',
    description2:'Endowment Medal',
    description5:'Dr. K.P. Srinivasa Setty',
    description4:'CGPA: 9.07',
    description6:'Name & Address of Donor',
    description7:'Dr. K.P. Srinivasa Setty Bangalore',
},
{
    id: 2,
    img: [Blog2Img],
    title: 'ROJA C S',
    description: '4PS20CV418',
    description1:'Civil Engineering',
    description2:'Endowment Medal',
    description3:'Smt. Nagamma & N.T. Cheluvegowda',
    description4:'CGPA: 9.76',
    description5:'Name & Address of Donor',
    description6:'Dr. N.T. Cheluvegowda',
},
{
    id: 3,
    img: [Blog3Img],
    title: 'GOWTHAMI GOWDA HP',
    description: '4PS19EC048',
    description1:'Electronics & Communication Engineering',
    description2:'Endowment Medal',
    description3:'Sri. Samartha',
    description4:'CGPA: 9.79',
    description5:'Name & Address of Donor',
    description6:'Dr. N.T. Cheluvegowda',
},
{
    id: 4,
    img: [Blog4Img],
    title: 'SWATHI P',
    description: '4PS19IP014',
    description1:'Industrial & Production Engineering',
    description2:'Endowment Medal',
    description3:'Sri. M.K. Ramaiah',
    description4:'CGPA:8.99',
    description5:'Name & Address of Donor',
    description6:'Sri. M.K. Ramaiah Mandya',
},
{
    id: 5,
    img: [Blog5Img],
    title: 'DHEERAJ N U',
    description: '4PS19ME041',
    description1:'Mechanical Engineering',
    description2:'Endowment Medal',
    description3:'Smt. T.H. Mala & Dr. K.S. Srinivasan',
    description4:'CGPA: 8.75',
    description5:'Name & Address of Donor',
    description6:'Dr. K.S. SrinivasanBangalore',
},

{
    id: 6,
    img: [Blog6Img],
    title: 'SUJAN M',
    description: '4PS21CCS11',
    description1:'M.Tech',
    description2:'Endowment Medal',
    description3:'Smt. Thayamma Lingaiah',
    description4:'CGPA: 9.77:  ',
    description5:'Name & Address of Donor',
    description6:'Dr. K.S. SrinivasanBangalore',
},
];

function Achievements() {
  return (
    <div className='a-section text-light py-5'>
      <div className='container d-flex flex-column align-items-center'>
        <br /><br /><br /><br /><h2 className='text-center text-capitalize mb-5'><b>Endowment Awards 2023</b></h2>
        <div className='row g-4'>
          {blogs.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4 text-info">
              <Link to="/Blog" className='text-decoration-none'>
                <Card className='h-100 shadow scale-hover-effect'>
                  {/* Assuming that blog.img is an array, you may need to update the src attribute accordingly */}
                  <Card.Img variant="top" src={blog.img[0]} />
                  <Card.Body className='p-md-5'>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <Card.Text>{blog.description1}</Card.Text>
                    <Card.Text>{blog.description2}</Card.Text>
                    <Card.Text>{blog.description3}</Card.Text>
                    <Card.Text>{blog.description4}</Card.Text>
                    <Card.Text>{blog.description5}</Card.Text>
                    <Card.Text>{blog.description6}</Card.Text>
                    <Card.Text>{blog.description7}</Card.Text>
                    {/* Add more Card.Text for additional fields as needed */}
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
      <Link to="/Events">
        <button type='button' className='btn btn-danger btn-lg mt-5'>Major Events</button>
      </Link>
    </div>
    </div>
  );
}

export default Achievements;
