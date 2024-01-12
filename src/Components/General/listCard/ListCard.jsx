import React from 'react';
import CardImg from '../card/CardImg';
import GoalKeepImgage from '../../../assets/portfolios/GoalKeep.png';
import TrendyThreads from '../../../assets/portfolios/TrendyThreads.png';
import LaEsquinaDelSandwitch from '../../../assets/portfolios/LaEsquinaDelSandwitch.png';
import GameVerse from '../../../assets/portfolios/GameVerse.png';
import { Box } from '@mui/material';

const ListCard = () => {
  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center'>
        <CardImg 
          img={GoalKeepImgage}
          title={'GoalKeep Organizer'}
          text={'GoalKeep allows users to reserve soccer fields and purchase products. Administrators have the power to manage courts, products and block users. The platform offers a comprehensive experience for the efficient management and use of the services offered.'} 
          pagNetlify={'https://goalkeeporganizer.netlify.app/'}
          pagGitHub={'https://github.com/Mendez-Gabriel/GoalKeepOrganizer-Frontend'}
        />
        <CardImg 
          img={TrendyThreads}
          title={'Trendy Threads'}
          text={'Trendy Threads represents my first project in React, highlighting the visual display of a fashion boutique`s collection. This significant experience marked my beginnings in web development with React, consolidating my fundamental knowledge in technology.'}
          pagNetlify={'https://main--trendythreads.netlify.app/'}
          pagGitHub={'https://github.com/Mendez-Gabriel/TrabajoGrupalReact'}
        />
        <CardImg 
          img={LaEsquinaDelSandwitch}
          title={'La Esquina del Sandwich'}
          text={'Sandwich Corner, our first group project, was developed exclusively with HTML and CSS. Highlighting the popular sandwich shops of Tucumán along with their products, this experience marked our beginning in collaborative web creation with a pure focus on design and style.'}
          pagNetlify={'https://main--willowy-duckanoo-21117a.netlify.app/'}
          pagGitHub={'https://github.com/Mendez-Gabriel/Project-One-RC'}
        />
        <CardImg 
          img={GameVerse}
          title={'GameVerse'}
          text={'GameVerse, our second group project, stands out as a comprehensive gaming platform with viewing, purchasing options, and an authentication system that includes registration and login functions for users. In addition, an exclusive administrative interface is incorporated for the administrator user, allowing them to efficiently manage the addition, editing and deletion of games on the page.'}
          pagNetlify={'https://65a1875f389b9c2cde9b5696--unrivaled-kringle-476204.netlify.app/'}
          pagGitHub={'https://github.com/Bel98/Proyecto2-grupo3'}
        />
    </Box>
  )
}

export default ListCard;