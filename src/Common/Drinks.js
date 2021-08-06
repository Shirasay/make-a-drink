import React, {useState } from "react"
import firebase from "firebase"

export default function Drinks({drinkData, startRender,parent}) {

    const[drinkName,setDrinkName]=useState([])
    const[drinkIngredients,setDrinkIngredients]=useState([])
    const[drinkIngredientQuantity,setDrinkIngredientQuantity]=useState([])
    const[wasUsed,setWasUsed]=useState(false)
    const[chosenDrink,setChosenDrink]=useState('')
    const[quantityURL,setQuantityURL]=useState('')
    
    function goBack(){
        window.location.reload()
    }


    function showDrinks(){
            for (let index in drinkData) {
                if(drinkData.hasOwnProperty(index)) {
                    let recipie=[]
                    let quantity=[]
                    setDrinkName(prevState=>[...prevState, drinkData[index].Name])
                    for(let ingredient in drinkData[index].ingredients){
                        if(drinkData[index].ingredients.hasOwnProperty(ingredient)){
                            recipie.push(ingredient)
                            quantity.push(drinkData[index].ingredients[ingredient])
                        }
                    }
                    setDrinkIngredientQuantity(prevState=>[...prevState, quantity])
                    setDrinkIngredients(prevState=>[...prevState, recipie])
                }
                setWasUsed(true)
            }
    }

    function changedMyMind(){
        if(chosenDrink==='chosendrink'){setChosenDrink('')
            let howMany = null
            quantityURL.on('value',(snapshot)=>{
                howMany=snapshot.val()
            })
            quantityURL.set(howMany-1)}
    }


    function changeQuantity(id){
        if(parent==='client'&&!chosenDrink){
            const quantityRef = firebase.database().refFromURL(`https://get-me-a-drink-default-rtdb.europe-west1.firebasedatabase.app/drinks/${id}/quantity`)
            setQuantityURL(quantityRef)
            let howMany = null
            quantityRef.on('value',(snapshot)=>{
                howMany=snapshot.val()
            })
            quantityRef.set(howMany+1)
            setChosenDrink('chosendrink')}
    }


    if(startRender&&!wasUsed){showDrinks()}
    return<>
        <section className='drink_section'>
            {drinkName.map((Name,whichDrink) => (
                <div className='drink_info'onClick={()=>changeQuantity(whichDrink)}>
                   <div>{parent==='bartender'&&<p>{drinkData[whichDrink].quantity}x</p>}<p>{Name}</p></div>
                    <ul className='ingredients_list'>
                        {
                            drinkIngredients[whichDrink].map((ingredient,whichIngredient)=>
                            parent==='client'?<li className='ingredient' key={whichIngredient}>{drinkIngredientQuantity[whichDrink][whichIngredient]}ml of {ingredient}</li>:
                            <li className='ingredient' key={whichIngredient}>{drinkIngredientQuantity[whichDrink][whichIngredient]*drinkData[whichDrink].quantity}ml of {ingredient}</li>)
                        }
                    </ul>
                </div>
            ))}
            {parent==='bartender'&&<button className='barman_btn' onClick={goBack}>Powróć</button>}
            <div className={`drink_curtain ${chosenDrink}`} onClick={changedMyMind}></div>
        </section>
    </>

}