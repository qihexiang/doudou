import React from 'react'
import { Container } from './Container'
import Avatar from './Avatar'
import { useNow } from './Hooks'
import { Anniversary, Days } from './Timer'

function App() {
  const fullScreen = {height: "100vh", width: "100vw"}
  const now = useNow();
  return (
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#eff0f1", ...fullScreen}}>
      <Container style={{
        borderTop: "16px solid #ec407a", boxShadow: "0 0 16px silver"
      }}>
        <Avatar imageUrl="/doudou/doudou.png" />
        <Days now={now} />
        <Anniversary now={now} />
      </Container>
    </div>
  )
}

export default App
