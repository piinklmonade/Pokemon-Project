
function pokeSearch(){
  
  
  let pokemon =$(".pokemon").val();
  const request = new XMLHttpRequest();
  
  const url="https://pokeapi.co/api/v2/pokemon/" + pokemon.toLowerCase();
  console.log(url);
  
  request.open("GET", url);
  
 request.onload = function () {
   
   
   if(this.response === "Not Found"){
     $("#res").text(`Search result for : "${pokemon}" `);
     $("#pokeId").text(`This is not an official Pokemon!`);
   }
   
    else{
    let data = JSON.parse(this.response);
    console.log(data);
   
   if (request.status >= 200 && request.status < 400){
     let frontImg = data.sprites.front_default;
     let backImg = data.sprites.back_default;
     let weight = data.weight;
     let height = data.height;
     let pokeID = data.id;
     let shiny = data.sprites.front_shiny;
     
     
     $("#res").text(`Search result for : "${pokemon}" `);
     $("#pokeId").text(`This Pokemon's ID is ${pokeID} `);
      $("#weight").text(`${pokemon} weighs ${weight} pounds`);
     $("#height").text(`${pokemon} is ${height} feet tall`)
  
     $("#front").attr( 'src', frontImg);
     $("#back").attr(`src`, backImg)
     $("#shiny").attr(`src`, shiny)
     
    
   }
   }
  };
  
  request.send();
   
  
}