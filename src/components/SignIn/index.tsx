import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { auth } from '../../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();


  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setErrorMessage(null);
      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unable to login with Google, try again");
      }
    }
  }

  const handleEmailSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage(null);
      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            setErrorMessage('User not found');
            break;
          case 'auth/wrong-password':
            setErrorMessage('Wrong password');
            break;
          default:
            setErrorMessage('Unable to login, try again');
      }
    } else {
      setErrorMessage('Unable to login, try again');
    }
  }
}

  const handleEmailSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrorMessage(null);
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setErrorMessage('Email already in use');
            break;
          case 'auth/invalid-email':
            setErrorMessage('Invalid email');
            break;
          case 'auth/weak-password':
            setErrorMessage('Weak password');
            break;
          default:
            setErrorMessage('Unable to create account, try again');
        }
      } else {
        setErrorMessage('Unable to create account, try again');
      }
    }
  }


  return (
    <div className="
      grid
      grid-cols-2
      place-items-center
    "
    >
      <div className="
        h-auto
        w-[70%]
        bg-[#fff]
        shadow-lg
        rounded-md
        shadow-slate-300     
        p-12
        "
      >
        <h1 className="
          text-center
          text-4xl
          mb-8
          text-[#6d2020]
          font-mono
        "
        >
          Login
        </h1>
        <div>
          <form
            className="
              flex
              flex-col
              items-center
              justify-center
            "

          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                mt-4
                p-2
                w-full
                max-w-sm
                border border-gray-300
                rounded-sm
                text-sm
              "
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                mt-4
                p-2
                w-full
                max-w-sm
                border border-gray-300
                rounded-sm
                text-sm
              "
              />
              {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
            <button
              onClick={handleEmailSignIn}
              type="button"
              className="
                mt-6
                p-2
                w-full
                max-w-sm
                bg-Salmon-Red
                text-white
                rounded-md
                hover:scale-105
                transition-all
                duration-300
                ease-in-out
                text-md
              "
            >
              Login
            </button>
            <button
            onClick={handleEmailSignUp}
            type="button"
            className="
              mt-1.5
              p-2
              w-full
              max-w-sm
              bg-white
              rounded-md
              border 
              border-black
              hover:bg-gray-100
              transition-all
              duration-300
              ease-in-out
              text-md"
            >
              Sign Up
            </button>
            <button
            onClick={handleGoogleLogin}
            type="button"
            className="
              mt-12
              p-2
              w-full
              max-w-sm
              bg-white
              rounded-md
              border 
              border-black
              hover:bg-gray-100
              transition-all
              duration-300
              ease-in-out
              text-md
              flex
              gap-2
              justify-center
              "
            >
              <FaGoogle className="text-blue-900" />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/LoginBg.jpg" alt="login" />
      </div>
    </div>
  );
}

export default SignIn;