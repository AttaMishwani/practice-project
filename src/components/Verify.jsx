import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckVerification = async () => {
    setChecking(true);
    setError("");

    await auth.currentUser.reload(); // refresh the user
    const user = auth.currentUser;

    if (user?.emailVerified) {
      navigate("/more-info");
    } else {
      setError("Email is not verified yet. Please check again.");
    }

    setChecking(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 px-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">
        Check your email 📬
      </h1>
      <p className="text-gray-600 text-center mb-6">
        We've sent you a verification email. Please verify your account and then
        click the button below.
      </p>
      <button
        onClick={handleCheckVerification}
        disabled={checking}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        {checking ? "Checking..." : "I have verified my email"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Verify;
