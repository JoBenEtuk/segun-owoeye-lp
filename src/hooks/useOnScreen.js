import { useEffect, useState } from 'react'

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false);
    const current = ref.current;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setIntersecting(entry.isIntersecting) }
        );
        if (current) {
            observer.observe(current);
        }
        return () => { observer.disconnect() };
    }, [current]);
    return isIntersecting;
}
