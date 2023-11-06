import React from 'react'
import { Container } from './Container'
import Avatar from './Avatar'
import { useNow } from './Hooks'
import { Anniversary, Days } from './Timer'

function App() {
  const fullScreen = {height: "100vh", width: "100vw"}
  const now = useNow();
  return (
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(/doudou/cherryblossom.jpg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", ...fullScreen}}>
      <Container style={{
        position: "relative",
        borderTop: "16px solid #ec407a", borderBottom: "16px solid #ec407a", boxShadow: "0 0 16px grey", borderRadius: 4,
      }}>
        <Avatar imageUrl="/doudou/goose.png" />
        <Days now={now} />
        <Anniversary now={now} />
        <img src="/doudou/otter.jpg" width={44} height={44} style={{objectFit: "contain", position: "absolute", left: 0, bottom: 0}}></img>
        <img src="/doudou/collaboration.gif" width={44} height={44} style={{objectFit: "contain", position: "absolute", right: 0, bottom: 0}}></img>
      </Container>
    </div>
  )
}

export default App
