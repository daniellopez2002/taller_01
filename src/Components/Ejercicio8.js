function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export const ejercicio8 = () =>{

    let lista = []
    const dividir = () =>{
        
        for(let i = 0; i < 10; i++){
          let r = random(1,25)
          lista.unshift(r)
        }
        console.log(lista)
        const index = document.getElementById("index").value
      
        let numeros = []
        if (index < 0 || index > 10){
          let m = "Debe ser un numero entre 0 y 10"
          numeros.unshift(m)
        }else{
          let p = lista[index]
          lista.forEach((num) =>{
            let j = num/p
            numeros.unshift(j)
          })
        }
      }

    return(
        <>
        <div>
        <span>Ingrese un numero entre el 0 y 10</span>
        <input type="text" id='index'></input>
        <button class="button"onClick={dividir}>crear</button>
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