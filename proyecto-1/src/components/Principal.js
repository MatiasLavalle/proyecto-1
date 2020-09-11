import React, { useState,useEffect } from 'react'

export const Principal = (props) => {

    const [jugador,setJugador] = useState({
        nombre:"",
        color:""
    })

    const handleClick = () =>{
        const nombreUsuario = document.querySelector(".nombreUsuario");
        nombreUsuario.style.display = "none"

        const nombreUsuario2 = document.querySelector(".nombreUsuario2");
        nombreUsuario2.style.display = "flex";
        nombreUsuario2.style.border = "1px #808080 solid";
        nombreUsuario2.style.padding = "0";
        nombreUsuario2.style.marginBottom = "15px";
        nombreUsuario2.style.justifyContent = "center";
        nombreUsuario2.style.fontSize = "30px"

        const user = document.querySelector(".user").value;
        const idUser = document.querySelector(".idUser");
        const participante = document.querySelector('#participante')
        idUser.textContent = user;  
        participante.textContent=user

        setJugador({
            ...jugador,
            nombre:user
        })
    }


    const handleStop = () =>{
        props.stop();

        const colorAsignado =document.querySelector('.colorAsignado');

        if(props.time.s <= 60 && props.time.s >= 52){
            colorAsignado.style.backgroundColor = 'purple';
            colorAsignado.style.border = "2px black solid";
            colorAsignado.textContent = 'Purple';
            setJugador({
                ...jugador,
                color:'Purple'
            })
        }
        if(props.time.s <= 51 && props.time.s >= 42){
            colorAsignado.style.backgroundColor = 'blue';
            colorAsignado.style.border = "2px black solid";
            colorAsignado.textContent = 'Blue';
            setJugador({
                ...jugador,
                color:'Blue'
            })
        }
        if(props.time.s <= 41 && props.time.s >= 32){
            colorAsignado.style.backgroundColor = 'green';
            colorAsignado.style.border = "2px black solid";
            colorAsignado.textContent = 'Green';
            setJugador({
                ...jugador,
                color:'Green'
            })
        }
        if(props.time.s <= 31 && props.time.s >= 22){
            colorAsignado.style.backgroundColor = 'yellow';
            colorAsignado.style.border = "2px black solid";
            colorAsignado.textContent = 'Yellow';
            setJugador({
                ...jugador,
                color:'Yellow'
            })
        }
        if(props.time.s <= 21 && props.time.s >= 12){
            colorAsignado.style.backgroundColor = 'orange';
            colorAsignado.style.border = "2px black solid";
            colorAsignado.textContent = 'Orange';
            setJugador({
                ...jugador,
                color:'Orange'
            })
        }
        if(props.time.s <= 11 && props.time.s >= 0){
            colorAsignado.style.backgroundColor = 'red';
            colorAsignado.style.border = "2px black solid";
            colorAsignado.textContent = 'Red';
            setJugador({
                ...jugador,
                color:'Red'
            })
        }

        // --------------------------------------------------------

        const btn = document.querySelector('.btn');
        btn.style.backgroundColor = "grey"

        // --------------------------------------------------------

        const tablaDePuntajes = document.querySelector('.tablaDePuntajes');
        tablaDePuntajes.style.display = "flex"
    }  

    useEffect(() => {
        localStorage.setItem('jugadorData', JSON.stringify(jugador)) 
    })
   
   
      

    
    return (
        <div className="principal">
            <div className="btnContainer">
                <button className="btn" onClick={handleStop}>Stop!</button>
            </div>
            <div className="contadorContainer">
                <div className="nombreUsuario">
                    <label htmlFor="usuario">User:</label>
                    <input type="text" name="usuario" className="user" required/>
                    <input type="submit" className="btnDeInicio" onClick={handleClick} value="=>"/>
                </div>
                <div className="nombreUsuario2">
                    <p className="idUser"> </p>
                </div>
                <div className="contador">
                    {props.time.s} sec 
                </div>
                <div className="colorAsignado"> 
                    grey
                </div>
            </div>
        </div>
    )
}
