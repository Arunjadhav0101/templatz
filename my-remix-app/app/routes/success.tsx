import React, { useEffect, useState } from 'react'
import { google } from 'googleapis';

const apiKey = process.env.REMIX_GMAIL_API_KEY
const clientId = process.env.REMIX_GMAIL_CLIENT_ID
const oauth2Client = new google.auth.OAuth2(
    clientId,
    apiKey,
    'https://remixtutorial-flwf--5173--d20a0a75.local-credentialless.webcontainer.io/success'
  );
async function getTokens(code:string) {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Access Token:', tokens.access_token);
    console.log('Refresh Token:', tokens.refresh_token);
    oauth2Client.setCredentials(tokens);
  }
  
  // You would typically get the code from the query parameter of the redirect URI
  
  
function Success() {
    const [code, setCode] = useState<string | null>(null)
    useEffect(()=>{
        const params= new URL(window.location.href).searchParams
        const codeText = params.get("code")
        setCode(codeText)
        console.log(codeText)
        if(code)
            getTokens(code)
    }, [])
  return (
    <div >Success</div>
  )
}

export default Success