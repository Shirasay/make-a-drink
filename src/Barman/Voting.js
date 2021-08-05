import {useState} from "react"
import firebase from '../Components/firebase'
import axios from "axios"

function Voting(){

    const createParty=()=>{
        axios.patch(`https://get-me-a-drink-default-rtdb.europe-west1.firebasedatabase.app/Party.json`,{
            open: true,
        })
        .then(response=> {
            console.log(response.data)
        })
            .catch(error => {
              console.log(error);
            });


}
const db = firebase.firestore()
db.collection('users').get().then((snapshot)=>{
snapshot.docs.forEach(doc =>{
    console.log(doc.data())
})
})
    return<>
        <div className='voting_container'>
            <button onClick={createParty}>Ustaw głosowanie</button>
            <button className='invisible'>Zakończ głosowanie</button>
        </div>
    </>
}

export default Voting