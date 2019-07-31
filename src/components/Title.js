import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="ui center aligned header text-title" style={{marginTop:'2rem',color:'#2a2a72',fontStyle:'italic',fontSize:'5em',fontFamily:'Permanent Market'}}>
            
            <div style={{fontStye:'italic',textTransform:'capitalize'}}>
               {name}&nbsp;{title}
                

            </div>
           
        </div>
    )
}
