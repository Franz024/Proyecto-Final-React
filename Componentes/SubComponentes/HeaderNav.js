import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderNav(props) {
    const{nombre, user_img, favItems, cerrar}=props;
    

    return (
           <> 
               
         <nav className='d-flex align-items-end'>
                <ul className='d-flex no-wrap justify-content-between p-0 m-0 container-fluid' style={{height:'max-content'}}>
                    <li className='px-3'>
                        <Link to='/'>Inicio</Link>
                    </li>
    
                    <li className='px-3'>
                        <Link to='wishes'>Favoritos <sup>{favItems}</sup></Link> 
                    </li>
                    
                    <li className='px-3'>
                    {nombre}
                    </li>

                    <li style={{width: '35px'}}>
                        <section  title='Cerrar sesión'onClick={()=> cerrar()} style={{width:'30px', height:'30px', backgroundColor: '#9ba59c', borderRadius: '50%'}}><img style={{maxWidth:'30px', maxHeight:'30px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Escudo_de_Pe%C3%B1arol.svg/1200px-Escudo_de_Pe%C3%B1arol.svg.png"  alt='user-img'/></section>
                    </li>
                </ul>
                
            </nav>
            </>
    )
};