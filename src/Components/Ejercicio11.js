

export const estudiante = () =>{
    var text 

    function calcularNota(){
        var estudiante = new Object();
        estudiante.nombre = document.getElementById("nombreEstudiante").value
        estudiante.nota1 = document.getElementById("nota1").value
        estudiante.nota2 = document.getElementById("nota2").value 
        estudiante.nota3 = document.getElementById("nota3").value
        const div = document.getElementById("11")
        const span = document.createElement("span")

        if (estudiante.nota1 >= 0.0 && estudiante.nota1 <= 5.0 &&
            estudiante.nota2 >= 0.0 && estudiante.nota2 <= 5.0 &&
            estudiante.nota3 >= 0.0 && estudiante.nota3 <= 5.0 ){
                estudiante.notaFinal = (parseFloat(estudiante.nota1)+parseFloat(estudiante.nota2)+parseFloat(estudiante.nota3))/3

                if (estudiante.notaFinal >= 3.0){
                        text = document.createTextNode("El estudiante "+estudiante.nombre+" paso la materia con " + estudiante.notaFinal)
                }
            }else{
                    text = document.createTextNode("El estudiante "+estudiante.nombre+" no paso la materia con "+ estudiante.notaFinal)
            }
            span.appendChild(text)        
            div.appendChild(span)

    }
        

    
    return(
        <>
        <div id='11'>
        <span>Ingrese el nombre del estudiante</span>
        <input type='text' id="nombreEstudiante"></input>
        <span>Ingrese las tres notas</span>
        <input type='number' id='nota1'></input>
        <input type='number' id='nota2'></input>
        <input type='number' id='nota3'></input>
        
        </div>
        <button class="button"onClick={calcularNota}>calcular</button>
        </>
    )
}
    

    


