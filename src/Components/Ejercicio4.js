export const ejercicio4 = () =>{

    const iguales = () =>{
        let m
        let rep = 0
        const uno = document.getElementById("uno").value
        const dos = document.getElementById("dos").value
        const tres = document.getElementById("tres").value
        const arreglo = [uno, dos, tres]
        arreglo.forEach((numero, index) => {
          let p = arreglo[index]
          switch(index){
            case 0:
              if (p===arreglo[index+1] || p===arreglo[index+2]){
                rep++
              }
              break;
            case 1:
              if (p===arreglo[index+1] || p===arreglo[index-1]){
                rep++
              }
              break;
            case 3:
              if (p===arreglo[index-1] || p===arreglo[index-2]){
                rep++
              }
              break;
          }
        })
        m = "Hubieron "+rep+" numeros repetidos"

        const mensaje = document.createElement("span")
        mensaje.appendChild(document.createTextNode(m))
        console.log(mensaje)
        const div = document.getElementById("4")
        div.appendChild(mensaje)
      }

      return(
        <>
        <div>
        <span>Ingrese tres numeros</span>
        <input type="text" id='uno'></input>
        <input type= "text" id="dos"></input>
        <input type= "text" id="tres"></input>
        <button class="button" onClick={iguales}>cargar</button>
      </div>
      <div id = "4"></div>
        </>
      )

} 