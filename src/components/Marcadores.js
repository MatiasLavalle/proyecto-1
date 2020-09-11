import React from 'react'

export const Marcadores = () => {


    window.onload = function () {
        countDownBots();
    }
    
    const countDownBots =()=>{
        let display1 = document.querySelector('.contadorBot1');
        let display2 = document.querySelector('.contadorBot2');
        let display3 = document.querySelector('.contadorBot3');
        let display4 = document.querySelector('.contadorBot4');

        let random1 = Math.floor((Math.random() * 60) + 1)
        let timeLeft1 = 60;
        let random2 = Math.floor((Math.random() * 60) + 1)
        let timeLeft2 = 60;
        let random3 = Math.floor((Math.random() * 60) + 1)
        let timeLeft3 = 60;
        let random4 = Math.floor((Math.random() * 60) + 1)
        let timeLeft4 = 60;

        setInterval(()=>{
            if(timeLeft1 < random1 ){
                
                if (random1<=60 && random1>=52){
                    const colorDeBot1 = document.querySelector('.colorDeBot1');
                    colorDeBot1.style.backgroundColor = "purple"
                }
                if (random1<=51 && random1>=42){
                    const colorDeBot1 = document.querySelector('.colorDeBot1');
                    colorDeBot1.style.backgroundColor = "blue"
                }
                if (random1<=41 && random1>=32){
                    const colorDeBot1 = document.querySelector('.colorDeBot1');
                    colorDeBot1.style.backgroundColor = "green"
                }
                if (random1<=31 && random1>=22){
                    const colorDeBot1 = document.querySelector('.colorDeBot1');
                    colorDeBot1.style.backgroundColor = "yellow"
                }
                if (random1<=21 && random1>=12){
                    const colorDeBot1 = document.querySelector('.colorDeBot1');
                    colorDeBot1.style.backgroundColor = "orange"
                }
                if (random1<=11 && random1>=0){
                    const colorDeBot1 = document.querySelector('.colorDeBot1');
                    colorDeBot1.style.backgroundColor = "red"
                }
                clearInterval(timeLeft1=random1)
            }


            display1.innerHTML=timeLeft1
            if(timeLeft2 < random2 ){
                
                if (random2<=60 && random2>=52){
                    const colorDeBot2 = document.querySelector('.colorDeBot2');
                    colorDeBot2.style.backgroundColor = "purple"
                }
                if (random2<=51 && random2>=42){
                    const colorDeBot2 = document.querySelector('.colorDeBot2');
                    colorDeBot2.style.backgroundColor = "blue"
                }
                if (random2<=41 && random2>=32){
                    const colorDeBot2 = document.querySelector('.colorDeBot2');
                    colorDeBot2.style.backgroundColor = "green"
                }
                if (random2<=31 && random2>=22){
                    const colorDeBot2 = document.querySelector('.colorDeBot2');
                    colorDeBot2.style.backgroundColor = "yellow"
                }
                if (random2<=21 && random2>=12){
                    const colorDeBot2 = document.querySelector('.colorDeBot2');
                    colorDeBot2.style.backgroundColor = "orange"
                }
                if (random2<=11 && random2>=0){
                    const colorDeBot2 = document.querySelector('.colorDeBot2');
                    colorDeBot2.style.backgroundColor = "red"
                }
                clearInterval(timeLeft2=random2)
            }


            display2.innerHTML=timeLeft2
            if(timeLeft3 < random3 ){
                
                if (random3<=60 && random3>=52){
                    const colorDeBot3 = document.querySelector('.colorDeBot3');
                    colorDeBot3.style.backgroundColor = "purple"
                }
                if (random3<=51 && random3>=42){
                    const colorDeBot3 = document.querySelector('.colorDeBot3');
                    colorDeBot3.style.backgroundColor = "blue"
                }
                if (random3<=41 && random3>=32){
                    const colorDeBot3 = document.querySelector('.colorDeBot3');
                    colorDeBot3.style.backgroundColor = "green"
                }
                if (random3<=31 && random3>=22){
                    const colorDeBot3 = document.querySelector('.colorDeBot3');
                    colorDeBot3.style.backgroundColor = "yellow"
                }
                if (random3<=21 && random3>=12){
                    const colorDeBot3 = document.querySelector('.colorDeBot3');
                    colorDeBot3.style.backgroundColor = "orange"
                }
                if (random3<=11 && random3>=0){
                    const colorDeBot3 = document.querySelector('.colorDeBot3');
                    colorDeBot3.style.backgroundColor = "red"
                }
                clearInterval(timeLeft3=random3)
            }
            display3.innerHTML=timeLeft3
            if(timeLeft4 < random4 ){
                
                if (random4<=60 && random4>=52){
                    const colorDeBot4 = document.querySelector('.colorDeBot4');
                    colorDeBot4.style.backgroundColor = "purple"
                }
                if (random4<=51 && random4>=42){
                    const colorDeBot4 = document.querySelector('.colorDeBot4');
                    colorDeBot4.style.backgroundColor = "blue"
                }
                if (random4<=41 && random4>=32){
                    const colorDeBot4 = document.querySelector('.colorDeBot4');
                    colorDeBot4.style.backgroundColor = "green"
                }
                if (random4<=31 && random4>=22){
                    const colorDeBot4 = document.querySelector('.colorDeBot4');
                    colorDeBot4.style.backgroundColor = "yellow"
                }
                if (random4<=21 && random4>=12){
                    const colorDeBot4 = document.querySelector('.colorDeBot4');
                    colorDeBot4.style.backgroundColor = "orange"
                }
                if (random4<=11 && random4>=0){
                    const colorDeBot4 = document.querySelector('.colorDeBot4');
                    colorDeBot4.style.backgroundColor = "red"
                }
                clearInterval(timeLeft4=random4)
            }
            display4.innerHTML=timeLeft4
           
            timeLeft1 -=1
            timeLeft2 -=1
            timeLeft3 -=1
            timeLeft4 -=1
        },1000)
    }


   
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        const labelBot1 = document.querySelector('#labelBot1');
        const labelBot2 = document.querySelector('#labelBot2');
        const labelBot3 = document.querySelector('#labelBot3');
        const labelBot4 = document.querySelector('#labelBot4');

        const userBot1= data['0'].name;
        const userBot2= data['1'].name;
        const userBot3= data['2'].name;
        const userBot4= data['3'].name;
        const userBot5= data['4'].name;
        const userBot6= data['5'].name;
        const userBot7= data['6'].name;
        const userBot8= data['7'].name;
        const userBot9= data['8'].name;


        labelBot1.textContent = `${userBot1}`;
        labelBot2.textContent = `${userBot2}`;
        labelBot3.textContent = `${userBot3}`;
        labelBot4.textContent = `${userBot4}`;


        document.querySelector('#bot111').textContent = `${userBot1} `;
        document.querySelector('#bot222').textContent = `${userBot2} `;
        document.querySelector('#bot333').textContent = `${userBot3} `;
        document.querySelector('#bot444').textContent = `${userBot4} `;
        document.querySelector('#bot555').textContent = `${userBot5}`;
        document.querySelector('#bot666').textContent = `${userBot6}`;
        document.querySelector('#bot777').textContent = `${userBot7}`;
        document.querySelector('#bot888').textContent = `${userBot8}`;
        document.querySelector('#bot999').textContent = `${userBot9}`;

    })

    

    

  

    return (
    <div className="marcadores">

        <div className="bots"> 
          <div className="nombreBot">
            <label htmlFor="bot" id="labelBot1"></label>
              <div className="bot"> </div>
          </div>
          <div className="contadorBot1">
              {/* <!-- contador --> */}
          </div>
          <div className="colorDeBot1">
              {/* <!-- color bot --> */}
          </div>          
        </div> 

        <div className="bots"> 
          <div className="nombreBot">
            <label htmlFor="bot"  id="labelBot2"></label>
              <div className="bot"> </div>
          </div>
          <div className="contadorBot2">
              {/* <!-- contador --> */}
          </div>
          <div className="colorDeBot2">
              {/* <!-- color bot --> */}
          </div> 
        </div> 

        <div className="bots">
            <div className="nombreBot">
                <label htmlFor="bot"  id="labelBot3"></label>
                <div className="bot"> </div>
            </div>
            <div className="contadorBot3">
                {/* <!-- contador --> */}
            </div>
            <div className="colorDeBot3">
              {/* <!-- color bot --> */}
          </div> 
        </div> 

        <div className="bots">
            <div className="nombreBot">
                <label htmlFor="bot" id="labelBot4"></label>
                <div className="bot"> </div>
            </div>
            <div className="contadorBot4">
                {/* <!-- contador --> */}
            </div>
            <div className="colorDeBot4">
              {/* <!-- color bot --> */}
          </div> 
        </div> 

    </div>
    )
}
