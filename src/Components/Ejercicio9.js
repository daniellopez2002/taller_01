export const ejercicio9 = () =>{
    const tabla =()=>{
        const div = document.getElementById("tabla")
        div.innerHTML = ""
        var table = document.createElement("table")
      
        
      
        const m = document.getElementById("columnas").value
        const n = document.getElementById("filas").value
        if(m <= 0 || n <= 0){
          var mensaje = document.createTextNode("Debe ser numero mayores o diferentes a 0")
          div.appendChild(mensaje)
        }else{
          //filas
          for(let i = 0; i<n; i++){
            var fila = document.createElement("tr")
            for(let j = 0; j<m; j++){
              var celda = document.createElement("td")
              var texto = document.createTextNode(j)
              celda.appendChild(texto)
              fila.appendChild(celda)
      
            }
            table.appendChild(fila)
          }
          div.appendChild(table)
          table.setAttribute("border", "2")
        }
        
      }

    return(
        <>
        <div>
        <span>Ingrese el tamaño de su tabla </span>
        <span>Filas:</span>
        <input type="text" id='filas'></input>
        <span>Columnas:</span>
        <input type="text" id='columnas'></input>
        <button class="button"onClick={tabla}>crear</button>
      </div>
      <div id='tabla'></div>
        </>
    )
}