import React from 'react';
import Button  from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import {Link} from 'react-router-dom';

export default function Headerbuttons(props){
    const{carroItems, display, add, rem} = props;
    const theme = createTheme({
        palette: {
          
          naranjita: {
            main: '#d8b05ae0',
          },
          verde: {
              main: '#005450'
          }
        },
      });
    return (
        <div className='px-lg-5 d-flex no-wrap align-items-start justify-content-center justify-content-md-end container align-items-end'>
        <ThemeProvider theme={theme}> 
        {
            display==='none' ?
            <Button variant='outlined'size='small'  onClick={()=>add()} color='naranjita'>
             <ArrowDropDownTwoToneIcon/>
            </Button> 
            :
            <Button variant='outlined'  size='small' onClick={()=>rem()} color='naranjita'>
                <ArrowRightTwoToneIcon/>
            </Button>}
          </ThemeProvider>
            
          <ThemeProvider theme={theme}>
            <Link to='carro'>
                <Button  size='small'variant='contained' color='naranjita'>
                  <LocalAtmIcon color='verde' />
                </Button>
            </Link>
            <Button size='small' variant='outlined' color='naranjita'>
                   <span> {carroItems.length}</span>
            </Button>
          </ThemeProvider>
    </div>
    )
};
