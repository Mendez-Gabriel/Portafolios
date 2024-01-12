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
          text={'GoalKeep permite a los usuarios reservar canchas de fútbol y comprar productos. Los administradores tienen el poder de gestionar canchas, productos y bloquear usuarios. La plataforma ofrece una experiencia integral para la gestión y utilización eficiente de los servicios ofrecidos.'} 
          pagNetlify={'https://goalkeeporganizer.netlify.app/'}
          pagGitHub={'https://github.com/Mendez-Gabriel/GoalKeepOrganizer-Frontend'}
        />
        <CardImg 
          img={TrendyThreads}
          title={'Trendy Threads'}
          text={'Trendy Threads representa mi primer proyecto en React, destacando la exhibición visual de la colección de una boutique de moda. Esta experiencia significativa marcó mis inicios en el desarrollo web con React, consolidando mis conocimientos fundamentales en la tecnología'}
          pagNetlify={'https://main--trendythreads.netlify.app/'}
          pagGitHub={'https://github.com/Mendez-Gabriel/TrabajoGrupalReact'}
        />
        <CardImg 
          img={LaEsquinaDelSandwitch}
          title={'La Esquina del Sandwich'}
          text={'La Esquina del Sandwich, nuestro primer proyecto grupal, fue desarrollado exclusivamente con HTML y CSS. Destacando las populares sandwicherías de Tucumán junto con sus productos, esta experiencia marcó nuestro inicio en la creación web colaborativa con un enfoque puro en diseño y estilo.'}
          pagNetlify={'https://main--willowy-duckanoo-21117a.netlify.app/'}
          pagGitHub={'https://github.com/Mendez-Gabriel/Project-One-RC'}
        />
        <CardImg 
          img={GameVerse}
          title={'GameVerse'}
          text={'GameVerse, nuestro segundo proyecto grupal, destaca como una plataforma de juegos integral con opciones de visualización, compra y un sistema de autenticación que incluye funciones de registro y login para usuarios. Además, se incorpora una interfaz administrativa exclusiva para el usuario administrador, permitiéndole gestionar de manera eficiente la adición, edición y eliminación de juegos en la página.'}
          pagNetlify={'https://65a1875f389b9c2cde9b5696--unrivaled-kringle-476204.netlify.app/'}
          pagGitHub={'https://github.com/Bel98/Proyecto2-grupo3'}
        />
    </Box>
  )
}

export default ListCard;