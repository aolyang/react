export type ElementType = any
export type Type = any
export type Key = any
export type Ref = any
export type Props = any

export interface IReactElement {
    $$typeof: symbol | number
    $$impl: "aolyang"
    type: ElementType
    key: Key
    props: Props
    ref: Ref
}
