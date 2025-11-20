import React, { useEffect, useState } from "react";
import { IoEarth } from "react-icons/io5";

export default function IndiaClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      // Format time for India (IST)
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const istTime = new Intl.DateTimeFormat("en-GB", options).format(now);
      setTime(istTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-zinc-50">
       
      INDIA_{time}
    </div>
  );
}
