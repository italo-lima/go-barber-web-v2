import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AppProvider from './context';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
