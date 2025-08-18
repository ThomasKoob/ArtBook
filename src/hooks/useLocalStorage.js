// 1) eigener Hook, der einen State UND localStorage synchron hält
import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // 2) initialen Wert aus localStorage lesen (einmalig)
  const [value, setValue] = useState(() => {
    const raw = window.localStorage.getItem(key); // 3) rohen String holen
    if (raw != null) return JSON.parse(raw); // 4) falls vorhanden → JSON zurück
    return initialValue; // 5) sonst Startwert
  });

  useEffect(() => {
    // 6) bei jeder Änderung → zurück in localStorage schreiben
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]; // 7) wie useState
};

export default useLocalStorage;
