import React from 'react'
import '../styles/tabHero.css';
import { Typography } from '@mui/material';

const ServiceHero = () => {
  return (
    <div>
      <div className='tab-hero'>
          <div class='container'>
              <Typography variant='h3'>Servicios</Typography>
              <Typography variant='subtitle1'>Ofrecemos los siguientes servicios</Typography>
          </div>
      </div>
    </div>
  )
}

export default ServiceHero;