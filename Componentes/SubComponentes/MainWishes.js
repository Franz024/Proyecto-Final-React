import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

import MainCarro from "./MainCarro";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import LogoutIcon from '@mui/icons-material/Logout';

 const MainWishes = (props)=> {
     const {sumar, favItems, quitarFav, vaciar, quitar, carroItems, display, añadir} = props;
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
    
    if(favItems.length===0) return (
    <>
    <div style={{display: display}}>
                <MainCarro carroItems={carroItems} sumar={sumar} quitar={quitar} vaciar={vaciar}/>
    </div>  
    <h2 className='text-center Readex-pro'>No has agregado ninguna película a tu lista de deseos</h2>
    </>
    )
    else return (
        <main className='d-flex flex-column-reverse flex-xl-row container-fluid mt-2 p-0 p-md-2'>
            <div className="row container-fluid m-0 p-0 px-md-2">
            {favItems.map(pelicula => {
            return(
                <div key={pelicula.id}className="col-6 col-md-4 col-lg-3 cards col-xxl-2 p-2" style={{position:'relative'}}>
            <img className='card-img-top1'src={pelicula.img} alt={pelicula.name} style={{objectFit:'cover', width:'100%'}}/>
            
            <div className="cards-body text-center d-flex flex-column">
                <h3 className='text-dark h3-title'>{pelicula.name}</h3>
                <section className='d-flex justify-content-between'>
                    <h6 className="text-verde h6-card">${pelicula.precio} por día</h6>
                    <Rating name="read-only" value={pelicula.Calificacion} readOnly/>
                </section>
                <div className="d-flex wrap-btn align-items-end justify-content-between" style={{height: '100%'}}>
                    <h6 className="text-secondary h6-card">{pelicula.Genero}</h6>
                    <section className='px-1'>
                    <ThemeProvider theme={theme}>
                    <Button size='small' color='verdesito' variant='contained'onClick={()=>añadir(pelicula)}><AddShoppingCartIcon color='naranjita'size='small'/></Button>
                    <Button size='small' color='naranjita' variant='contained'onClick={()=>quitarFav(pelicula)}style={{position:'absolute', right:'5%',bottom:'84%'}}><LogoutIcon color='verdesito'size='small'/></Button>
                    </ThemeProvider>
                    </section>
                 </div>
                </div>
        </div>
            )
            
            })}
            </div>
            <div style={{display: display}} >
                <MainCarro carroItems={carroItems} sumar={sumar} quitar={quitar} vaciar={vaciar}/>
            </div>   
        </main>
    )
            
};
export default MainWishes;