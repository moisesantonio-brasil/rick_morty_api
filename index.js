let ir = document.querySelector(".antes")
let voltar = document.querySelector(".depois")
const pesquisa = document.querySelector("input")
let confirmar_pesq = document.querySelector(".btn-centro")
let seleçao = 0;
ir.addEventListener("click",()=>{
  seleçao -=1
 
  fetch(`https://rickandmortyapi.com/api/character/`+ seleçao).then(resposta =>{
        return resposta.json()
    }).then(corpo =>{ 
 
        document.getElementById("tst").innerHTML = "Localização: "+corpo.location.name
        document.getElementById("tst2").textContent = "Nome: "+corpo.name
        document.getElementById("tst3").textContent = "Gênero: "+corpo.gender
        document.getElementById("tst4").textContent = "Espécie: "+corpo.species
        document.getElementById("tst5").textContent = "Id: "+corpo.id
        let image = document.querySelector("img")
        image.setAttribute("src",corpo.image)
    })
    if(seleçao <= 0){
        seleçao = 0
    }
   
})  

voltar.addEventListener("click",()=>{
    seleçao +=1

    fetch(`https://rickandmortyapi.com/api/character/`+ seleçao).then(resposta =>{
          return resposta.json()
      }).then(corpo =>{
 
        document.getElementById("tst").innerHTML = "Localização: "+corpo.location.name
        document.getElementById("tst2").textContent = "Nome: "+corpo.name
        document.getElementById("tst3").textContent = "Gênero: "+corpo.gender
        document.getElementById("tst4").textContent = "Espécie: "+corpo.species
        document.getElementById("tst5").textContent = "Id: "+corpo.id
          let image = document.querySelector("img")
          image.setAttribute("src",corpo.image)
      })
  })  

  


confirmar_pesq.addEventListener("click",(p)=>{
p.preventDefault();

const valor = pesquisa.value;

fetch(`  https://rickandmortyapi.com/api/character/?name=`+ valor).then(resposta =>{
    return resposta.json()
}).then(corpo =>{
    let image = document.querySelector("img")
    image.setAttribute("src",corpo.results[0].image)
    document.getElementById("tst").innerHTML = "Localização: "+corpo.results[0].location.name
        document.getElementById("tst2").textContent = "Nome: "+corpo.results[0].name
        document.getElementById("tst3").textContent = "Gênero: "+corpo.results[0].gender
        document.getElementById("tst4").textContent = 'status: '+corpo.results[0].status
        document.getElementById("tst5").textContent = 'id: '+corpo.results[0].id

})

})


document.addEventListener("keyup",(event)=>{
   if(event.key === "Enter"){
        const valor = pesquisa.value;
        fetch(`  https://rickandmortyapi.com/api/character/?name=`+ valor).then(resposta =>{
            return resposta.json()
        }).then(corpo =>{
            let image = document.querySelector("img")
            image.setAttribute("src",corpo.results[0].image)
            document.getElementById("tst").innerHTML = "Localização: "+corpo.results[0].location.name
                document.getElementById("tst2").textContent = "Nome: "+corpo.results[0].name
                document.getElementById("tst3").textContent = "Gênero: "+corpo.results[0].gender
                document.getElementById("tst4").textContent = 'status: '+corpo.results[0].status
                document.getElementById("tst5").textContent = 'id: '+corpo.results[0].id
        
        }) 
    }
    })
