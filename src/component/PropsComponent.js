import React from 'react'

function PropsComponent (data){
    return(
        <div>
            <h1>Welcome {data.name} food:{data.food}</h1>
        </div>
    )
}
export default PropsComponent;