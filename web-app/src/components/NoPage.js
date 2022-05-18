import React from 'react'

export default function NoPage(){
    const noPage ={
        textAlign : 'center',
        margin : '50px'
    }
    return(
        <div style ={noPage}>
            <img src={process.env.PUBLIC_URL+'/404.png'}   alt="" />
        </div>
    )
    
}