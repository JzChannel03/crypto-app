import { useState, useEffect } from "react";

interface ITimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function SalesWithTimer() {
  const calculateTimeLeft = (): ITimeLeft => {
    const targetDate = new Date("2024-10-20T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [time, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="shadow-xl h-40 w-full p-3 flex flex-col gap-1 justify-center border-2 border-dashed border-yellow-400 rounded-2xl bg-black text-white">
      <div className="w-full text-sm">
        {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
      </div>
      <div className="w-full">
        <span className="text-bold text-lg">
          Take advantage of up to 10% off!
        </span>
        <p className="text-sm">
          Buy $1000 or more of your favorite cryptocurrency and save big.{" "}
          <span className="text-gray-500 "> (Valid until 10/20/2024)</span>
        </p>
      </div>
    </div>
  );
}

export default SalesWithTimer;
