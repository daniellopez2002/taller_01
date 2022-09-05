export const ejercicio6 = () =>{
    const lista = []
    const Impar =()=>{
        const num = document.getElementById("numeroImpar").value
        console.log(num)
        for (var i = 0; i<= num; i++){
          if(i%2!==0){
            lista.push(i)
          }
        }
      }

      return(
      <>
      <div>
        <span>Ingrese un numero</span>
        <input type="text" id='numeroImpar'></input>
        <button class="button"onClick={Impar}>crear</button>
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