import React from 'react';
import HeaderButtons from './SubComponentes/HeaderButtons';
import HeaderNav from './SubComponentes/HeaderNav';

export default function Header(props) {
    const{
        carroItems,
        nombre,
        add,
        rem,
        display,
        user_img,
        favItems,
        cerrar
    } = props;
    return (
        <header className="mb-5 sticky-top d-flex flex-column flex-md-row justify-content-between container-fluid">
            
             <HeaderNav nombre={nombre} user_img={user_img} favItems={favItems} cerrar={cerrar}/>
             <HeaderButtons display={display} add={add} rem={rem} carroItems={carroItems}/>
        </header>
        
    )
}
