// create your App component here
import React, { useEffect ,useState} from "react"



export default function App(){
    const [image,setimage]=useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>setimage(data.message))
    },[])
    if(!image){
        return <p>Loading ......</p>
    }
    return (
        <img src={image}alt="A Random Dog"></img>
    )
}
