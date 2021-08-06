import React,{useEffect, useState} from "react";
import firebase from '../Components/firebase'
import Drinks from "../Common/Drinks";

export default function Klient() {
    const[drinkList,setDrinkList]=useState({})
    const[isVoteOpen,setIsVoteOpen]=useState(false)
    const[wait,setWait]=useState('Czekaj na party')
    const[unclickable,setUnclickable]=useState('unclickable')
    const drinksRef=firebase.database().ref('drinks')
    const userRef=firebase.database().ref('user/Party')

    useEffect(()=>{
        userRef.on('value',(snapshot)=>{
            handleChooseDrink(snapshot.val()) 
                   
            drinksRef.on('value',(snapshot)=>{
                setDrinkList(snapshot.val())
            })
        })
    },[])

    function handleChooseDrink(state){
        if(state){setWait('Wybierz Drinka');setUnclickable('')}
        else{setWait('Czekaj na party');setUnclickable('unclickable');setIsVoteOpen(false)}
    }

    return(<>
        <section className='client_section'>
            <button className={`client_btn ${unclickable}`} onClick={()=>setIsVoteOpen(true)}>{wait}</button>
            {isVoteOpen&&<Drinks  drinkData={drinkList} startRender={isVoteOpen} parent='client'/>}
        </section>
    </>)
}