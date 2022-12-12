import { useState } from 'react';
import Form from './components/Form';
import CurrentUserContext from './user-context';

function App() {
    const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  );
}

export default App;
