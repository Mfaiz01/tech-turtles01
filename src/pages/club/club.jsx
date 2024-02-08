import React from 'react';
import './club.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const blogs = [
 
   
 
];
function club() {
  return (
    <div className='club-page club-fade-in'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>Tech Turtles</h1>
                <div className='increased-font'>
                  <p>Welcome to Tech Turtles, an innovative hub where the convergence of design and technology unfolds! At Tech Turtles, we believe in the transformative power of web design and its ability to shape the future. Our club is a dynamic community of designers, developers, and tech enthusiasts united by a common goal - to create stunning digital experiences and explore the frontiers of technology.

Our club thrives on collaboration, creativity, and a passion for staying ahead in the ever-evolving digital landscape. Whether you're a seasoned developer, a design aficionado, or just curious about the world of tech, Tech Turtles is the place for you.

Explore the art and science of web design with us! From user experience (UX) to cutting-edge development techniques, we cover it all. Our diverse range of members brings unique perspectives, fostering an environment where learning and collaboration flourish.

Join us on this exciting journey where every line of code and every pixel holds the potential to make a difference. Together, let's create the future of digital innovation!.</p>
                </div>
              </div>
        </header>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Future Goals of Tech Turtles</h2>
                <div className='increased-font'>
                    <p>
                     
1.Innovation and Creativity: Foster a culture of innovation and creativity by regularly organizing design sprints, brainstorming sessions, and collaborative projects that push the boundaries of web design.<br /> <br />

2.Knowledge Sharing: Establish a platform for continuous learning through workshops, seminars, and knowledge-sharing sessions. Keep our members updated on the latest design trends, development tools, and emerging technologies.<br /> <br />

3.Community Engagement: Expand our outreach by actively participating in tech conferences, hosting webinars, and organizing events that connect our club with the broader tech community. Cultivate partnerships with industry professionals to provide valuable insights.<br /> <br />

4.Hackathons and Challenges: Organize hackathons and design challenges to encourage members to apply their skills in real-world scenarios. Provide opportunities for hands-on experience and collaboration with peers.<br /> <br />

5. Career Development: Support the career growth of our members by providing resources, mentorship programs, and networking opportunities. Create pathways for internships, collaborations with tech companies, and showcasing members' portfolios.<br /> <br />

6.Inclusivity and Diversity: Strive for inclusivity by welcoming members from all backgrounds, skill levels, and perspectives. Create an environment where everyone feels empowered to contribute and learn, fostering a diverse and vibrant community.<br /> <br />

7.Social Impact: Explore projects that leverage technology for social impact. Engage in initiatives that use web design and development to address societal challenges and contribute to positive change.<br /> <br />

Join Tech Turtles on this exciting journey of exploration, learning, and innovation. Together, let's shape the future of web design and technology!.<br /> <br />
                    </p>
                </div>
                <div className='row g-4'>
                {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read Blogs On AI And Technology</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default club;
