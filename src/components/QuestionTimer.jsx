import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("settimeout");
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log("setinterval");

    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
