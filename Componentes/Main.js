import React from 'react';
import MainCarro from './SubComponentes/MainCarro';
import MainWishes from './SubComponentes/MainWishes';
import MainGrid from './SubComponentes/MainGrid';
import {Routes, Route} from 'react-router-dom';
import MainSearchBar from './SubComponentes/MainSearchBar';
import MainCarroPago from './SubComponentes/MainCarroPago';
import MainFinalizada from './SubComponentes/MainFinalizada';

export default function Main(props) {
    const{
        peliculas,
        carroItems,
        favItems,
        display,
        añadir,
        sumar,
        quitar,
        vaciar,
        añadirFav,
        quitarFav,
        rem
    } = props
    const Home = () => (
        <main className='d-flex flex-column-reverse flex-xl-row container-fluid mt-2 p-0 p-md-2 shadow'>
        <div>
        <MainSearchBar peliculas={peliculas} añadir={añadir} añadirFav={añadirFav}/>
        <MainGrid peliculas={peliculas} añadir={añadir} añadirFav={añadirFav}/>
        </div>
        <div style={{display: display}}>
            <MainCarro carroItems={carroItems} sumar={sumar} quitar={quitar} vaciar={vaciar}/>
        </div>
        </main>
    )
    return (
        <Routes>
                <Route path='/' element={<Home/>}>
                </Route>
                
                <Route path='Carro' element={<MainCarro carroItems={carroItems} sumar={sumar} quitar={quitar} vaciar={vaciar}/>}>
                </Route>
                
                <Route path='wishes' element={<MainWishes favItems={favItems} quitarFav={quitarFav} añadir={añadir}
                carroItems={carroItems} sumar={sumar} quitar={quitar} vaciar={vaciar} display={display}/>}>
                </Route>

                <Route path='Pago' element={<MainCarroPago carroItems={carroItems} />}/>
                
                <Route path='Finalizada' element={<MainFinalizada carroItems={carroItems} vaciar={vaciar} rem={rem}/>}/>
        </Routes>
    )
}
