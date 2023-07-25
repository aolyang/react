import type {
    ElementType,
    IReactElement,
    Key,
    Props,
    Ref,
    Type
} from "shared/react-types"

import { REACT_ELEMENT_TYPE } from "shared/react-symbols"

const createReactElement = (
    type: Type,
    key: Key,
    ref: Ref,
    props: Props
): IReactElement => {
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props,
        $$impl: "aolyang"
    }
}

export const jsx = (type: ElementType, config: any, ...children: any[]) => {
    let key: Key = null
    let ref: Ref = null
    const props: Props = {}
    for (const prop in config) {
        const value = config[props]
        if (prop === "key") {
            if (value !== undefined) {
                key = String(value)
            }
            continue
        }
        if (prop === "ref") {
            if (value !== undefined) {
                ref = value
            }
            continue
        }
        if (Object.prototype.hasOwnProperty.call(config, prop)) {
            props[props] = value
        }
    }
    const childrenLen = children.length
    if (childrenLen) {
        if (childrenLen === 1) {
            props.children = children[1]
        } else {
            props.children = children
        }
    }
    return createReactElement(type, key, ref, props)
}

export const jsxDEV = jsx
