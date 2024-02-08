import React from 'react';
import { animated, useSpring } from 'react-spring';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../../utils/images/A1.jpeg';
import Blog2Img from '../../../utils/images/A2.jpg';
import Blog3Img from '../../../utils/images/A3.jpeg';
import Blog4Img from '../../../utils/images/A4.jpg';
import Blog5Img from '../../../utils/images/A5.jpeg';
import Blog6Img from '../../../utils/images/A6.webp';
import Blog7Img from '../../../utils/images/A7.jpg';
import Blog8Img from '../../../utils/images/A8.jpg';
import Blog9Img from '../../../utils/images/A9.jpeg';

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: 'The Evolution of AI:',
    description: 'From Concept to Reality. Explore the journey of artificial intelligence from its conceptual beginnings to the present day. Highlight key milestones, breakthroughs, and the impact AI has had on various industries.',
  },
  {
    id: 2,
    img: [Blog2Img],
    title: 'Ethical Considerations in AI Development:',
    description: 'Delve into the ethical challenges surrounding AI, discussing topics like bias in algorithms, privacy concerns, and the responsible use of AI technology. Explore how developers and organizations can address these issues.',
  },
  {
    id: 3,
    img: [Blog3Img],
    title: 'AI in Healthcare: Revolutionizing Patient Care:',
    description: 'Examine the transformative role of AI in the healthcare sector. Discuss applications such as predictive analytics, personalized medicine, and robotic surgeries, emphasizing how AI is enhancing patient outcomes and overall healthcare efficiency.',
  },
  {
    id: 4,
    img: [Blog4Img],
    title: 'The Rise of Conversational AI:',
    description: 'Chatbots and Virtual Assistants. Explore the increasing integration of conversational AI in our daily lives. Discuss the capabilities of chatbots and virtual assistants, their impact on customer service, and the potential for more natural and human-like interactions.',
  },
  {
    id: 5,
    img: [Blog5Img],
    title: 'AI and Cybersecurity:',
    description: 'Battling the Digital Threat Landscape. Investigate how AI is being employed to strengthen cybersecurity measures. Highlight applications like threat detection, anomaly identification, and adaptive security systems, showcasing AI\'s role in safeguarding digital assets.',
  },
  {
    id: 6,
    img: [Blog6Img],
    title: 'Smart Cities:',
    description: 'Harnessing AI for Urban Development. Discuss the implementation of AI in creating smart cities. Explore how technology is used to enhance urban infrastructure, improve traffic management, and optimize energy consumption, ultimately creating more sustainable and efficient urban spaces.',
  },
  {
    id: 7,
    img: [Blog7Img],
    title: 'AI in Education:',
    description: 'Personalized Learning and Beyond. Examine the impact of AI on education, focusing on personalized learning experiences, adaptive assessments, and intelligent tutoring systems. Discuss the potential for AI to revolutionize the way we approach education.',
  },
  {
    id: 8,
    img: [Blog8Img],
    title: 'The Future of Work:',
    description: 'AI and Automation. Explore how AI and automation are reshaping the workforce landscape. Discuss the potential benefits and challenges, as well as the need for upskilling and reskilling to adapt to the changing job market.',
  },
  {
    id: 9,
    img: [Blog9Img],
    title: 'AI and Creativity:',
    description: 'Unleashing the Power of Generative Models. Dive into the intersection of AI and creativity, highlighting the role of generative models in art, music, and design. Explore how AI is pushing the boundaries of human creativity and challenging traditional notions of artistic expression.',
  },
];

function Blog() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className='b-page' style={props}>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Blog</h1>
          <p className='text-center w-75 mb-5'></p>
        </div>
      </header>

      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
          <div className='row g-4'>
            {blogs.map((blog) => (
              <div key={blog.id} className='col-md-6 col-lg-4 text-info'>
                <Link to='/Blog' className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect'>
                    <Card.Img variant='top' src={blog.img} />
                    <Card.Body className='p-md-5'>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Blog;
