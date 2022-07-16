import CreatePost from './components/create-post.component';
import LoginButton from './components/login-button.component';
import LogoutButton from './components/logout-button.component';
import Profile from './components/profile.component';

const App = () => {
  return (
    <div>
      <h1>Hello from React 18!!!</h1>
      <Profile />
      <LoginButton />
      <LogoutButton />
      <CreatePost />
    </div>
  );
};

export default App;

