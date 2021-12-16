import React, {useState} from "react";
import App from './App';
import Form from './Componentes/SubComponentes/Formulario';
import FormErrorMsj from "./Componentes/SubComponentes/FormularioErrorMsj";



const USUARIO_CORRECTO = "FRL"
const PASS_CORRECTO = '123';
const USER_IMG = 'https://cdn.pixabay.com/photo/2021/01/18/08/32/naruto-5927441_960_720.png';

function Formulario (){
    const[isLogged, setLogged] = useState(false);
    const[nombre, setNombre]=useState("");
    const[numeros, setNumeros]=useState(0);
    /* La existencia de numeros, setNumeros se debe a qué si numeros es 0 Contenido retornará algo,
    si numeros es -1 Contenido retornará <ErrorMsj/>
    si numeros es 1 otra cosa
    */
   /* 
   la existencia de isLogged y setLogged se debe a qué, si isLogged es false, que de por sí es su estado, Formulario retornará (Contenido),
   si isLogged es true, Formulario retornará <App/>
   isLogged se modifica al apretar el botón submit, a través de setLogged
   si es correcto será true, sino seguirá false y se mostrará el form
   */

    
    //Volver a intentar. Al poner numeros en 0 se mostrará el <Contenido/> otra vez
    const tryAgain = () => {
        setNumeros(0);
    }

    const cerrar = () => {
        setLogged(false)
    }
    
    function Contenido(/* props */){
        const[user, setUser]=useState('');
        const[pass, setPass]=useState('');
    
        const handleSubmit=(e)=>{
            e.preventDefault();
            /* props.handleSubmit(user); */
            user===USUARIO_CORRECTO && pass===PASS_CORRECTO ?setLogged(!isLogged) : setLogged(false); 
            user===USUARIO_CORRECTO && pass===PASS_CORRECTO ? setNumeros(1) : setNumeros(-1); 

            setNombre(user);
        }
        const handleData=(e)=>{
            setUser(e.target.value)
        }
        const handlePass=(e)=>{
            setPass(e.target.value)
        }

    
        if(numeros===0){
        return(
            <Form handleSubmit={handleSubmit} handleData={handleData} user={user} handlePass={handlePass} pass={pass}/>
        )
    }
    else if(numeros===-1){
        return(
            <FormErrorMsj tryAgain={tryAgain}>mal</FormErrorMsj>
        )
    }
    else return <Form handleSubmit={handleSubmit} handleData={handleData} user={user} handlePass={handlePass} pass={pass}/>
    };
    

    if(isLogged===true){
        return(
            <App nombre={nombre} user_img={USER_IMG} cerrar={cerrar}></App>
        )
    }
    
    else{
        return(
    <Contenido/>
        )}
};


export default Formulario;