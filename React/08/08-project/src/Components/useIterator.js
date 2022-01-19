import { useCallback, useState, useMemo } from "react";

export const useIterator = (
    items = [],
    initialIndex = 0
) => {
    const [i, setIndex] = useState(initialIndex);
    console.log(`현재 i 값은: ${i}`);
    console.log(items);

    const prev = useCallback(() => {
        if (i === 0) {
            return setIndex(items.length - 1);
        } else {
            return setIndex(i - 1);
        }
    }, [i]);

    const next = useCallback(() => {
        if (i === items.legnth - 1) return setIndex(0);
        setIndex(i+1);
    }, [i]);

    const item = useMemo(()=> items[i], [i]);
    console.log(item|| items[i]);
}