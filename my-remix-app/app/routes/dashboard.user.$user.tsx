import { useParams } from '@remix-run/react'
import { useEffect } from 'react';
function DynamicUser() {
    const {user} = useParams();
    console.log(user);
    useEffect(()=>{
      const data = fetch("./api/users")
      data.then((data)=>{
        return data.json()
      }).then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.log(err, "while fetching")
      })
    }, [])
  return (
    <div>DynamicUser : {user}</div>
  )
}

export default DynamicUser