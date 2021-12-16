import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Form(props) {
    const{handleData, handleSubmit, user, handlePass, pass} = props;
    const[type, setType] = useState('password');
    const theme = createTheme({
        palette: {
          
         white: {
             main: '#FFF'
         }
        },
      });
    return (
    
     <div className='fondo1 d-flex' style={{minHeight:'100vh', position:'absolute', minWidth:'100vw'}}>
               <form className="registro container d-flex flex-column" onSubmit={handleSubmit}>
           <h2 className='h2 Readex-pro text-center'>Inicia sesión</h2> <br/>          
               <label htmlFor="usuario" className='Readex-pro'> Ingresar Correo</label><br/>
               <input className="Controls" id="usuario" placeholder="Ingrese su Nombre de usuario"
               onChange={handleData}  required/> <br/>
               <label htmlFor="contraseña" className='Readex-pro'>Contraseña</label><br/>
                <div>
               <input className="Controls" type={type} id="password" name="password" 
               placeholder="Ingrese su contraseña" onChange={handlePass} value={pass} required/><br/>
                <ThemeProvider theme={theme}>
           
              
            
                </ThemeProvider>
               </div>
               <button className="botons Readex-pro" type="submit">Iniciar sesión</button>
               <br/>
               
               <p className='Readex-pro'>¿Sin cuenta?<button className="btn mi-btn"> Registrate</button></p>
              
           </form>
           </div>
    
    )
}
