import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-white mt-auto shadows" style={{backgroundColor: '#005450e5'}}>
            
            <div className="container pt-4">
              

                
                <span
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i className="fab fa-facebook-f"></i
                ></span>
                <span
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i className="fab fa-twitter"></i
                ></span>      
                <span
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i className="fab fa-instagram"></i
                ></span>
          
        
            </div>
            
          
            
            <div className="text-center text-dark p-3" style={{backgroundColor: '#d8b15a'}}>
              Bootcamp Matea - © 2021 Copyright:
              <span className="text-dark"> Este trabajo fue realizado por Franco Acosta, Ruth Marquez, Lucas Diaz. Pero con la gran ayuda de prestar el código de Federico Labanderia y Maximiliando Rodriguez, dos grandes personas.</span>
            </div>
            
          </footer>
    )
}
