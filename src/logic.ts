import type { RuneClient } from "rune-games-sdk/multiplayer"
import {Engine} from "matter-js";

const engine = Engine.create()

export interface GameState {
  count: number
}

type GameActions = NonNullable<unknown>

declare global {
  const Rune: RuneClient<GameState, GameActions>
}


Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  setup: (): GameState => ({
    count: 0
  }),
  actions: {},
  update({game}) {
    console.log('game time secs', Rune.gameTimeInSeconds())
    console.log('game time', Rune.gameTime())
    //
  }
})
