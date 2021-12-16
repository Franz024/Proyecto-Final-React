import React from 'react';


export default function FormErrorMsj(props) {
    const{tryAgain}=props;
    return (
        <div className='d-flex fondo1'style={{width: '100vw', height: '100vh', backgroundImage: 'url(https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png)'}}>
        <div className='cuadrado'>
            <h1 className='text-center Readex-pro'>Error 404</h1>
            <br/><br/>
            <h3 className='text-center Readex-pro'> No puedes ingresar ,con los datos enviados.Intente nuevamente
              
                
            </h3>

            <button onClick={()=>tryAgain()}
            className='volver mx-auto mt-5 Readex-pro'>Intentalo de nuevo</button>
        </div>
        </div>
    )
}