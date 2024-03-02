import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsleetr" />
                <h2 className="mb-0 text-white">Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Adress"
                  aria-label="Your Email Adress"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-5">
                  Hno:277 Near Vill Chopal,
                  <br />
                  Sonipat,Haryanabr <br />
                  PinCode:131103
                </address>
                <a
                  href="tel:+91 7263954234"
                  className="mt-3 d-block mb-2 text-white">
                  +91 7263954234
                </a>
                <a
                  href="mailto:buitanhieu@gmail.com"
                  className="mt-2 d-block mb-0 text-white">
                  buitanhieu@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="" className="text-white">
                    <BsLinkedin className=" fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsGithub className=" fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsYoutube className=" fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className=" text-white py-2 mb-1">Privacy Policy</Link>
                <Link className=" text-white py-2 mb-1">Refund Policy</Link>
                <Link className=" text-white py-2 mb-1">Shipping Policy</Link>
                <Link className=" text-white py-2 mb-1">Terms &Service</Link>
                <Link className=" text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className=" text-white py-2 mb-1">Search</Link>
                <Link className=" text-white py-2 mb-1">About Us</Link>
                <Link className=" text-white py-2 mb-1">Faq</Link>
                <Link className=" text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className=" text-white py-2 mb-1">Laptop</Link>
                <Link className=" text-white py-2 mb-1">Headphone</Link>
                <Link className=" text-white py-2 mb-1">Tablet</Link>
                <Link className=" text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p className="text-center mb-0 text-white">
                  &copy; {new Date().getFullYear()}; Powered by Developer's Hieu
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
