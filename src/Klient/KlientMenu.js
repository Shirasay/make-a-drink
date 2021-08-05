import React,{useEffect, useState} from "react";
import firebase from '../Components/firebase'

export default function Klient() {
    
    const [wait, setWait]=useState('Czekaj na party')
    const [invisible,setInvisible]=useState('invisible')
    const [unclickable,setUnclickable]=useState('unclickable')
    const [drinkList, setDrinkList]=useState({})
    const [drinkName, setDrinkName]=useState([])
    const [drinkIngredients, setDrinkIngredients]=useState([])
    const [drinkIngredientQuantity, setDrinkIngredientQuantity]=useState([])
    const drinksRef = firebase.database().ref('drinks')
    const userRef = firebase.database().ref('user')

    function handleChooseDrink(state){
        if(state){setWait('Wybierz Drinka');setUnclickable('')}
        else{setWait('Czekaj na party');setUnclickable('unclickable')}

    }

    useEffect(()=>{
        userRef.on('value',(snapshot)=>{
            handleChooseDrink(snapshot.val().Party)
        })
        drinksRef.on('value',(snapshot)=>{
            setDrinkList(snapshot.val())
        })
    },[])


    function showDrinks() {
        setInvisible('')
        for (let index in drinkList) {
            if(drinkList.hasOwnProperty(index)) {
                let recipie=[]
                let quantity=[]
                setDrinkName(prevState=>[...prevState, drinkList[index].Name])
                for(let ingredient in drinkList[index].ingredients){
                    if(drinkList[index].ingredients.hasOwnProperty(ingredient)){
                        recipie.push(ingredient)
                        quantity.push(drinkList[index].ingredients[ingredient])
                    }
                }
                setDrinkIngredientQuantity(prevState=>[...prevState, quantity])
                setDrinkIngredients(prevState=>[...prevState, recipie])
            }
        }
    }

    function changeQuantity(id){
        const quantityRef = firebase.database().refFromURL(`https://get-me-a-drink-default-rtdb.europe-west1.firebasedatabase.app/drinks/${id}/quantity`)
        let howMany = null
        quantityRef.on('value',(snapshot)=>{
            howMany=snapshot.val()
        })
            quantityRef.set(howMany+1)
    }
    console.log(drinkList);
    return<>
        <section className='client_section'>
            <button className={`client_btn ${unclickable}`} onClick={showDrinks}>{wait}</button>
            <div className={`drink_menu ${invisible}`}>
            {
                drinkName.map((Name,whichDrink) => (
                    <div className='drink_info' onClick={()=>changeQuantity(whichDrink)}>
                        <h1>{Name}</h1>
                        <ul className='ingredients_list'>
                            {
                                drinkIngredients[whichDrink].map((ingredient,whichIngredient)=>
                                <li className='ingredient' key={whichIngredient}>{drinkIngredientQuantity[whichDrink][whichIngredient]}ml of {ingredient}</li>)
                            }
                        </ul>
                    </div>
                ))
            }
            </div>
        </section>
    </>
}