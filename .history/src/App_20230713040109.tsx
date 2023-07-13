/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './App.css'


function App() {

  const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nuubdev&api_key={key}&format=json'.replace('{key}', process.env.apikey as string)

  

  return (
    <>
      
    </>
  )
}

export default App
