import React from "react";
import MainGridCard from "./MainGridCard";



export default function MainGrid(props){
    const {peliculas, añadir, añadirFav} = props;
    
    return <div className="row justify-content-between container-fluid m-0 p-0 px-md-2">
                    {peliculas.map((pelicula) =>{
                    return(
                    <MainGridCard pelicula={pelicula} key={pelicula.id} añadir={añadir} añadirFav={añadirFav}/>)}
                    )}
            </div>
          
};
