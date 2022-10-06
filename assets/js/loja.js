const titulo = document.querySelector("#titulo");

const showData = (result)=>{
    for(const campo in result){
      if(document.querySelector("#" + campo)) {
        document.querySelector("#" + campo).value = result[campo];
      }
      
    }
  }

titulo.addEventListener("blur", async (e) => {
    let search = titulo.value;
  
    if(search.length < 10 && isNaN(search)) {
      alert("CEP inválido");
      cep.value = "";
    
      return;
    }

const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

const resultado = await fetch(`https://dummyjson.com/products/${search}/json/`, options);
const json = await resultado.json();

// showData(json)

console.log(json)
});