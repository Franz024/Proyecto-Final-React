import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function MainFinalizada(props) {
  const{carroItems, vaciar, rem}=props;
  const precioTotal = carroItems.reduce((a,c)=> a+ c.precio * c.qty, 0);
    const theme = createTheme({
        palette: {
          
          naranjita: {
            main: '#d8b05ae0',// Color requerido con e0 al final que es opacity
          },
          verde: {
              main: '#005450'
          }
        },
      });
    return (
       
              <div className="text-center d-flex flex-column justify-content-between m-auto" style={{width: "400px",
              minHeight:'40vh',
              background: "rgba(0, 0, 0, 0.837)",
              padding: "30px",
              margin: "auto",
              borderRadius: "4px",
              fontRamily: "fantasy",
              color: "cornsilk",
              boxShadow: "7px 13px 37px #000"}}>
              <h1 className='m-0'>Compra exitosa</h1>
              <h3>¡Disfruta tus películas!</h3>
              
              <p>Has alquilado {carroItems.length} películas. </p><p> Total ${precioTotal}</p>
              
              <ThemeProvider theme={theme}>
                  <Link to='/'>
                  <Button variant='contained' color='naranjita' onClick={()=>{vaciar(); rem()}}>Volver al home</Button>
                  </Link>
              </ThemeProvider>
              
              </div>
            
            )
}

