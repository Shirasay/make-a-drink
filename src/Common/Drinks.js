import React, { useEffect, useState } from "react"
import firebase from "firebase"

function Drinks() {
    
    const [drinkList, setDrinkList]=useState({})
    const [drinkName, setDrinkName]=useState([])
    const [drinkIngredients, setDrinkIngredients]=useState([])
    const [drinkIngredientQuantity, setDrinkIngredientQuantity]=useState([])
    const [unclickable,setUnclickable]=useState('')
    const drinksRef = firebase.database().ref('drinks')

    // useEffect(()=>{
    //     drinksRef.on('value',(snapshot)=>{
    //         setDrinkList(snapshot.val())
    //     })
    // },[])

    // function showDrinks() {
    //     setUnclickable('unclickable')
    //     for (let index in drinkList) {
    //         if(drinkList.hasOwnProperty(index)) {
    //             let recipie=[]
    //             let quantity=[]
    //             setDrinkName(prevState=>[...prevState, drinkList[index].Name])
    //             for(let ingredient in drinkList[index].ingredients){
    //                 if(drinkList[index].ingredients.hasOwnProperty(ingredient)){
    //                     recipie.push(ingredient)
    //                     quantity.push(drinkList[index].ingredients[ingredient])
    //                 }
    //             }
    //             setDrinkIngredientQuantity(prevState=>[...prevState, quantity])
    //             setDrinkIngredients(prevState=>[...prevState, recipie])
    //         }
    //     }
    // }

    

    // return<>
    //     <button className={`client_btn ${unclickable}`} onClick={showDrinks}>Wybierz Drinka</button>
    //     <div className='drink_menu' onLoad={showDrinks}>
    //     {
    //         drinkName.map((Name,whichDrink) => (<>
    //                 <h1>{Name}</h1>
    //                 <ul className='ingredients_list'>
    //                     {
    //                         drinkIngredients[whichDrink].map((ingredient,whichIngredient)=>
    //                         <li className='ingredient' key={whichIngredient}>{drinkIngredientQuantity[whichDrink][whichIngredient]}ml of {ingredient}</li>)
    //                     }
    //                 </ul>
    //         </>))
    //     }
    //     </div>
    // </>
}
export default Drinks