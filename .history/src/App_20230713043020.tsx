/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from 'react'
import './App.css'

export interface Song {
  mbid: string
  url: string
  name: string
  streamable: string
  artist: {
    "#text": string
    mbid: string
  }
  album: {
    mbid: string
    "#text": string
  }
  image: {
    "#text": string
    size: "small" | "medium" | "large" | "extralarge"
  }[]
  date: {
    "#text": string
    uts: string
  }
}
export interface Tracks {
  recenttracks: {
    "@attr": {
      user: string
      page: string
      perPage: string
      totalPages: string
      total: string
    }
    track: Song[]
  }
}


function App() {
  const user = window.location.pathname.split('/')[1]
  const key = import.meta.env.VITE_APIKEY as string
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key${key}&format=json`

  const [currentSong, setCurrentSong] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data:Tracks = await response.json()
      const firstTrack = data.recenttracks.track[0]
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
