import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUsersAnswers] = useState([]);

  return <p>Qurrently active Question</p>;
}
