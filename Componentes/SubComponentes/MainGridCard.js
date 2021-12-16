import React from 'react';
import Rating from '@mui/material/Rating'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 

export default function Pelicula(props) {
    const{pelicula, añadir, añadirFav} = props;
    const theme = createTheme({
        palette: {
          
          naranjita: {
            // This is green.A700 as hex.
            main: '#d8b15a',
          },
          verdesito: {
            main: '#005450'
        },
        negrito: {
            main: '#000'
        }

        },
      });
    return (
        <div key={pelicula.id}className="col-6 col-md-4 col-lg-3 cards col-xxl-2 p-2" >
            <img className='card'src={pelicula.img} alt={pelicula.name} style={{objectFit:'cover', width:'100%'}}/>
            
            <div className="cards-body text-center d-flex flex-column">
                <h3 className='text-dark h3-title'>{pelicula.name}</h3>
                <section className='d-sm-flex justify-content-between'>
                    <h6 className="text-verde h6-card">${pelicula.precio} por día</h6>
                    <Rating name="read-only" value={pelicula.Calificacion} readOnly/>
                </section>
                <div className="d-flex wrap-btn align-items-end justify-content-between" style={{height: '100%'}}>
                    <h6 className="text-secondary h6-card">{pelicula.Genero}</h6>
                    <section className='px-1'>
                    <ThemeProvider theme={theme}>
                    <Button size='small' color='verdesito' variant='contained'onClick={()=>añadir(pelicula)}><LocalAtmIcon color='white'size='large'/></Button>
                    <Button size='small' color='naranjita' variant='contained'onClick={()=>añadirFav(pelicula)} style={{position:'absolute', left: '1%', top: '1%'}}><StarIcon color='verdesito'size='small'/></Button>
                    </ThemeProvider>
                    </section>
                 </div>
                </div>
        </div>
    )
};
