import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteFooter from './components/Common/SiteFooter';
import SiteNav from './components/Common/SiteNav';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify'; // Import Auth from aws-amplify
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import SignUp from './components/auth/RegisterPage';
import SignIn from './components/auth/LoginPage';
import ConfirmSignUp from './components/auth/SignUpConfirm';

Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState(null); // State to track user authentication status

  useEffect(() => {
    // Check current authentication status when component mounts
    checkAuthStatus();
  }, []);

  async function checkAuthStatus() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      setUser(null); // Reset user state if not authenticated
      console.log('User not authenticated:', error);
    }
  }

  const handleLogout = async () => {
    try {
      await Auth.signOut(); // Call signOut function from AWS Amplify
      setUser(null); // Update user state upon successful logout
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle sign-out error
    }
  };

  async function fetchUserId() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub; // 'sub' is the user ID attribute
      console.log('User ID:', userId);
      return userId;
    } catch (error) {
      console.error('Error fetching user ID:', error);
    }
  }
  return (
    <div>
      <SiteNav user={user} logOut={handleLogout} /> {/* Pass user state and logout function to SiteNav */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirm" element={<ConfirmSignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
