import './HomeAcademicStyles.css'
import React from 'react'
import Slider from "react-slick";

const HomeAcademic = () => {
    const [level, setLevel] = React.useState('all');

    function handleCategoryChange(event) {
        setLevel(event.target.value);
    }

    const [courses, setCourses] = React.useState([])
    const token = localStorage.getItem('token')

    React.useEffect(()=>{
        fetchAllCourse()
    },[])

    const fetchAllCourse=async()=>{
        await fetch('https://backend.kmokoduvally.com/api/admin/course',{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
        if(Array.isArray(res)&&res?.length>0){
            setCourses(res)
        }
        })
    }

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
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
        ]
    };

    

  return (
    <div className='academic'>
        <div className='academic-body'>
            <h2>Academic Programs</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <div className='academic-section'>
                <label>
                    <input type="radio" name="level" value="all" checked={level === 'all'} onChange={handleCategoryChange} />
                    All
                </label>
                <label>
                    <input type="radio" name="level" value="masters" checked={level === 'masters'} onChange={handleCategoryChange} />
                    Masters
                </label>
                <label>
                    <input type="radio" name="level" value="bachelors" checked={level === 'bachelors'} onChange={handleCategoryChange} />
                    Bachelors
                </label>
                <label>
                    <input type="radio" name="level" value="hss" checked={level === 'hss'} onChange={handleCategoryChange} />
                    Hss
                </label>
            </div>
            <div className='academic-card-container'>
                <div className='check'>
                <Slider {...settings} className='slider'>
                    {courses.map((course) => {
                        if (level === 'all' || course.level === level) {
                            return (
                              <div className='academic-card'>
                                <p>{course.name}</p>
                                <button className='aca-button'>{course.level}</button>
                              </div>
                            );                            
                          } else {
                            return null;
                          }
                    })}
                </Slider> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAcademic
