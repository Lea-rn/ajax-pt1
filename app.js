// const button = document.querySelector(".btn") ;
// const pragraph = document.querySelector(".pr")
// const title = document.querySelector(".title")
// const p =document.querySelector(".salma")
///// synchronous ::

// button.addEventListener("click",()=>{
//   alert("set TEXt") ;
//   pragraph.textContent = "Hello, World!";
// })

///// asynchronous ::

// button.addEventListener("click",function(){

//     setTimeout(function(){
//     pragraph.textContent = "hello "
//     },5000) ;

//     setTimeout(function(){
//         p.textContent = "salma "
//         },3000) ;

//     title.textContent = "welcome" ;

// })

const cardContainer = document.querySelector(".card-container");

////// asynchrone ::: 

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("get", `https://restcountries.com/v2/name/${country}`);
//   request.send();


// //   request.addEventListener("load", function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `  <div class="card">
// //             <div class="flag-container">
// //                 <img src="${data.flag}" alt="">
// //             </div>
// //             <div class="card-description">
// //               <h2>${data.name}</h2>
// //               <h5>${data.region}</h5>
// //               <h5>🧑‍🤝‍🧑 ${data.population} M people</h5>
// //               <h5>🗣️ ${data.languages[0].name}</h5>
// //               <h5>💰 ${data.currencies[0].name}</h5>
// //             </div>
// //         </div>`;

// //     cardContainer.insertAdjacentHTML("afterbegin", html);
// //   });
// // };

// // getCountry("germany");
// // getCountry("tunisia");
// // getCountry("mali");
// // getCountry("turkey");

const RenderCountry = function  (data , className =""){
  const html = `  <div class="card ${className}">
  <div class="flag-container">
       <img src="${data.flag}" alt="">
 </div>
   <div class="card-description">
    <h2>${data.name}</h2>
    <h5>${data.region}</h5>
     <h5>🧑‍🤝‍🧑 ${data.population} M people</h5>
    <h5>🗣️ ${data.languages[0].name}</h5>
     <h5>💰 ${data.currencies[0].name}</h5>
   </div>
</div>`;
cardContainer.insertAdjacentHTML("afterbegin",html)
}

const getCountryAndNeighbor = function(country){
const request = new XMLHttpRequest ()
request.open("GET",`https://restcountries.com/v2/name/${country}`)
request.send();
request.addEventListener("load",function(){
  const [data] = JSON.parse(this.responseText)
    console.log(data)
 RenderCountry(data)

 const neighbor = data.borders?.[0] 
 console.log(neighbor)
 if (!neighbor) return ; 
 const request2 = new XMLHttpRequest() 
 request2.open("GET" ,`https://restcountries.com/v2/alpha/${neighbor}`)
 request2.send()
 request2.addEventListener("load",function(){
   const data2 = JSON.parse(this.responseText)
   console.log("data2 :" , data2) ; 
   RenderCountry(data2 , "neighbor")
 })
})
}


getCountryAndNeighbor("tunisia")


///// callback hill :::  

// setTimeout(()=>{
//   console.log("eya")
//   setTimeout(()=>{
//     console.log("nessrine")
//   },8000)
//   setTimeout(()=>{
//     console.log("mohamed")
//   },10000)
//   setTimeout(()=>{
//    console.log("hello")
//   },12000)
// },4000)
