import { useCallback, useEffect, useState } from "react";

export default function useSize() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    const setSizes = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [setWidth, setHeight]);

    useEffect(() => {
        window.addEventListener("resize", setSizes);

        return () => {
            window.removeEventListener("resize", setSizes);
        }
    }, [setSizes]);

    return [width, height] as const;
}