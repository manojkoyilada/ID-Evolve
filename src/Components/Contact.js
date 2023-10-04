import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-form'>
        <div className="contain">
        <div className="wrapper">      
          <div className="form">
            <p style={{fontWeight: 500, fontSize: 40}}>GET IN TOUCH</p><br></br>
            <p style={{fontWeight: 500, fontSize: 25}} className="form-headline">Send us a message</p><br></br>
            <form id="submit-form" action="mailto:koyiladakarthik55@gmail.com" method="get">
              <p>
                <input id="name" className="form-input" type="text" placeholder="Your Name*" />
                <small className="name-error"></small>
              </p>
              <p>
                <input id="email" className="form-input" type="email" placeholder="Your Email*" />
                <small className="name-error"></small>
              </p>
              <p class="full-width">
                <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                <small></small>
              </p>
              <p class="full-width">
                <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about Company's services.
              </p>
              <p class="full-width">
                <input type="submit" className="submit-btn btn" value="Submit" onclick="checkValidations()" />
                <button class="reset-btn btn" onclick="reset()">Reset</button>
              </p>
            </form>
          </div>
      
          <div className="contacts contact-wrapper" style={{color:'white'}}>      
            <ul>
              <li className='font1'><span>We are here to receive all the feedbacks and experiences of our users regarding the website.</span> <br></br><br></br>Feel free to share your opinions.</li>
              <span className="hightlight-contact-info">
                <li className="email-info"><i className="fa fa-envelope" style={{cursor: 'pointer', ariaHidden:"true", fontWeight:'500'}}></i> info@demo.com</li>
                <li><i className="fa fa-phone" style={{cursor: 'pointer', ariaHidden:"true"}}></i> <span className="highlight-text" style={{color:'white', fontWeight:'500'}}> +91 11 1111 2900</span></li>
              </span>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Contact