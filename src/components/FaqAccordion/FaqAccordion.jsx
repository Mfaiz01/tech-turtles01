import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Explore common questions about college admissions and find the answers you need to navigate the application process.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What are the key steps in the college admissions process?</Accordion.Header>
                    <Accordion.Body>
                        The college admissions process typically involves researching colleges, preparing for standardized tests, completing applications, writing essays, gathering recommendation letters, and submitting required documents.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How important are standardized test scores in college admissions?</Accordion.Header>
                    <Accordion.Body>
                        While standardized test scores are considered, many colleges also value other factors such as GPA, extracurricular activities, essays, and recommendation letters. Some colleges have even adopted test-optional policies.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What is the significance of a strong personal essay in college applications?</Accordion.Header>
                    <Accordion.Body>
                        A compelling personal essay provides an opportunity for applicants to showcase their personality, experiences, and motivations. It helps admissions officers understand the individual behind the application.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How can I stand out in the college admissions process?</Accordion.Header>
                    <Accordion.Body>
                        To stand out, focus on your academic achievements, engage in meaningful extracurricular activities, demonstrate leadership, write a compelling essay, and ensure strong letters of recommendation. Be authentic and showcase your unique qualities.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  );
}

export default FaqAccordion;
