import {useEffect, useState} from "react";
import Resume from "@/assets/Zhuofan_Zhang_Resume.pdf"

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
};

export const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = Resume;
    link.click();
}

export function preloadImages(imageUrls : string[]) {
    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}

export default useMediaQuery;
