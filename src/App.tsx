import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SignIn />
    {/* <SignUp /> */}
  </>
);

export default App;
