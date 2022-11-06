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
        borderTop: "16px solid #ec407a", borderBottom: "16px solid #ec407a", boxShadow: "0 0 16px grey", borderRadius: 4, backgroundImage: "url(/doudou/otter.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", backgroundSize: "44px 44px"
      }}>
        <Avatar imageUrl="/doudou/goose.png" />
        <Days now={now} />
        <Anniversary now={now} />
      </Container>
    </div>
  )
}

export default App
