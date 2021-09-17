import { useState, useEffect } from "react";

export function useNow() {
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 100);
        return () => clearInterval(timer)
    })
    return now
}

export function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth, height: window.innerHeight
    });
    useEffect(() => {
        const listener = () => setSize({
            width: window.innerWidth, height: window.innerHeight
        })
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    });
    return size
}
