export const ejercicio1 = () => {

    var m 

    const segun_horas = () =>{
        const rs = document.getElementById("segundos").value
        var hora,min,seg
        
          if(rs < 0){
      
            m = "No se puede tener segundos negativos"
      
          }else if(rs <=60){
      
            hora = 0
            min = 0
            seg = rs
            m ="el tiempo que digito en segundos es:"+
            " horas:"+hora+
            " minutos:"+min+
            " segundos:"+seg 
      
          }else if(rs > 60){
      
            let p_min = Math.floor(rs/60)
            if(p_min > 60){
      
              hora = Math.floor(p_min/60)
              min = p_min-(hora*60)
              seg = rs-(p_min*60)
              
            }else{
              hora = 0
              min = p_min-(hora*60)
              seg = rs-(p_min*60)
            }
            m ="el tiempo que digito en segundos es:"+
              " horas:"+hora+
              " minutos:"+min+
              " segundos:"+seg  
          }
        //   console.log(min)
        const mensaje = document.createElement("span")
        mensaje.appendChild(document.createTextNode(m))
        console.log(mensaje)
        const div = document.getElementById("1")
        div.appendChild(mensaje)
          
      }

      return(
        <>
        <div>
        <span>Ingrese el tiempo en segundos:</span>
        <input type="text" id='segundos'></input>
        <button class="button" onClick={segun_horas}>Calcular</button>
        </div>
        <div id ="1"></div>

        </>
      )
}