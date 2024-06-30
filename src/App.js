import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteFooter from './components/Common/SiteFooter';
import SiteNav from './components/Common/SiteNav';
import HomePage from './components/home/HomePage';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { useAuthenticator, View, Authenticator, Image, Text, useTheme } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';
import { Button } from 'bootstrap';


Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Logo"
            src="download.png"
            border="pink"
          />
        </View>
      );
    },
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  };
  

  return (
    <Authenticator 
      loginMechanisms={['email']}
      components={components}
      formFields={{
        signUp: {
          email: {
            placeholder: 'Enter your email',
            isRequired: true,
          },
          password: {
            placeholder: 'Enter your password',
            isRequired: true,
          },
        },
      }}
    >
      {({ signOut, user }) => (
          <div>
            <SiteNav logOut={signOut}/>
            <Routes>
              <Route path="*" element={<HomePage />} />
            </Routes>
            <SiteFooter />
          </div>
      )}
    </Authenticator>
  );
}

export default App;
