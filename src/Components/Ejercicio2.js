export const ejercicio2 = () =>{

    const llamada = () => {
        const dur = document.getElementById("llamada").value
        let m
        if (dur < 0){
          m = "No pude haber una llamada de duración negativa"
        }else if(dur <= 3){
          m = "La llamada cuesta $100"
        }else if(dur>3){
          let valor = 100 + (50*(dur-3))
          m = "La llamada cuesta $"+valor
        }
        const mensaje = document.createElement("span")
        mensaje.appendChild(document.createTextNode(m))
        console.log(mensaje)
        const div = document.getElementById("2")
        div.appendChild(mensaje)
      }

      return(
        <>
        <div>
        <span>Ingrese el tiempo en minutos de la llamada</span>
        <input type="text" id='llamada'></input>
        <button class="button"onClick={llamada}>Calcular</button>
        </div>
        <div id = "2"></div>
        </>
      )

}