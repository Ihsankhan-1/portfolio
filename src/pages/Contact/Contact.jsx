import React from "react";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed left>
                    <img src="ihsan.jpg" alt="contact pic" />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-3">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsGithub color="Black" size={30} className="ms-2" />
                      <BsFacebook color="Blue" size={30} className="ms-2" />
                      <BsInstagram color="#c13584" size={30} className="ms-2" />
                    </h6>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Write your Name"
                        className="mb-3"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="write your Email Address"
                        className="mb-3"
                      />
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your Massage"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        Send Massage
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
