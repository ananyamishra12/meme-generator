import { useState } from "react";
const Meme = ({meme, setMeme}) => {
    const [form, setForm]= useState({
        template_id: meme.id,
        username: "ananya12",
        password: "ananya12",
        boxes: []
    });
    const generateMeme= () => {
        let url= `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index)=> {
            url+=`&boxes[${index}][text]=${box.text}`;
        })
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            setMeme({...meme, url: data.data.url})
        })
    }
    
    return (
        <div className="meme">            
                <img src={meme.url} alt="display the selected meme" className="memeImg"></img>
                <div className= "caption">
                    {[...Array(meme.box_count)].map((_, index)=>(
                        
                        <input key={index} type="text" placeholder={`Meme Caption(${index+1})`} className="captionBox" 
                        onChange={(e)=>{
                            const newBoxes= form.boxes;
                            newBoxes[index]={text: e.target.value}
                            setForm({...form, boxes: newBoxes})
                        }}/>
                    )
                        
                    )}
                </div>
                <div className="buttonContainer">
                    <button className="button" onClick={(generateMeme)}>
                        Generate Meme
                    </button>
                    <button className="button" onClick={()=>{
                        setMeme(null)
                    }}>
                        Choose Template
                    </button>
                </div>
            
        </div>
        
    );
};

export default Meme;