import { useEffect, useState } from "react"
import { GameState } from "./logic.ts"
import {Stage} from "@pixi/react";

function App() {
  const [game, setGame] = useState<GameState>()
  useEffect(() => {
    Rune.initClient({
      onChange: ({ game }) => {
        setGame(game)
      },
    })
  }, [])

  if (!game) {
    return <div>Loading...</div>
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} options={{background: '#EAEFF2'}}/>
  )
}

export default App
