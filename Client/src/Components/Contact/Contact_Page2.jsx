import React, { useState } from 'react';
import "./Style_Contact.css";
import ReCAPTCHA from "react-custom-google-recaptcha";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

function Contact_Page2() {
  const [loading, setLoading] = useState(false);
  const customId = "contact-id";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    query: '',
  });

  const [enquiryType, setEnquiryType] = useState('General Enquiry');
  const [activeButton, setActiveButton] = useState(''); // Initially, no button is active

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = (enquiryType) => {
    setEnquiryType(enquiryType);

    // Toggle active button
    setActiveButton(enquiryType === activeButton ? '' : enquiryType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // formData.enquiryType = enquiryType;

    if (!formData.fullName.trim()) {
      toast.error('Please enter your full name.', { autoClose: 3000 }, { toastId: customId });
      return;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email address.', { autoClose: 3000 }, { toastId: customId });
      return;
    }

    if (!formData.query.trim()) {
      toast.error('Please enter your query.', { autoClose: 3000 }, { toastId: customId });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/submit-form', formData);
      setLoading(false)
      console.log(response.data);
      toast.success('Form submitted successfully!', { autoClose: 3000 });
      setFormData({
        fullName: '',
        email: '',
        query: '',
      });
    } catch (error) {
      setLoading(false);
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form.', { autoClose: 3000 }, { toastId: customId });
    }
  };

  return (
    <>
      <section className="section_2" id="sec2" data-snap-point data-index="2">
        <div className="tec2">
          <h1>ENQUIRY</h1>
        </div>

        <h1 className="section_2_title" data-aos="zoom-in" data-aos-duration="1100">I'M INTERESTED IN</h1>
        <div className="section_2_tabs">
          <button
            className={`my_link ${activeButton === 'General Enquiry' ? 'activeButton' : ''}`}
            onClick={() => handleButtonClick('General Enquiry')}
            id='btn_GE'
          >
            General Enquiry
          </button>
          <button
            className={`my_link ${activeButton === 'Business' ? 'activeButton' : ''}`}
            onClick={() => handleButtonClick('Business')}
            id='btn_Business'
          >
            Business
          </button>
          <button
            className={`my_link ${activeButton === 'Investor' ? 'activeButton' : ''}`}
            onClick={() => handleButtonClick('Investor')}
            id='btn_Investor'
          >
            Investor
          </button>
          <button
            className={`my_link ${activeButton === 'Media' ? 'activeButton' : ''}`}
            onClick={() => handleButtonClick('Media')}
            id='btn_Media'
          >
            Media
          </button>
        </div>

        <div className="section_2_form ">
          <h3 style={{ textAlign: "center" }}>THANKS FOR YOUR INTEREST IN REDPHANTOM</h3>
          <p style={{ textAlign: "center" }}>Please provide your most valuable information, so we can help you better.</p>
          <div className="form_content ">
            {enquiryType === 'General Enquiry' && (

              <form method='post' onSubmit={handleSubmit}>
                {/* General Enquiry Form */}
                <div className="row">
                  <div className="col-lg-6 col-md-8 col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter Full Name . ."
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Email Id . ."
                    />
                    {/* <p>Confirm you are not a robot</p> */}
                    {/* <div className="d-lg-flex justify-content-between align-items-center">
                      <div className="section_2_captcha">
                        <ReCAPTCHA
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          hl="en"
                        />
                      </div>
                    </div> */}
                    <p>Your information is secured under our privacy policy</p>
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm-12 ">
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="14"
                      placeholder="Enter your Query here . ."
                    />
                  </div>
                  <div className="submit"> <button type="submit" className='subscribr__btn99'>Submit</button> </div>
                </div>

                {loading && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Loader />
                  </div>
                )}
                <ToastContainer position='top-right' autoClose={4000} limit={1} style={{ zIndex: 99999, position: "fixed", top: "10%" }} closeButton />

              </form>
            )}

            {enquiryType === 'Business' && (
              <form method='post' onSubmit={handleSubmit}>
                <div className='business_form'>

                  <div className='business_form_sub1'>
                    <input className='bsn_inp_1' type='text' placeholder='Enter Full Name . .'></input>
                    <input className='bsn_inp_1' type='text' placeholder='Enter Email Id . .'></input>

                    <select name="cars" id="cars" className='bsn_dropdown'>
                      <option value="" disabled selected >Select Bussinesses . .</option>
                      <option value="">Tech Novelty</option>
                      <option value="">RPI</option>
                      <option value="">Transportation</option>
                      <option value="">ECommerce</option>
                      <option value="">Other..</option>
                    </select>
                  </div>

                  <div className='business_form_sub2'>
                    <textarea className='bsn_textarea_new' placeholder='Pls Write Your Message Here To Know About Bussiness . . '></textarea>
                  </div>
                </div>

                <div className="submit"> <button type="submit" className='subscribr__btn99'>Submit</button> </div>

                {loading && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Loader />
                  </div>
                )}
                <ToastContainer position='top-right' autoClose={4000} limit={1} style={{ zIndex: 99999, position: "fixed", top: "10%" }} closeButton />
              </form>
            )}

            {enquiryType === 'Investor' && (
              <form method='post' onSubmit={handleSubmit}>
                <div className='business_form'>

                  <div className='business_form_sub1'>
                    <input className='bsn_inp_1' type='text' placeholder='Enter Full Name . .'></input>
                    <input className='bsn_inp_1' type='text' placeholder='Enter Email Id . .'></input>

                    <select name="cars" id="cars" className='bsn_dropdown'>
                      <option value="" disabled selected >Select Bussiness For Investment. .</option>
                      <option value="">Tech Novelty</option>
                      <option value="">RedPhantom Investment</option>
                      <option value="">Transportation</option>
                      <option value="">ECommerce</option>
                      <option value="">Other..</option>
                    </select>
                  </div>

                  <div className='business_form_sub2'>
                    <textarea className='bsn_textarea_new' placeholder='Pls Write Your Message Here To Know About Investment. . '></textarea>
                  </div>
                </div>

                <div className="submit"> <button type="submit" className='subscribr__btn99'>Submit</button> </div>

                {loading && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Loader />
                  </div>
                )}
                <ToastContainer position='top-right' autoClose={4000} limit={1} style={{ zIndex: 99999, position: "fixed", top: "10%" }} closeButton />
              </form>
            )}

            {enquiryType === 'Media' && (
              <form method='post' onSubmit={handleSubmit}>
                <div className='business_form'>

                  <div className='business_form_sub1'>
                    <input className='bsn_inp_1' type='text' placeholder='Enter Full Name . .'></input>
                    <input className='bsn_inp_1' type='text' placeholder='Enter Email Id . .'></input>

                    <select name="cars" id="cars" className='bsn_dropdown'>
                      <option value="" disabled selected >Select Bussinesses . .</option>
                      <option value="">Tech Novelty</option>
                      <option value="">RedPhantom Investment</option>
                      <option value="">Transportation</option>
                      <option value="">ECommerce</option>
                      <option value="">Other..</option>
                    </select>
                  </div>

                  <div className='business_form_sub2'>
                    <textarea className='bsn_textarea_new' placeholder='Pls Write Your Message Here . . Media '></textarea>
                  </div>
                </div>

                <div className="submit"> <button type="submit" className='subscribr__btn99'>Submit</button> </div>

                {loading && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Loader />
                  </div>
                )}
                <ToastContainer position='top-right' autoClose={4000} limit={1} style={{ zIndex: 99999, position: "fixed", top: "10%" }} closeButton />
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact_Page2;
