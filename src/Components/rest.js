import axios from "axios"

export default function Rest(API,method,data){
    axios.patch(API,{
            data,
        })
        .then(response=> {
            console.log(response.data)
        })
            .catch(error => {
              console.log(error);
            });


}


