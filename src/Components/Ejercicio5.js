export const ejercicio5 = () => {
    var lista = []
    const menorMayor= ()=>{
        
        const num = document.getElementById("numero").value
        for (var i = 0; i<= num; i++){
          lista.push(i)
        }
      }

      return(
        <>
        <div>
        <span>Ingrese el tamaño de la lista</span>
        <input type="text" id='numero'></input>
        <button class="button" onClick={menorMayor}>crear</button>
      </div>
    <ol>{
      lista.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
        </>
      )
}