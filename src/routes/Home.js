import React, { useState } from 'react';
import HomeAcademic from '../components/homePage/HomeAcademic';
import HomeEvents from '../components/homePage/HomeEvents';
import HomeFooter from '../components/Footer';
import HomeInstitutions from '../components/homePage/HomeInstitutions';
import HomeLaboratory from '../components/homePage/HomeLaboratory';
import HomeNav from '../components/homePage/HomeNav';
import HomeStudents from '../components/homePage/HomeStudents';
import HomeFeatures from '../components/homePage/HomeFeatures';
import HomeAttribute from '../components/homePage/HomeAttribute';
import HeroV2 from '../components/homePage/HeroV2';
import ScrollButton from './ScrollButton';
import ImagePopup from '../components/popup/ImagePopup';

const First = () => {
  // const [showPopup, setShowPopup] = useState(true); // State to manage the visibility of the popup

  // const handleClosePopup = () => {
  //   setShowPopup(false); // Function to close the popup
  // };

  return (
    <div>
     {/* <ImagePopup show={showPopup} handleClose={handleClosePopup} /> */}
      <HeroV2 />
      <HomeNav />
      <HomeInstitutions />
      <HomeAcademic />
      {/* <HomeFeatures /> */}
      {/* <HomeLaboratory /> */}
      <HomeEvents />
      <HomeStudents />
      {/* <HomeAttribute /> */}
      <HomeFooter />
      <ScrollButton />
    </div>
  );
};

export default First;
