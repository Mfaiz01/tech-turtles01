import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../../utils/images/law-course.jpg';
import MusicCourseImg from '../../../utils/images/music-course.jpg';
import SportCourseImg from '../../../utils/images/sport-course.jpg';
import FaqAccordion from '../../../components/FaqAccordion/FaqAccordion';

const courses = [

        {
            id: 1,
            img: [ArtCourseImg],
            title: 'Art Course',
            description: 'Explore the world of visual arts and unleash your creativity with our Art Course. Learn various techniques, styles, and gain hands-on experience to express yourself through art.'
        },
        {
            id: 2,
            img: [BusinessCourseImg],
            title: 'Business Course',
            description: 'Master the fundamentals of business with our comprehensive Business Course. From entrepreneurship to strategic management, acquire the skills needed to thrive in the dynamic business world.'
        },
        {
            id: 3,
            img: [ComputerScienceCourseImg],
            title: 'Computer Science Course',
            description: 'Dive into the exciting realm of Computer Science with our course. From programming languages to algorithms, explore the foundations and advance your skills in this rapidly evolving field.'
        },
        {
            id: 4,
            img: [EducationCourseImg],
            title: 'Education Course',
            description: 'Become an inspiring educator with our Education Course. Learn effective teaching methods, classroom management, and educational psychology to make a positive impact in the lives of students.'
        },
        {
            id: 5,
            img: [HealthcareCourseImg],
            title: 'Healthcare Course',
            description: 'Embark on a rewarding journey in healthcare with our comprehensive course. Gain insights into medical practices, patient care, and healthcare administration to make a difference in people’s lives.'
        },
        {
            id: 6,
            img: [LawCourseImg],
            title: 'Law Course',
            description: 'Delve into the complexities of legal systems with our Law Course. From constitutional law to criminal justice, explore the principles and practices that govern societies and uphold justice.'
        },
        {
            id: 7,
            img: [MusicCourseImg],
            title: 'Music Course',
            description: 'Unleash your musical talents with our Music Course. From theory to performance, explore various genres and instruments to develop your skills and passion for the art of sound.'
        },
        {
            id: 8,
            img: [SportCourseImg],
            title: 'Sport Course',
            description: 'Immerse yourself in the world of sports and fitness with our Sport Course. From training techniques to sports management, acquire the knowledge and skills to excel in the dynamic field of sports.'
        },
    ];
    


function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'><br />Our Courses</h1>
                <p className='text-center w-75 mb-5' style={{ fontSize: '1.25rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', lineHeight: '1.5' }}>
    Welcome to our diverse range of courses designed to ignite your passion and foster your skills. Explore the realms of creativity with our Art Course, dive into the intricacies of business in our Business Course, or delve into the ever-evolving world of technology with our Computer Science Course. Whether you're aspiring to become an educator, healthcare professional, legal expert, or a maestro in music, we have a course tailored just for you. Join us on a journey of knowledge, growth, and fulfillment. Let's embark on this learning adventure together!
</p>


            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;