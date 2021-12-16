import React, {useState} from 'react';
import Resultado from './MainSearchResult';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function MainSearchBar(props) {
    const[search, setSearch] = useState('');
    const{peliculas, añadir, añadirFav}=props;

    const buscar = (e) => {
        setSearch(e.target.value)
    }
    const theme = createTheme({
        palette: {
          verde: {
            main: '#005450'
        },
        }
      });

    return (
        <center><div className='px-3'>
            <section style={{position: 'relative', width:'max-content' }}>
            <input type='text'
            onChange={buscar}
            placeholder='Busca una película'/>
            <ThemeProvider theme={theme}>
            <SearchOutlinedIcon color='verde'style={{position:'absolute', right: '3%'}}/> 
            </ThemeProvider>
            </section>
            <Resultado search={search} peliculas={peliculas} anadir={añadir} añadirFav={añadirFav}/>
        </div></center>
    )
}