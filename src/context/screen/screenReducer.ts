import { ITodo } from "../../MainLayout"
import { CHANGE_SCREEN} from "../types"

const handlers = {
  [CHANGE_SCREEN]: (state: string, payload: string) => payload,
  DEFAULT: (state: string) => state
}

export const screenReducer = (state: any, action: any) => {
  const handler = (handlers as any)[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}
