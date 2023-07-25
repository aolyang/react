import type { ReactElement } from "./jsx"
import { defaultElement } from "./jsx"
import { add } from "shared"

export const element: ReactElement = {
    $$typeof: "node"
}
const addValue = add(1, 2)

export { defaultElement, addValue }
