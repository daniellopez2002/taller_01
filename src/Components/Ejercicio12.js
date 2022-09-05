

export const ejercicio12 = () =>{
    var estudiantes = []
    function addEstudiante(){
        var estudiante = new Object();
        estudiante.nombre = document.getElementById("nombreEstudiante_12").value
        estudiante.nota1 = document.getElementById("nota1_12").value
        estudiante.nota2 = document.getElementById("nota2_12").value 
        estudiante.nota3 = document.getElementById("nota3_12").value
        estudiante.notaFinal = (parseFloat(estudiante.nota1)+parseFloat(estudiante.nota2)+parseFloat(estudiante.nota3))/3

        console.log(estudiante)

        estudiantes.push(estudiante)
    }
     

    function calcularAprobados(){

        const table = document.getElementById("tableEstudiante")
        estudiantes.forEach((estudiante) =>{
            var tr = document.createElement("tr")

            var nombre = document.createElement('td')
            nombre.appendChild(document.createTextNode(estudiante.nombre))

            var nota = document.createElement('td')
            nota.appendChild(document.createTextNode(estudiante.notaFinal))
            

            if (estudiante.notaFinal >= 3.0){
                var aprueba = document.createElement('td')
                aprueba.appendChild(document.createTextNode("Si aprobo"))
        
            }else{
                var aprueba = document.createElement('td')
                aprueba.appendChild(document.createTextNode("No aprobo"))
            }

            tr.appendChild(nombre)
            tr.appendChild(nota)
            tr.appendChild(aprueba)
            table.appendChild(tr)
    
        })
        

        

       
                
            // span.appendChild(text)        
            // div.appendChild(span)

    }
        

    
    return(
        <>
        <div id='12'>
        <span>Ingrese el nombre del estudiante</span>
        <input type='text' id="nombreEstudiante_12"></input>
        <span>Ingrese las tres notas</span>
        <input type='number' id='nota1_12'></input>
        <input type='number' id='nota2_12'></input>
        <input type='number' id='nota3_12'></input>
        
        </div>
        <button class="button"onClick={addEstudiante}>agregar estudiante</button>
        <button class="button"onClick={calcularAprobados}>Mostrar estudiantes</button>
        <table id="tableEstudiante" border="2">
            <tr>
                <th>Nombre</th>
                <th>Nota</th>
                <th>Aprobo</th>
            </tr>
        </table>
        </>
    )
}
    

    

