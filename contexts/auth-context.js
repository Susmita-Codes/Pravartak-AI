"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Check/create user in database via API
        try {
          console.log('Creating/checking user for:', firebaseUser.uid);
          
          const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firebaseUser }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${errorData.error || 'Unknown error'}`);
          }

          const { user } = await response.json();
          console.log('User created/found:', user.id);
          
          setUser(firebaseUser);
          
          // Get Firebase ID token and set it as a cookie for server actions
          const idToken = await firebaseUser.getIdToken();
          console.log("Setting firebase-token cookie, token length:", idToken.length);
          document.cookie = `firebase-token=${encodeURIComponent(idToken)}; path=/; max-age=${60 * 60}; SameSite=Lax`;
          
          // Also set user data cookie
          const userData = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL
          };
          console.log("Setting firebase-user cookie for user:", userData.uid);
          document.cookie = `firebase-user=${encodeURIComponent(JSON.stringify(userData))}; path=/; max-age=${60 * 60}; SameSite=Lax`;
        } catch (error) {
          console.error('Error checking user:', error);
          setUser(firebaseUser); // Still set user even if database check fails
        }
      } else {
        setUser(null);
        // Remove cookies when user signs out
        document.cookie = 'firebase-user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        document.cookie = 'firebase-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Check if there's a stored redirect path
      const redirectPath = sessionStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        sessionStorage.removeItem('redirectAfterLogin');
        window.location.href = redirectPath;
      }
      
      return result.user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if there's a stored redirect path
      const redirectPath = sessionStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        sessionStorage.removeItem('redirectAfterLogin');
        window.location.href = redirectPath;
      }
      
      return result.user;
    } catch (error) {
      console.error('Error signing in with email:', error);
      throw error;
    }
  };

  const signUpWithEmail = async (email, password, name) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user's display name
      if (name && result.user) {
        await updateProfile(result.user, {
          displayName: name
        });
      }
      
      return result.user;
    } catch (error) {
      console.error('Error signing up with email:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};