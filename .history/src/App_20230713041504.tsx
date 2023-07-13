/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from 'react'
import './App.css'


function App() {
  const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nuubdev&api_key={key}&format=json'.replace('{key}', import.meta.env.VITE_APIKEY as string)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
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
