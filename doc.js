  
  
  //---------------------Exit----------------------------------
  function exit(){
    alert("-------------------THAKS FOR VISTING---------------------\n---------WELCOME AGAIN----------------------")
  }
  //------------------Invalid Function--------------------------
  function Invalid(){
    let i = Number(prompt(`You entered invalid number......please can u enter a valid number`))
    if(i === 1 ){
      Pizza()
    }
    else{
      exit()
    }

  }



 //-----------------pizza----------------------- 
    function Pizza() {
        let p1 = Number(prompt(`choose items\n1.Veg Pizza\n2.Non-veg pizza`))
        if (p1 === 1) {
            Veg()
        }
        else if (p1 === 2) {
            Nonveg()
        }
        else{
          Invalid()
        }

    }
 //------------- veg function-----------------------
    function Veg() {
        let v = Number(prompt(`select which ever you want\n1.Chilly Pizza\n2.Mushroom Breoccoli Pizza\n3.Tomato Baguette Pizza`))
        if (v === 1) {
            chilli()
        }
        else if (v === 2) {
            Mushroom()
        }
        else if (v === 3) {
            Tomato()
        }
    }
//--------------chilli--------------------------------
    function chilli() {
        let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
        if (j === 1) {
            alert("extra toppings are added")
            alert(`The item details\n--------------------------------\nQuantity         -     1\nPrice       -       250\nExtra        -       5`)
            let f = Number(prompt(`Do you want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     : Chilli Pizza\nQuantity         :  1\nPrice             : 250\nExtra               :  5\n------------------------\nTotal  : 255`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     : Chilli Piza\nQuantity         :  1\nPrice             : 250\n------------------------\nTotal  : 250`)
            }
        }
    }
//--------------Mushroom---------------
    function Mushroom(){
        let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
        if (j === 1) {
            alert("extra toppings are added")
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       350\nExtra        -       10`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     : Mushroom Breoccoli Pizza\nQuantity         :  1\nPrice             : 350\nExtra                :  10\n------------------------\nTotal  : 360`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     : Mushroom Breoccoli Pizza\nQuantity         :  1\nPrice             : 350\n------------------------\nTotal  : 350`)
            }
        }
    }
//--------------tomoto----------------------
    function  Tomato(){
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
        if (j === 1) {
            alert("extra toppings are added")
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       190\nExtra        -       10`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     : Tomato Baguette Pizza\nQuantity         :  1\nPrice             : 350\nExtra                :  10\n------------------------\nTotal  : 210`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     : Tomato Baguette Pizza\nQuantity         :  1\nPrice             : 350\n------------------------\nTotal  : 190`)
            }
        }

  }
  //Non-veg-------------------------------------------
  function  Nonveg() {
        let v = Number(prompt(`select which ever you want\n1.Jerked Chicken Pizza\n2.Pepperoni Pizza\n3.Gamberi Pizza`))
        if (v === 1) {
            Jerked()
        }
        else if (v === 2) {
            Pepperon()
        }
        else if (v === 3) {
            Gamberi()
        }
    }
//--------jarked------------------------------
    function Jerked(){
        let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
        if (j === 1) {
            alert("extra toppings are added")
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       390\nExtra        -       15`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Jerked Chicken Pizza \nQuantity         :  1\nPrice             : 390\nExtra                :  15\n------------------------\nTotal  : 405`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Jerked Chicken Pizza\nQuantity         :  1\nPrice             : 390\n------------------------\nTotal  : 390`)
            }
        }


    }
//---------------------peppered----------------
    function Pepperon(){
        let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
        if (j === 1) {
            alert("extra toppings are added")
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       390\nExtra        -       15`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Pepperoni Pizza \nQuantity         :  1\nPrice             : 390\nExtra                :  10\n------------------------\nTotal  : 400`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Pepperoni Pizza\nQuantity         :  1\nPrice             : 390\n------------------------\nTotal  : 390`)
            }
        }



    }
//------------gamberi---------------------
function Gamberi(){
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
        if (j === 1) {
            alert("extra toppings are added")
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       350\nExtra        -       30`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Gamberi Pizza \nQuantity         :  1\nPrice             : 350\nExtra                :  10\n------------------------\nTotal  : 360`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Gamberi Pizza\nQuantity         :  1\nPrice             : 390\n------------------------\nTotal  : 390`)
            }
        }

}
//-------------ice creams----------------------
function Icecream() {
    let p = Number(prompt(`choose items\n1.Vennela\n2.chocklet\n3.Butterscrach`))
        if (p === 1) {
            Vanilla()
        }
        else if (p === 2) {

            Chocolate()
        } else if(p === 3){

            Butterscotch()
        }
       
    }
 //------------venilla-------------------------------
 function Vanilla(){
    let j = Number(prompt(`Do you want vennela icecream\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       150`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n1 = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n1))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Vennela Ice \nQuantity         :  1\nPrice             : 150\n------------------------\nTotal  : 150`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Vennela icecream\nQuantity         :  1\nPrice             : 150\n------------------------\nTotal  : 150`)
            }
        }
}
//----------------chocolates--------------------------
function Chocolate(){
    let j = Number(prompt(`Do you want Chocolate icecream\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       250`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Chocolate Icecream \nQuantity         :  1\nPrice             : 250\n------------------------\nTotal  : 250`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Choclate icecream\nQuantity         :  1\nPrice             : 250\n------------------------\nTotal  : 250`)
            }
        }
}
  //--------------butterscotch---------------
function Butterscotch(){
    let j = Number(prompt(`Do you want Butterscotch icecream\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       150`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Vennela Ice \nQuantity         :  1\nPrice             : 150\n------------------------\nTotal  : 150`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Vennela icecream\nQuantity         :  1\nPrice             : 150\n------------------------\nTotal  : 150`)
            }
        }
}


//-------------Drinks------------------
function drinks() {
    let p = Number(prompt(`choose items\n1.Milkshake\n2.Cool drinks`))
        if (p === 1) {
            Milkshack()
        }
        else{

            Cooldrink()
        } 
       
    }

  //------------- milkshake function-----------------------
  function Milkshack() {
        let v = Number(prompt(`select which ever you want\n1.Creamsicle milkshacke\n2.chocolate  milkshack\n3.Strawberry Milkshake`))
        if (v === 1) {
            Creamsicle()
        }
        else if (v === 2) {
            chaco()
        }
        else if (v === 3) {
            strawberry()
        }
    }   

    

//----------------Creamsiccle milkshacke------------------------
    function Creamsicle(){
    let j = Number(prompt(`Do you want Creamsicle milkshack\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       190`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Creamsicle milkshacke\nQuantity         :  1\nPrice             : 190\n------------------------\nTotal  : 190`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Creamsicle milkshack\nQuantity         :  1\nPrice             : 190\n------------------------\nTotal  : 190`)
            }
        }
}


//----------------chocolate milkshacke------------------------
function chaco(){
    let j = Number(prompt(`Do you want Chacolate milkshack\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       220`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Chocolate milkshacke\nQuantity         :  1\nPrice             : 220\n------------------------\nTotal  : 220`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Chacolate milkshack\nQuantity         :  1\nPrice             : 220\n------------------------\nTotal  : 220`)
            }
        }
}

//----------------strawberry milkshacke------------------------
function strawberry(){
    let j = Number(prompt(`Do you want strawberry milkshack\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       130`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :strawberry milkshacke\nQuantity         :  1\nPrice             : 130\n------------------------\nTotal  : 130`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :strawberry Milkshake\nQuantity         :  1\nPrice             : 130\n------------------------\nTotal  : 130`)
            }
        }
}
//------------- Cooldrink function-----------------------
function Cooldrink() {
        let v = Number(prompt(`select which ever you want\n1.Sprite\n2.Mazza\n3.Fanta\n4.Thumsup`))
        if (v === 1) {
            sprite()
        }
        else if (v === 2) {
            mazza()
        }
        else if (v === 3) {
            Fanta()
        }
        else {
            Thumsup()
        }
    }   

 //-------------sprite function----------------------  
 function sprite(){
    let j = Number(prompt(`Do you want sprite\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       30`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :sprite\nQuantity         :  1\nPrice             : 30\n------------------------\nTotal  : 30`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :sprite\nQuantity         :  1\nPrice             : 30\n------------------------\nTotal  : 30`)
            }
        }
} 


//-------------Mazza function----------------------  
function mazza(){
    let j = Number(prompt(`Do you want mazza\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       50`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Mazza\nQuantity         :  1\nPrice             : 50\n------------------------\nTotal  : 50`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Mazza\nQuantity         :  1\nPrice             : 50\n------------------------\nTotal  : 50`)
            }
        }
} 
//-------------------Fanta function------------------
function Fanta(){
    let j = Number(prompt(`Do you want Fanta\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       30`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Fanta\nQuantity         :  1\nPrice             : 30\n------------------------\nTotal  : 30`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Fanta\nQuantity         :  1\nPrice             : 30\n------------------------\nTotal  : 30`)
            }
        }
} 

//-------------Thumsup function----------------------  
function Thumsup(){
    let j = Number(prompt(`Do you want Thumsup\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       40`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Thumsup\nQuantity         :  1\nPrice             : 40\n------------------------\nTotal  : 40`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Thumsup\nQuantity         :  1\nPrice             : 40\n------------------------\nTotal  : 40`)
            }
        }
} 
//-------------Pastries------------------
function Desserts() {
    let p = Number(prompt(`choose items\n1.Pastries\n2.cookies\n3.cakes`))
        if (p === 1) {
            Pastries()
        }
        else if(p === 2){

            cookies()
        } else{
            cakes()
        }
       
    }

  //------------- milkshake function-----------------------
  function Pastries() {
        let v = Number(prompt(`select which ever you want\n1.Puff Pastry\n2.Short Crust Pastry\n3.Choux Pastry`))
        if (v === 1) {
            Puff()
        }
        else if (v === 2) {
            short()
        }
        else if (v === 3) {
            Choux()
        }
    }   

//-------------Puff function----------------------  
function Puff(){
    let j = Number(prompt(`Do you want Puff Pastry\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       80`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Puff Pastry\nQuantity         :  1\nPrice             : 80\n------------------------\nTotal  : 80`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Puff Pastry\nQuantity         :  1\nPrice             : 80\n------------------------\nTotal  : 80`)
            }
        }
} 


//------------- short crust pastri function----------------------  
function short(){
    let j = Number(prompt(`Do you want Short Crust Pastry\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       180`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Short Crust Pastry\nQuantity         :  1\nPrice             : 180\n------------------------\nTotal  : 180`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Short Crust Pastry\nQuantity         :  1\nPrice             : 180\n------------------------\nTotal  : 180`)
            }
        }
} 

//------------- short crust pastri function----------------------  
function Choux(){
    let j = Number(prompt(`Do you want Choux Pastry\n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       160`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Choux Pastry\nQuantity         :  1\nPrice             : 160\n------------------------\nTotal  : 160`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Choux Pastry\nQuantity         :  1\nPrice             : 160\n------------------------\nTotal  : 160`)
            }
        }
} 

//------------- Cookies function-----------------------
function cookies() {
        let v = Number(prompt(`select which ever you want\n1.Chocolate chip cookies\n2.Snickerdoodle cookies\n3.Sugar cookies`))
        if (v === 1) {
            chip()
        }
        else if (v === 2) {
            snicker()
        }
        else if (v === 3) {
            sugar()
        }
    }   

    //------------- chocolate chip cookies function----------------------  
function chip(){
    let j = Number(prompt(`Do you want Chocolate chip cookies \n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       120`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Chocolate chip cookies\nQuantity         :  1\nPrice             : 120\n------------------------\nTotal  : 120`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Chocolate chip cookies\nQuantity         :  1\nPrice             : 120\n------------------------\nTotal  : 120`)
            }
        }
} 

 //------------- Snickerdoodle cookies function----------------------  
 function snicker(){
    let j = Number(prompt(`Do you want Snickerdoodle cookies \n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       110`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Snickerdoodle cookies\nQuantity         :  1\nPrice             : 110\n------------------------\nTotal  : 110`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Snickerdoodle cookies\nQuantity         :  1\nPrice             : 110\n------------------------\nTotal  : 110`)
            }
        }
} 

//------------- Sugar cookies function----------------------  
function sugar(){
    let j = Number(prompt(`Do you want Sugar cookies \n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       130`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Sugar cookies\nQuantity         :  1\nPrice             : 110\n------------------------\nTotal  : 110`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Sugar cookies\nQuantity         :  1\nPrice             : 130\n------------------------\nTotal  : 130`)
            }
        }
} 

//------------- Cakes function-----------------------
function cakes() {
        let v = Number(prompt(`select which ever you want\n1.Sponge Cake\n2.Cool Cake\n3.Chiffon Cake`))
        if (v === 1) {
            sponge()
        }
        else if (v === 2) {
            cool()
        }
        else if (v === 3) {
            Chiffon()
        }
    }   
//------------- Sponge Cake function----------------------  
function sponge(){
    let j = Number(prompt(`Do you want Sponge Cake \n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       450`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Sponge Cake\nQuantity         :  1\nPrice             :4500\n------------------------\nTotal  : 450`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Sponge Cake\nQuantity         :  1\nPrice             : 450\n------------------------\nTotal  : 450`)
            }
        }
} 


//------------- Cool cakes function----------------------  
function cool(){
    let j = Number(prompt(`Do you want Cool cake \n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       550`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Cool cake\nQuantity         :  1\nPrice             :550\n------------------------\nTotal  : 550`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Cool cake\nQuantity         :  1\nPrice             : 550\n------------------------\nTotal  : 550`)
            }
        }
} 


//------------- Cool cakes function----------------------  
function Chiffon(){
    let j = Number(prompt(`Do you want Chiffon Cake \n1.YES\n2.NO`))
        if (j === 1) {
            
            alert(`The item details\n--------------------------------\nQuantiti         -     1\nPrice       -       350`)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Chiffon Cake\nQuantity         :  1\nPrice             :350\n------------------------\nTotal  : 350`)
            }
        }
        else {
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
                main(Number(n))
            }
            else {
                alert(`Bill\n-------------------------\nItem Name     :Chiffon Cake\nQuantity         :  1\nPrice             : 350\n------------------------\nTotal  : 350`)
            }

        }
} 



//------------- main function-----------------------
    function main(num) {
        if (num === 1) {
            Pizza()
        }
        else if (num === 2) {
            Icecream()
        }
        else if(num === 3){
            drinks()
        }else if(num === 4){
            Desserts()
        }
    }
    let n = Number(prompt("**Welcome To Pizza Application***\nSelect the What do you want\n1.Pizza\n2.Icecreams\n3.coolDrinks\n4.Desserts"))
    main(Number(n))
