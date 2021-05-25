let boutonplus=Array.from(document.getElementsByClassName('bi-plus-square'));
let boutonmoins=Array.from(document.getElementsByClassName('bi-dash-square-dotted'))
let valeur=Array.from(document.querySelectorAll('.qte'));
let prixinital=Array.from(document.querySelectorAll('.prixinitial'))
let newprice=Array.from(document.querySelectorAll('.newprice'));
let total=document.querySelector('.totalnumber');





//Plus and Minus function//

for(let i in boutonplus){
  boutonplus[i].addEventListener("click",function(){
   valeur[i].innerHTML++
         let subtotal = prixinital[i].innerHTML*Number(valeur[i].innerHTML); 
         newprice[i].innerHTML=subtotal
         console.log(newprice[i]);
    
         let somme = 0;
         for (let y=0 ; y< newprice.length ; y++){
            somme=somme+ (+newprice[y].innerHTML)
         }
         total.innerHTML=somme;

  })
  
   }


 for(let i in boutonmoins){
    boutonmoins[i].addEventListener("click",function(){
        if(Number(valeur[i].innerHTML)>0){
          valeur[i].innerHTML--;
            let subtotal = prixinital[i].innerHTML*Number(valeur[i].innerHTML); 
            newprice[i].innerHTML=subtotal
            console.log(newprice[i]);

            let somme = 0;
            for (let y=0 ; y< newprice.length ; y++){
               somme=somme+ (+newprice[y].innerHTML)
            }
            total.innerHTML=somme;
        }
        else {}
             
      })
      
       }

//Heart color//

let heart=Array.from(document.getElementsByClassName('bi-heart-fill'));
for(let i in heart){
heart[i].addEventListener("click",function(){

     if(heart[i].style.fill==="red") {
        heart[i].style.fill="#212529"
     }  else { 
        heart[i].style.fill="red";
     }
   
})
   }

//Delete Function//
let Suppelem=Array.from(document.getElementsByClassName('bi-trash'));
let productel=Array.from(document.getElementsByClassName('product'));
let allproducts=Array.from(document.getElementsByClassName('AllProducts'));

 for( let i in Suppelem){
 Suppelem[i].addEventListener("click",function(){
    for (let x=0 ; x<allproducts.length ; x++){
      allproducts[x].removeChild(productel[i]);
      total.innerHTML=total.innerHTML-Number(newprice[i].innerHTML);
       }

 })
 }

