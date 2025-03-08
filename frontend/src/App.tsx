import { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { generateUsername } from "unique-username-generator";
import cn from "classnames";
import { SadIcon } from "./assets";

export type DestinationType = {
  id: string;
  clues: string[];
  destination_id: string;
  options: string[];
};

const App = () => {
  const [destination, setDestination] = useState<DestinationType | null>(null);
  const [userName, setUserName] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [funFact, setFunFact] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchDestination();
      setUserName(generateUsername());
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const fetchDestination = async () => {
    const res = await axios.get("http://localhost:5000/api/destination");
    setDestination(res.data);
  };

  const submitAnswer = async (selectedAnswer: string) => {
    if (!destination) return;

    const res = await axios.post("http://localhost:5000/api/answer", {
      username: userName,
      destination_id: destination.destination_id,
      answer: selectedAnswer,
    });

    setIsCorrect(res.data.correct);
    setFunFact(res.data.funFact);
    setShowResult(true);
  };

  const resetGame = async () => {
    setUserName(generateUsername());
    await handleNextAction();
    // await fetchDestination();
  };

  const handleNextAction = async () => {
    setIsLoading(true);
    setIsCorrect(false);
    setShowResult(false);
    setFunFact("");
    await fetchDestination();
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white p-6">
      {isLoading && <p className="text-xl font-semibold animate-pulse">Loading...</p>}
      {showResult && isCorrect && <Confetti />}

      <div className={cn("bg-white text-gray-800 rounded-xl shadow-lg p-8 max-w-lg w-full text-center ", {
        "opacity-50 animate-pulse cursor-not-allowed": isLoading
      })}>
        <h1 className="text-3xl font-bold mb-4">🌍 Guess the Destination!</h1>

        {destination && (
          <div className="mb-6">
            <p className="text-lg font-medium">🕵️ Clue 1: {destination.clues[0]}</p>
            <p className="text-lg font-medium">🕵️ Clue 2: {destination.clues[1]}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          {destination?.options?.map((option) => (
            <button
              key={option}
              onClick={() => submitAnswer(option)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              {option}
            </button>
          ))}
        </div>

        <SadIcon className="h-16" />
        {showResult && <p className="text-lg font-semibold text-green-600">{funFact}</p>}

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={resetGame}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-all duration-300"
          >
            🔄 Reset
          </button>
          <button
            onClick={handleNextAction}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300"
          >
            ➡️ Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
