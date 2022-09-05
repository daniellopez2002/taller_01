export const ejercicio10 = () =>{
    const tablaInput = () =>{
        const div = document.getElementById("tablaInput")
        div.innerHTML = ""
        var table = document.createElement("table")
      
        
      
        const m = document.getElementById("columnasInput").value
        const n = document.getElementById("filasInput").value
        if(m <= 0 || n <= 0){
          var mensaje = document.createTextNode("Debe ser numero mayores o diferentes a 0")
          div.appendChild(mensaje)
        }else{
          //filas
          for(let i = 0; i<n; i++){
            var fila = document.createElement("tr")
            for(let j = 0; j<m; j++){
              var celda = document.createElement("td")
              var texto = document.createElement("input")
              celda.appendChild(texto)
              fila.appendChild(celda)
      
            }
            table.appendChild(fila)
          }
          div.appendChild(table)
          table.setAttribute("border", "2")
        }
      }
      
      const calcularSuma = ()=>{
        let numeros= []
        let sumaTotal = 0
        var nTd = document.createElement("td")
        const table = document.getElementById("tablaInput").children[0]
        const filas = table.children
        for (let tr of filas){
          var td = tr.children
          for(let input of td){
            var n = input.children[0].value
            numeros.push(n)
          }
        }
        numeros.forEach((num)=>{
          sumaTotal += parseFloat(num)
        })
        console.log(sumaTotal)
      
        var total = document.createTextNode(sumaTotal)
        nTd.appendChild(total)
        table.appendChild(nTd)
      }

      return(
        <>
        <div>
        <span>Ingrese el tamaño de su tabla </span>
        <span>Filas:</span>
        <input type="text" id='filasInput'></input>
        <span>Columnas:</span>
        <input type="text" id='columnasInput'></input>
        <button class="button"onClick={tablaInput}>crear</button>
        <button class="button"onClick={calcularSuma}>calcular</button>
      </div>
      <div id='tablaInput'></div>
        </>
      )
}