let boutonplus=Array.from(document.getElementsByClassName('bi-plus-square'));
let boutonmoins=Array.from(document.getElementsByClassName('bi-dash-square-dotted'))
let valeur=Array.from(document.querySelectorAll('.qte'));
let prixinitial=Array.from(document.querySelectorAll('.prixinitial'));
let somme=0;
let qtetotal=document.querySelectorAll(".totalnumber");

let total=Array.from(document.querySelectorAll(".total"));
let price=document.createElement('span');






let prixfinal=Array.from(document.querySelectorAll('.price'));
for(let x=0 ; x< prixfinal.length ; x++){
console.log(prixfinal[x]);
}


//Plus and Minus function//

for(let i in boutonplus){
  boutonplus[i].addEventListener("click",function(){
   let newval=(valeur[i].innerHTML++)+1;
    console.log(newval);
    let newnumber=Number(prixinitial[i].innerHTML*Number(newval));
    console.log(newnumber)
    price.textContent=newnumber
    
    for (let y=0;y<total.length;y++){
        total[y].appendChild(price);}
        console.log(total[i]);

  })
   }


 for(let i in boutonmoins){
    boutonmoins[i].addEventListener("click",function(){
        if(Number(valeur[i].innerHTML)>0){
            let newval=(valeur[i].innerHTML--)-1;
            console.log(newval)
            newnumber=Number(prixinitial[i].innerHTML*Number(newval));
            console.log(price);   
            price.textContent=newnumber;
        
        for (let y=0;y<total.length;y++){
                total[y].appendChild(price);}
                console.log(total[i]);
        
        }
        else {}
             
      })
       }

//Heart color//

let heart=Array.from(document.getElementsByClassName('bi-heart-fill'));
for(let i in heart){
heart[i].addEventListener("click",function(){

     if(heart[i].style.fill="#212529") {
        heart[i].style.fill="red"
     }  else { 
        heart[i].style.fill="#212529";
     }
   
})
   }

//Delete Function//
let Suppelem=Array.from(document.getElementsByClassName('bi-trash'));
let productel=Array.from(document.getElementsByClassName('product'));
let allproduct=Array.from(document.getElementsByClassName('AllProducts'));
 for( let i in Suppelem){
 Suppelem[i].addEventListener("click",function(){
     allproduct[i].removeChild(productel[i]);
 })
 }


