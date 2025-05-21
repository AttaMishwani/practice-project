import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CheckVerification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          clearInterval(interval);
          navigate("/more-info");
        }
      }
    }, 3000); // check every 3 seconds

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-100">
      <h2 className="text-xl text-yellow-800">
        Waiting for email verification...
      </h2>
    </div>
  );
};

export default CheckVerification;
