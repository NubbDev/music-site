/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from 'react'
import './App.css'

export interface Song {

}


function App() {
  const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nuubdev&api_key={key}&format=json'.replace('{key}', import.meta.env.VITE_APIKEY as string)

  const [currentSong, setCurrentSong] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      const firstTrack = data.recenttracks.track[0]
      console.log(firstTrack)


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
