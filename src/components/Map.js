import React from 'react';
import { Typography } from '@mui/material';
import '../styles/map.css'

const Map = () => {
  return (
    <div className='map-container'>
        <div className='map-title'>
          <Typography variant='h4' >Ubícanos</Typography>
        </div>
        <div className='map-map'>
          <iframe
          title='Map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.0288206142365!2d-76.98243641225558!3d-12.130177553810723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b875d045915d%3A0xab339f531c2e91b2!2sAv.%20Caminos%20del%20Inca%202028%2C%20Santiago%20de%20Surco%2015039!5e0!3m2!1ses-419!2spe!4v1675635608932!5m2!1ses-419!2spe"
          width="100%"
          height="400px"
          style={{ border:0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
       
    </div>
  )
}

export default Map