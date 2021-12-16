import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating'

export default function Fin(props) {
    const{peliculas, search, añadir, añadirFav}=props;
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
    
    var texto = search;
    const Resultado = () => {
        const existe = peliculas.find(x=> x.name.toLowerCase() === texto.toLowerCase());
        if(existe){
            return(
                <div key={existe.id}className="col-6 col-md-4 col-lg-3 cards col-xxl-2 p-2" style={{position:'relative'}}>
            <img className='card-img-top1'src={existe.img} alt={existe.name} style={{objectFit:'cover', width:'100%'}}/>
            
            <div className="cards-body text-center d-flex flex-column">
                <h3 className='text-dark h3-title'>{existe.name}</h3>
                <section className='d-flex justify-content-between'>
                    <h6 className="text-verde h6-card">${existe.precio} por día</h6>
                    <Rating name="read-only" value={existe.Calificacion} readOnly/>
                </section>
                <div className="d-flex wrap-btn align-items-end justify-content-between" style={{height: '100%'}}>
                    <h6 className="text-secondary h6-card">{existe.Genero}</h6>
                    <section className='px-1'>
                    <ThemeProvider theme={theme}>
                    <Button size='small' color='verdesito' variant='contained'onClick={()=>añadir(existe)}><AddShoppingCartIcon color='naranjita'size='small'/></Button>
                    <Button size='small' color='naranjita' variant='contained'onClick={()=>añadirFav(existe)} style={{position:'absolute', right: '4%', top: '3%'}}><FavoriteOutlinedIcon color='verdesito'size='small'/></Button>
                    </ThemeProvider>
                    </section>
                 </div>
                </div>
        </div>
            )
        }else{
            return(
            <p></p>
            )
        }
    }
    return (
        <div className="row">
            {Resultado()}
        </div>
    )
};