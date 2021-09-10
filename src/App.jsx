import { useState, useEffect } from "react";
import "./App.css";
import Template from "./components/Template"
import Meme from "./components/Meme";

function App(){
    const [templates, setTemplates]= useState([]);
    const [meme, setMeme]= useState(null);
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes") //fetching API
        .then(res=>res.json()) 
        .then((data)=>{
            setTemplates(data.data.memes); //displaying meme image through api
        })
    }, []) //empty array[] means that useEffect is rendered only once which is when we refersh. If we pass something in array then when that component is rendered, useEffect will be rendered.
    return (
        <div className="App">
            <h1>Meme Page</h1>
            
            {meme === null ? <Template templates={templates} varName= {setMeme}/> : <Meme meme={meme} setMeme={setMeme}/>}
            
        </div>
    )
}

export default App;