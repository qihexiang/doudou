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
        const bestWidth = getBestWidth(width)
        return {
           width: bestWidth, maxHeight: "90%", display: "grid"
        }
    } else {
        return {
            display: "grid", gridTemplateColumns: "repeat(3, 33.3%)" ,width: alignTo8px(width * 0.9), maxWidth: 960, maxHeight: 640, flexDirection: "row"
        }
    }
}

const getBestWidth = (windowWidth: number) => {
    const responsiveWidth =
        (windowWidth >= 1440 && windowWidth * 0.2) ||
        (windowWidth >= 1024 && windowWidth * 0.3) ||
        (windowWidth >= 768 && windowWidth * 0.6) ||
        (windowWidth * 0.8)
    return alignTo8px(responsiveWidth)
}

const alignTo8px = (responsiveWidth: number) => {
    const fix = responsiveWidth % 8
    return responsiveWidth - fix
}