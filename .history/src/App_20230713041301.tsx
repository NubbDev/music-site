/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from 'react'
import './App.css'


function App() {
  console.log(import.meta.env.VITE_APIKEY)
  const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nuubdev&api_key={key}&format=json'.replace('{key}', import.meta.env.VITE_APIKEY as string)

  useEffect(() => {
    async function fetchData() {
      console.log(url )
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchData().catch((error) => {
      console.log(error)
    })

    // setInterval(() => {})
  }, [url])

  return (
    <>
      
    </>
  )
}

export default App
