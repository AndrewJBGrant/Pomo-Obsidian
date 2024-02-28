import { useRef, ElementRef, useEffect } from "react";

const Startsound = () => {
const audioRef = useRef<ElementRef<"audio">>(null);

useEffect(() => {
audioRef.current?.play();


}, [])

return <audio ref={audioRef}>playSound </audio>;

};
