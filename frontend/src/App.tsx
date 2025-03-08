import { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { generateUsername } from "unique-username-generator";
import cn from "classnames";
import { SadIcon, SmilyIcon } from "./assets";

export type DestinationType = {
  id: string;
  clues: string[];
  destination_id: string;
  options: string[];
};

export type CurrentRespType = {
  correct: boolean;
  funFact: string;
  score: number;
};

const App = () => {
  const [destination, setDestination] = useState<DestinationType | null>(null);
  const [userName, setUserName] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [currentResp, setCurrentResp] = useState<CurrentRespType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/destination");
        setDestination(data);
      } catch (error) {
        setError("Error fetching destination");
      }
      setUserName(generateUsername());
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const submitAnswer = async (selectedAnswer: string) => {
    if (!destination) return;
    setIsLoading(true);

    try {
      const res = await axios.post<CurrentRespType>(
        "http://localhost:5000/api/answer",
        {
          username: userName,
          destination_id: destination.destination_id,
          answer: selectedAnswer,
        }
      );
      setCurrentResp(res.data);
      setShowResult(true);
    } catch (error) {
      setError("Error submitting answer");
    } finally {
      setIsLoading(false);
    }
  };

  const resetGame = async () => {
    setUserName(generateUsername());
    setCurrentResp((prev) => (prev ? { ...prev, score: 0 } : null));
    await handleNextAction();
  };

  const handleNextAction = async () => {
    setIsLoading(true);
    setCurrentResp((prev) => (prev ? { ...prev, correct: false, funFact: '' } : null));
    setShowResult(false);
    try {
      const { data } = await axios.get("http://localhost:5000/api/destination");
      setDestination(data);
    } catch (error) {
      setError("Error fetching destination");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white p-6">
      {isLoading && <p className="text-xl font-semibold animate-pulse">Loading...</p>}
      {showResult && currentResp?.correct && <Confetti />}

      {/* User Info Section */}
      <div className="flex justify-between items-center w-full max-w-lg mb-6 bg-white text-gray-800 px-6 py-4 rounded-xl shadow-md">
        <p className="text-lg font-semibold">
          👤 Username: <span className="text-blue-600 font-bold">{userName}</span>
        </p>
        <p className="text-lg font-semibold">
          🏆 Score:{" "}
          <span className="bg-green-500 text-white px-3 py-1 rounded-lg font-bold">{currentResp?.score || 0}</span>
        </p>
      </div>

      {/* Game Box */}
      <div
        className={cn(
          "bg-white text-gray-800 rounded-xl shadow-lg p-8 max-w-lg w-full text-center",
          {
            "opacity-50 animate-pulse cursor-not-allowed": isLoading,
          }
        )}
      >
        <h1 className="text-3xl font-bold mb-4">🌍 Guess the Destination!</h1>
        {error && <p className="text-red-600 font-semibold">{error}</p>}
        {destination && (
          <div className="mb-6 flex flex-col items-start">
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

        {/* Result Messages */}
        {!currentResp?.correct && showResult && (
          <div className="flex flex-col items-center gap-2">
            <SadIcon className="h-16" />
            <span className="text-lg font-medium text-red-600">Wrong Answer</span>
          </div>
        )}

        {currentResp?.correct && showResult && (
          <div className="flex flex-col items-center gap-2">
            <SmilyIcon className="h-16" />
            <span className="text-lg font-medium text-green-800">Hurray! Correct Answer</span>
          </div>
        )}

        {showResult && <p className="text-lg font-semibold text-green-600">{currentResp?.funFact}</p>}

        {/* Action Buttons */}
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