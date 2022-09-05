export const ejercicio3 = () =>{

    const saludo = ()=>{  //--------->Revisar el picker 
        let m
        const nombre = document.getElementById("nombre").value
        const hour = document.getElementById("horas").value
      
        if (hour > 6 && hour < 12){
          m = "Buenos dias "+nombre
        }else if (hour >= 12 && hour < 18){
          m = "Buenas tardes "+nombre
        }else if (hour >= 18 && hour <1){
          m = "Buenas noches "+nombre
        }else if (hour >= 1 && hour <6){
          m = "Es de madrugada asi que buen coding jeje "+nombre
        }
        // console.log(tiempoInput)
        const mensaje = document.createElement("span")
        mensaje.appendChild(document.createTextNode(m))
        console.log(mensaje)
        const div = document.getElementById("3")
        div.appendChild(mensaje)
      }
    return(
    <>
        <div>
        <span>Ingrese su nombre</span>
        <input type="text" id='nombre'></input>
        <span>ingrese la hora</span>
        <input type="number" id="horas" min="0" max="23"></input>
        {/* <input type= "time" id="horas"></input> */}
        <button class="button"onClick={saludo}>saludar</button>
      </div>
      <div id = "3"></div>
    </>)
}