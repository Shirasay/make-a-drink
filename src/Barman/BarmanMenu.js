import React, {useState} from "react"
import Drinks from './Drinks'
import Questionnarie from './Questionnarie'
import Voting from './Voting'

function Bartender() {
    
    return<>
        <div className='bartender_containder'>
            <button className='bartender_menu'>Głosowanie</button>
            <button className='bartender_menu'>Ankieta</button>
            <button className='bartender_menu'>Lista Drinów</button>
        </div>
    </>
}

export default Bartender;