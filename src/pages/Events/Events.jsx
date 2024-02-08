import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className='E-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light other-class'>
        <div className='container d-flex flex-column align-items-center'>
          <br /><br /><br /><br /><h1 className='text-center fw-semibold text-fade-in'>Upcoming and Major events</h1><br />
          <div className='increased-font text-fade-in'>
            {/* Upcoming Event 1 */}
            <h1 className='text-center fw-semibold'>PESCO 2024</h1>
            <b className='text-fade-in'>Date: 10/06/2024</b><br />
            <b className='text-fade-in'>Time: 07:00 PM</b><br />
            <b className='text-fade-in'>Venue: PES College of Engineering, Mandya</b><br />
            <b className='text-fade-in'>Event Name: PESCO 2024</b><br />
            <b className='text-fade-in'>Description: </b><br />
            <b className='text-fade-in'>
              Welcome to PESCO 2024, a fantastic event that brings together students, professionals, and enthusiasts from various fields. Join us for an exciting day filled with innovation, knowledge sharing, and networking opportunities.
            </b>  <br />
            <b className='text-fade-in'>Participation Criteria: </b><br />
            <b className='text-fade-in'> Open to all students</b> 
            <b className='text-fade-in'> Professionals in relevant fields</b> 
            <b className='text-fade-in'> Enthusiasts and curious minds</b> 
            {/* You can add content related to images and names here */}
          </div>
        </div>
      </header>

      {/* Past Event 1 */}
      <div className='Event-content increased-font other-class'>
        <h1 className='text-center fw-semibold text-fade-in'>Past events</h1>
        <b className='text-fade-in'>Date: 05/15/2023</b><br />
        <b className='text-fade-in'>Time: 06:30 PM</b><br />
        <b className='text-fade-in'>Venue: PES College of Engineering, Mandya</b><br />
        <b className='text-fade-in'>Event Name: PESCO 2023</b><br />
        <b className='text-fade-in'>Description: </b><br />
        <b className='text-fade-in'>
          Thank you for making PESCO 2023 a memorable event! We appreciate the participation of students, professionals, and enthusiasts from various fields. The day was filled with innovation, insightful knowledge sharing, and valuable networking opportunities.
        </b>  <br />
        <b className='text-fade-in'>Participation Highlights: </b><br />
        <b className='text-fade-in'>Highlights of Past Events:</b><br />
        <ul className='text-fade-in'>
          <li>Engaging presentations from industry experts</li>
          <li>Interactive workshops and hands-on sessions</li>
          <li>Showcasing innovative projects and research</li>
          <li>Networking opportunities with professionals and peers</li>
        </ul>
        {/* You can add content related to images and names here */}
      </div>

      {/* Upcoming Event 2 */}
      <div className='a-content increased-font other-class'>
        <h1 className='text-center fw-semibold text-fade-in'>Tech Expo 2024</h1>
        <b className='text-fade-in'>Date: 11/15/2024</b><br />
        <b className='text-fade-in'>Time: 02:00 PM</b><br />
        <b className='text-fade-in'>Venue: Convention Center, City</b><br />
        <b className='text-fade-in'>Event Name: Tech Expo 2024</b><br />
        <b className='text-fade-in'>Description: </b><br />
        <b className='text-fade-in'>
          Join us for Tech Expo 2024, an event showcasing the latest advancements in technology. Explore cutting-edge innovations, network with industry leaders, and witness live demonstrations of emerging technologies.
        </b>  <br />
        <b className='text-fade-in'>Participation Criteria: </b><br />
        <b className='text-fade-in'> Open to technology enthusiasts</b> 
        <b className='text-fade-in'> Professionals in the tech industry</b> 
        <b className='text-fade-in'> Students pursuing technology-related courses</b> 
        {/* You can add content related to images and names here */}
      </div>

      {/* Past Event 2 */}
      <div className='Event-content increased-font other-class'>
        <h1 className='text-center fw-semibold text-fade-in'>Innovation Summit 2023</h1>
        <b className='text-fade-in'>Date: 08/20/2023</b><br />
        <b className='text-fade-in'>Time: 05:00 PM</b><br />
        <b className='text-fade-in'>Venue: Innovation Hub, City</b><br />
        <b className='text-fade-in'>Event Name: Innovation Summit 2023</b><br />
        <b className='text-fade-in'>Description: </b><br />
        <b className='text-fade-in'>
          Thank you for being a part of Innovation Summit 2023. The event celebrated creativity, collaboration, and forward-thinking ideas. Participants engaged in discussions, hands-on workshops, and presented groundbreaking projects.
        </b>  <br />
        <b className='text-fade-in'>Participation Highlights: </b><br />
        <b className='text-fade-in'>Highlights of Past Events:</b><br />
        <ul className='text-fade-in'>
          <li>Inspiring keynote speeches</li>
          <li>Creative project showcases</li>
          <li>Interactive problem-solving sessions</li>
          <li>Networking with innovators and industry experts</li>
        </ul>
        {/* You can add content related to images and names here */}
      </div>

      {/* Upcoming Event 3 */}
      <div className='a-content increased-font other-class'>
        <h1 className='text-center fw-semibold text-fade-in'>Health and Wellness Conference</h1>
        <b className='text-fade-in'>Date: 03/25/2025</b><br />
        <b className='text-fade-in'>Time: 09:30 AM</b><br />
        <b className='text-fade-in'>Venue: Wellness Center, City</b><br />
        <b className='text-fade-in'>Event Name: Health and Wellness Conference</b><br />
        <b className='text-fade-in'>Description: </b><br />
        <b className='text-fade-in'>
          Join us for the Health and Wellness Conference, where experts will share insights on physical and mental well-being. Explore holistic approaches to health, attend fitness workshops, and connect with professionals in the wellness industry.
        </b>  <br />
        <b className='text-fade-in'>Participation Criteria: </b><br />
        <b className='text-fade-in'> Open to all health enthusiasts</b> 
        <b className='text-fade-in'> Healthcare professionals and practitioners</b> 
        <b className='text-fade-in'> Individuals interested in holistic well-being</b> 
        {/* You can add content related to images and names here */}
      </div>

      {/* Past Event 3 */}
      <div className='Event-content increased-font other-class'>
        <h1 className='text-center fw-semibold text-fade-in'>Coding Challenge 2022</h1>
        <b className='text-fade-in'>Date: 02/12/2022</b><br />
        <b className='text-fade-in'>Time: 10:00 AM</b><br />
        <b className='text-fade-in'>Venue: Coding Hub, City</b><br />
        <b className='text-fade-in'>Event Name: Coding Challenge 2022</b><br />
        <b className='text-fade-in'>Description: </b><br />
        <b className='text-fade-in'>
          Thank you for participating in Coding Challenge 2022. Coders showcased their skills, solved challenging problems, and competed for exciting prizes. Stay tuned for future coding events and opportunities!
        </b>  <br />
        <b className='text-fade-in'>Participation Highlights: </b><br />
        <b className='text-fade-in'>Highlights of Past Events:</b><br />
        <ul className='text-fade-in'>
          <li>Intense coding sessions</li>
          <li>Problem-solving competitions</li>
          <li>Award ceremony for top performers</li>
          <li>Networking with coding enthusiasts</li>
        </ul>
        {/* You can add content related to images and names here */}
      </div>

      {/* Suggestions Section */}
      <div className='Event-content increased-font other-class'>
        <h1 className='text-center fw-semibold text-fade-in'>Event Suggestions</h1>
        <p className='text-fade-in'>
          Have an idea for an exciting event? We'd love to hear from you! Share your suggestions and help us create memorable experiences for the community.
        </p>
        {/* You can add a form or other content related to event suggestions here */}
      </div>

      {/* Queries Section */}
      <div className='a-content increased-font other-class'>
        <h1 className='text-center fw-semibold text-fade-in'>Event Queries</h1>
        <p className='text-fade-in'>
          Do you have any questions about our upcoming events or need more information? Feel free to reach out to us. We're here to assist you!
        </p>
        {/* You can add a form or other content related to event queries here */}
      </div>

      {/* ... (Continue adding sections as needed) */}
    </div>
  );
}

export default Events;
