import React from 'react';
import { background, padding } from './Homepage.module.css';
import Section1 from '../sections/section1/Section1';
import Section2 from '../sections/section2/Section2';
import Section3 from '../sections/section3/Section3';
import Section4 from '../sections/section4/Section4';
import Section5 from '../sections/section5/Section5';
import Section6 from '../sections/section6/Section6';
import { Box } from '@mui/material';
import NavBar2 from '../../Components/Specific/navBar/NavBar2';

const Homepage = () => {
  return (
    <div className={background}>
      <Box>
        <NavBar2 />
        <Box className={padding}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </Box>
      </Box>
    </div>
  )
}

export default Homepage;