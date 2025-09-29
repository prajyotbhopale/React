import './App.css';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import  UserContextProvider  from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>This is React course</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
