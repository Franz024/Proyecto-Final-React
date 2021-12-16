import React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';



export default function MainCarro(props) {  
        const{carroItems, sumar, quitar, vaciar}= props;
        const precioTotal = carroItems.reduce((a,c)=> a+ c.precio * c.qty, 0);
        const theme = createTheme({
            palette: {
              
              naranjita: {
                // This is green.A700 as hex.
                main: '#d8b05ae0',
              },
              verde: {
                  main: '#005450'
              }
            },
          });
        return (
            <div className='mb-5 carro'>
            <h3 className='text-center text-verde'>Alquilar</h3>
            <br/>
            <div>{carroItems.length === 0 && <p className='text-center'>El carro está vacio</p>}</div>
            {carroItems.length>0 ?
            <>
            <div className='m-0 container-fluid' >
                <table className='container-fluid'>
                    <thead>
                        <tr>
                            <td></td>
                            <td className="td-verde text-end">Precio</td>
                            <td colSpan={2} className='text-center td-verde'>Dias</td>
                            <td className="td-verde text-end">sub</td>
                        </tr>
                    </thead>
                    <tbody>{carroItems.map(item => (
                        <tr key={item.id}>
                            <td className='td-naranja-oscuro'style={{width: '25%'}}>{item.name}</td>
                            <td className='td-naranja text-end'>{item.precio}</td>
                            <td className="text-center td-naranja-oscuro"><Button onClick={()=>sumar(item)} ><ThemeProvider theme={theme}><AddOutlinedIcon color='verde'/></ThemeProvider></Button></td>
                            <td className="text-center td-naranja"><Button onClick={()=>quitar(item)} ><ThemeProvider theme={theme}><RemoveIcon color='verde'/></ThemeProvider></Button></td>
                            <td className='td-naranja text-end'><sub>{item.qty}x</sub>${item.precio.toFixed(2)*item.qty}</td>
                        </tr> 
        )
        )
    }</tbody>
                </table>
            </div>
            </> : null}
        <div className="d-flex container-fluid align-items-end justify-content-between">
        
        <ThemeProvider theme={theme}>
        {carroItems.length >0 ? 
        <>
        <span className='m-0 px-3 px-xl-2'>Total ${precioTotal}</span>
        <section>
        <Button variant='contained'color='naranjita' onClick={()=>vaciar()}><RemoveShoppingCartIcon color='verde'/></Button>
        <Link to='/Pago'>
        <Button variant='contained' color='verde'><ShoppingCartCheckoutOutlinedIcon color='naranjita'/></Button>
        </Link> 
        </section>
        </>: 
        null}
        </ThemeProvider>
        </div>
        
            </div>
            
        )
};
