import React, { useEffect } from 'react'

const Github = () => {

    useEffect(()=>{
        fetch('https://github.com/users/thezohaibkhalid')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
    })
  return (
    <div>Github</div>
  )
}

export default Github