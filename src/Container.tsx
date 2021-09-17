import React, { CSSProperties } from "react";
import { useWindowSize } from "./Hooks"

export const Container = (props: { children: JSX.Element[] | JSX.Element | null, style?: CSSProperties }) => {
    const size = useWindowSize();
    const layout = makeBestLayout(size)
    return <div style={{ ...layout, ...props.style, padding: "16px 8px", backgroundColor: "#FFFFFF" }}>
        {props.children}
    </div>
}

const makeBestLayout = (size: { height: number, width: number }): CSSProperties => {
    const { height, width } = size;
    if (height > width) {
        const zoom = calcZoom(width)
        return {
           width: alignTo8px(width * zoom), height: alignTo8px(height * zoom), display: "grid"
        }
    } else {
        return {
            display: "grid", gridTemplateColumns: "repeat(3, 33.3%)" ,width: alignTo8px(width * 0.9)
        }
    }
}

const calcZoom = (width: number) => {
    return (width <= 640 && 0.8) || 0.64
}

const alignTo8px = (responsiveWidth: number) => {
    const fix = responsiveWidth % 8
    return responsiveWidth - fix
}