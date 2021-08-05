import React, {useState} from "react"
import Drinks from '../Common/Drinks'
import Questionnarie from './Questionnarie'
import Voting from './Voting'

export default function Bartender() {

    const [isVoting, setIsVoting]=useState(false)
    const [isQuestionnarie, setIsQuestionnarie]=useState(false)
    const [isDrinks, setIsDrinks]=useState(false)

    
    return<>
        {isVoting || isQuestionnarie || isDrinks ? <section className='barman_section'>
        {isVoting && <Voting/>}
        {isQuestionnarie && <Questionnarie/>}
        {isDrinks && <Drinks/>}
        </section> : <div className='bartender_containder'>
            <button className='bartender_menu' onClick={()=>setIsVoting(true)}>Głosowanie</button>
            <button className='bartender_menu' onClick={()=>setIsQuestionnarie(true)}>Ankieta</button>
            <button className='bartender_menu' onClick={()=>setIsDrinks(true)}>Lista Drinów</button>
        </div> }
    </>
}