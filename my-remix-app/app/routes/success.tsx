import  { useEffect, useState } from 'react'
function Success() {
    const [code, setCode] = useState<string | null>(null)
    useEffect(()=>{
        const params= new URL(window.location.href).searchParams
        const codeText = params.get("code")
        setCode(codeText)
        console.log(codeText)
    }, [])
  return (
    <div >Success {code} </div>
  )
}

export default Success