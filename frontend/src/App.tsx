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
  username?: string;
};

const fetchDestination = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/destination");
    return data;
  } catch (error) {
    throw new Error("Error fetching destination");
  }
};

const registerUser = async (userName: string) => {
  try {
    const res = await axios.post("http://localhost:5000/api/register", { username: userName });
    console.log("User registered successfully:", res);

    return res.data.user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

const App = () => {
  const [destination, setDestination] = useState<DestinationType | null>(null);
  const [userName, setUserName] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [currentResp, setCurrentResp] = useState<CurrentRespType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [friendData, setFriendData] = useState<{ username: string; score: number } | null>(null);

  useEffect(() => {
    const initializeGame = async () => {
      try {
        // Fetch destination data
        const destinationData = await fetchDestination();
        setDestination(destinationData);

        // Generate and set a new username
        const newUserName = generateUsername();
        setUserName(newUserName);

        // Register the new user and update their score
        const user = await registerUser(newUserName);
        setCurrentResp((prev) => (prev ? { ...prev, ...user } : null));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    initializeGame();
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
    setFriendData(null);

    // Removeing the invite parameter from the URL
    const newUrl = window.location.origin + window.location.pathname;
    window.history.pushState({}, document.title, newUrl);

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

  const handleInvite = () => {
    const inviteUrl = `${window.location.origin}/?invite=${userName}`;
    const message = `🚀 I scored ${currentResp?.score || 0} in The Globetrotter Challenge! Can you beat me? 🌍 Play now: ${inviteUrl}`;

    // Open WhatsApp Share
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const invitee = params.get("invite");

    if (invitee) {
      axios.get(`http://localhost:5000/api/user/${invitee}`)
        .then(res => {
          setFriendData({ username: invitee, score: res.data.user.score });
        })
        .catch(err => console.error(err));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-6">
      {isLoading && <p className="text-xl font-semibold animate-pulse">Loading...</p>}
      {showResult && currentResp?.correct && <Confetti numberOfPieces={400} recycle={false} />}

      {/* User Info Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-lg bg-white text-gray-800 px-6 py-4 rounded-2xl shadow-lg border border-gray-300 gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-lg font-semibold">
            👤 Username: <span className="text-blue-600 font-bold">{userName}</span>
          </p>
          <p className="text-lg font-semibold">
            🏆 Score:{" "}
            <span className="bg-green-500 text-white px-3 py-1 rounded-lg font-bold shadow-md transition-all duration-300 hover:shadow-xl">
              {currentResp?.score || 0}
            </span>
          </p>
        </div>

        {friendData && (
          <div className="flex flex-col items-center sm:items-start bg-yellow-200 text-gray-900 px-4 py-2 rounded-xl shadow-md">
            <p className="text-lg font-semibold">
              👥 Friend's Score: <span className="text-green-600 font-bold">{friendData.score}</span>
            </p>
            <p className="text-md">Challenged by <span className="font-bold">{friendData.username}</span>!</p>
          </div>
        )}
      </div>


      {/* Challenge a Friend */}
      <button
        onClick={handleInvite}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 my-4 font-semibold"
      >
        📩 Challenge a Friend
      </button>

      {/* Game Box */}
      <div className={cn("bg-white text-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center border border-gray-200", {
        "opacity-50 animate-pulse cursor-not-allowed": isLoading,

      })}>
        <div className="flex items-center justify-center gap-2 mb-6 text-4xl">
          🌍
          <h1 className=" font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Guess the Destination!
          </h1>
        </div>

        {error && <p className="text-red-600 font-semibold">{error}</p>}

        {destination && (
          <div className="my-6 flex flex-col text-lg">
            <p className="font-medium ">🕵️ Clue 1: {destination.clues[0]}</p>
            <p className="font-medium ">🕵️ Clue 2: {destination.clues[1]}</p>
          </div>
        )}

        {/* Answer Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {destination?.options?.map((option) => (
            <button
              key={option}
              disabled={isLoading}
              onClick={() => submitAnswer(option)}
              className="bg-blue-500 text-white py-3 px-5 rounded-xl shadow-md hover:scale-105 hover:bg-blue-600 transition-all duration-300 font-medium"
            >
              {option}
            </button>
          ))}
        </div>

        {/* Correct / Wrong Message */}
        {showResult && (
          <div className="flex flex-col items-center gap-3 mt-4">
            {currentResp?.correct ? (
              <>
                <SmilyIcon className="h-16" />
                <span className="text-lg font-bold text-green-600">🎉 Hurray! Correct Answer</span>
              </>
            ) : (
              <>
                <SadIcon className="h-16" />
                <span className="text-lg font-bold text-red-500">❌ Wrong Answer</span>
              </>
            )}
            <p className="text-md text-gray-700 italic">{currentResp?.funFact}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={resetGame}
            className="bg-gray-300 text-gray-700 py-3 px-6 rounded-xl shadow-md hover:bg-gray-400 hover:scale-105 transition-all duration-300 font-semibold"
          >
            🔄 Reset
          </button>
          <button
            onClick={handleNextAction}
            className="bg-green-500 text-white py-3 px-6 rounded-xl shadow-md hover:scale-105 hover:bg-green-600 transition-all duration-300 font-semibold"
          >
            ➡️ Next
          </button>
        </div>
      </div>
    </div>

  );
};

export default App;