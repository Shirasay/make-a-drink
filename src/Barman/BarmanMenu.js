import React, {useEffect, useState} from "react"
import firebase from "firebase"
import Drinks from "../Common/Drinks"

export default function Bartender() {

    const[drinkList,setDrinkList]=useState({})
    const[isPartyOpen,setIsPartyOpen]=useState(false)
    const[isCheckDrinks,setIsCheckDrinks]=useState(false)
    const partyRef = firebase.database().ref('user/Party')
    const drinkRef = firebase.database().ref('drinks')

    useEffect(()=>{
        partyRef.on('value',(snapshot)=>{
            setIsPartyOpen(snapshot.val())
        })
        drinkRef.on('value',(snapshot)=>{
            setDrinkList(snapshot.val())
        })
    },[])

    function handleParty() {
        if(isPartyOpen){partyRef.set(false);setIsCheckDrinks(true)}
        else{partyRef.set(true)
            drinkRef.on('value',(snapshot)=>{
                for (const drink in snapshot.val()){
                    console.log(drink)
                        firebase.database().ref(`drinks/${drink}/quantity`).set(0)
                }        
            }) 
            window.location.reload()
         }

    }

    function addDrink() {
        console.log('dasda')        
    }
    
    return<>
    <section className='bartender_section'>
            <button className='bartender_btn' onClick={handleParty}>{isPartyOpen?'Stop Party':'Start Party'}</button>
            <a className='bartender_btn' onClick={addDrink}>Dodaj Drink</a>
            {isCheckDrinks&&<Drinks drinkData={drinkList} startRender={isCheckDrinks} parent='bartender'/>}
    </section>
    </>
}