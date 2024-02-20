"use client";
import { useState, useEffect } from 'react';


const inBrowser = () => typeof window !== "undefined";




export default function ScrollTopButton() {
const [visible, setVisible] = useState(false)


function scrollTop() {
if (!inBrowser()) return;
window.scrollTo({ top: 0, behavior: "smooth"})
}

  const handleScroll = () => {

    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

return(

  <button className={`... scrollToTopButton ${visible ? 'visible' : ''}`}
        onClick={scrollTop}>TOP</button>
)



};
