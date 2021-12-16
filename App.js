import Header from './Componentes/Header';
import Main from './Componentes/Main';
import MOVIES from './peliculas'; //Array de películas
import Footer from './Componentes/Footer';
import {useState} from 'react';
import './App.css';




function App(props){
    const {peliculas} = MOVIES;
    const {nombre, user_img, cerrar }=props;   
    const [carroItems, setCarroItems] = useState([]);
    const [favItems, setFav] = useState([]);
    const[display ,setDisplay]=useState('none');
    
    const añadir = (pelicula) => {
        const existe = carroItems.find(x => x.id === pelicula.id);
        if(existe&&existe.qty<=4){
                setCarroItems(carroItems.map(x => 
                    x.id=== pelicula.id ? {...existe, qty: existe.qty +1} : x
                    )
                    )   
        } else if(existe&&existe.qty===5){
            alert('Solo puedes alquilar 5 días por película')
        }
        else if (!existe){
            if(carroItems.length<=3){
                setCarroItems([...carroItems, {...pelicula, qty: 1}]);
            }
            else{
                alert('Sólo puedes alquilar 4 películas')
            }
        }
        
    }

    const sumar = (pelicula) => {
        const existe = carroItems.find(x => x.id === pelicula.id);
        if(existe&&existe.qty<=4){
            
                setCarroItems(carroItems.map(x => 
                    x.id=== pelicula.id ? {...existe, qty: existe.qty +1} : x
                    )
                    )
                    
        }else{
            alert('Solo puedes alquilar 5 días por película')
        }
    };

    const quitar = (pelicula) => {
        const existe = carroItems.find(x => x.id === pelicula.id);
        if(existe.qty === 1){
            setCarroItems(carroItems.filter((x)=> x.id !==pelicula.id))
        } else {
            setCarroItems(carroItems.map(x => 
                x.id === pelicula.id ? {...existe, qty: existe.qty -1} : x
                )
                )
        }
    };
    
    const vaciar = () => {
        setCarroItems([])
    };
    
    const añadirFav = (pelicula) => {
        const existe = favItems.find(x => x.id === pelicula.id);
        if(existe){
            alert('ya existe')
        }
        else if(!existe){
            setFav([...favItems, {...pelicula}]);
        }
    };
    
    const quitarFav = (pelicula) => {
        setFav(favItems.filter((x) => x.id !== pelicula.id))
    };
    
    const add = ()=>setDisplay('block');
        
    const rem = ()=>setDisplay('none');   

    

    return(
        <div id='miBody' className='d-flex flex-column Readex-pro'>     
            <Header carroItems={carroItems} nombre={nombre} add={add} rem={rem} display={display} user_img={user_img} favItems={favItems.length} cerrar={cerrar}/> 
            <Main peliculas={peliculas} añadirFav={añadirFav} carroItems={carroItems} añadir={añadir} quitar={quitar} vaciar={vaciar} sumar={sumar} favItems={favItems} display={display} quitarFav={quitarFav} rem={rem}/>
            <Footer/>
        </div>
    )
};
export default App;

