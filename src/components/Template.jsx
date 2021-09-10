const Template= ({templates, varName}) =>{
    return(
        <div>
        {templates.map(template=> (  
            <div key={template.id} className="template" onClick = {() => {
                varName(template)
            }}
                
            >
                <div 
                    style={{backgroundImage: `url(${template.url})`}} 
                    className="image">
                </div> 
            </div>

        ))
        }
        </div>
    )
}

export default Template;