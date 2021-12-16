import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export default function MainCarroPago(props) {
    const{carroItems}=props;
    const precioTotal = carroItems.reduce((a, c)=> a + c.precio * c.qty, 0);
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
        <main>
        <div>
             <h1 className="text-center ">Finaliza tu compra</h1>
    
        
        <div className="pago" style={{width: "400px",
    background: "rgba(0, 0, 0, 0.837)",
    padding: "30px",
    margin: "auto",
    marginTop: "100px",
    borderRadius: "4px",
    fontRamily: "fantasy",
    color: "cornsilk",
    boxShadow: "7px 13px 37px #000"}}>
        <form className='d-flex flex-column'>
        <label htmlFor="cars" className='Readex-pro'>Metodo de pago:</label>
        <select name="cars" id="cars">
        <option value="efectivo">Efectivo</option>
            <option value="credito">Crédito</option>
            <option value="debito">Débito</option>
           <option value="mercadopago">Mercado Pago</option>
        </select>
                <p className='my-3'>Precio total: ${precioTotal}</p>
                <p className='my-3'>Cantidad de peliculas: {carroItems.length}</p>
                <br/>
                    <ThemeProvider theme={theme}>
                    <Link to='../finalizada' style={{margin:'auto'}}>
                    <Button variant='contained' color='naranjita'>Comprar</Button>
                    </Link>
                    </ThemeProvider>
                    
        </form>
        </div>

        </div>
        </main>
    )
}
