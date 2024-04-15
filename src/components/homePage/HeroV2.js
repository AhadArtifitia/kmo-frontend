import "./HeroV2Styles.css";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "../../images/kmoLogoC.png";
import ImagePopup from "../popup/ImagePopup";

const HeroV2 = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  const [banners, setBanners] = React.useState([]);
  const token = localStorage.getItem("token");
//   const [showPopup, setShowPopup] = React.useState(true);

 

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };
  React.useEffect(() => {
    fetchAllBanner();
  }, []);

  const fetchAllBanner = async () => {
    await fetch("https://backend.kmokoduvally.com/api/admin/banner", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "image/png",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (Array.isArray(res) && res?.length > 0) {
          setBanners(res);
        }
      });
  };

  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    fetchAllCourse();
  }, []);

  const fetchAllCourse = async () => {
    await fetch("https://backend.kmokoduvally.com/api/admin/course", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res) && res?.length > 0) {
          setCourses(res);
        }
      });
  };

  return (
    <div className="heroV2">
      <div className="heroV2-header">
        <a className="heroV2-header-a" href={`tel:8078796228`}>
          <FaPhoneAlt size={20} style={{ color: "#fff" }} /> +91 8078796228
        </a>
        <a className="heroV2-header-a" href={`mailto:kmokoduvally@gmail.com`}>
          <FaEnvelope size={20} style={{ color: "#fff" }} />{" "}
          kmokoduvally@gmail.com
        </a>
        <p>
          <MdLocationOn size={20} style={{ color: "#fff" }} />
          State Highway NH766, Koduvally 673572, Kozhikode, Kerala, INDIA
        </p>
        <p className="heroV2-header-logo">
          <Link to="https://www.facebook.com/KMOArtsCollegeKdly?mibextid=ZbWKwL">
            <FaFacebookF size={20} style={{ color: "#fff" }} />
          </Link>
          <Link to="https://instagram.com/kmo_college?igshid=YmMyMTA2M2Y=">
            <FaInstagram size={20} style={{ color: "#fff" }} />
          </Link>
          <Link to="#">
            <FaTwitter size={20} style={{ color: "#fff" }} />
          </Link>
          <Link to="#">
            <FaLinkedinIn size={20} style={{ color: "#fff" }} />
          </Link>
        </p>
        {/* <button className='heroV2-header-button'>
                make a payment
            </button> */}
      </div>

      <header>
        <container className="img-co">
          <img className="logo" src={logo} alt="logo" />
        </container>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/institutions">Institutions</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>

      <div className="heroV2-img">
        <Carousel controls={false}>
          {banners.map((banner, index) => (
            <Carousel.Item>
              <img
                src={banner.imageUrl}
                className="d-block w-100"
                alt="hero image"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="heroV2-title">
        <h5>Welcome to</h5>
        <h2>KMO GROUPS</h2>

        <button className="heroV2-title-btn">
          <Link to="/institutions">Read More</Link>
        </button>
        <button className="heroV2-title-btn">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="heroV2-course-slider">
        <h5>All Courses</h5>
        <div className="check">
          <Slider {...settings} className="slider">
            {courses.map((course, index) => (
              <div className="heroV2-course">
                <b>{course.name} </b>
                <div className="heroV2-course-btn">
                  <button>Duration : {course.duration}</button>
                  <button>Fees : {course.fees}</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroV2;
