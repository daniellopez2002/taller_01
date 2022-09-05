export const ejercicio7 = () =>{
    let salarios = []

    const addSalario = () =>{
        const p = document.getElementById("salario")
        salarios.push(p)
    }

    const eliminarSalario = () =>{
        salarios.shift()
    }

    const calcularSalarios = () =>{
        
        if(salarios.length === 10){
            salarios.forEach((salario) => {
            let s = salario+ (salario*0.08)
            salarios.unshift(s)
          })
        }else{
          const m = "Error hay "+salarios.length+" salarios y deben ser 10"
          const mensaje = document.createElement("span")
            mensaje.appendChild(document.createTextNode(m))
            console.log(mensaje)
            const div = document.getElementById("7")
            div.appendChild(mensaje)

        }
      
      }

    return(
        <>
        <div>
        <span>Ingrese un salario</span>
        <input type="text" id="salario"></input>
        <button class="button"onClick={addSalario}>Añadir salario</button>
        <button class="button"onClick={calcularSalarios}>Dividir salarios</button>
        <button class="button"onClick={eliminarSalario}>Eliminar primer salario</button>
      </div>
    <ol>{
      salarios.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <div id="7"></div>
        </>
    )
}