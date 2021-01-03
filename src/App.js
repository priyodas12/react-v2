import './App.css';
import WelcomeFunc from './Components/WelcomeFunc'
import WelcomeCls from './Components/WelcomeCls'

function App() {
  return (
    <div className="App">
      <WelcomeFunc name="Priyo" surname="Das"></WelcomeFunc>
      <WelcomeCls name="Priya" surname="Roy"></WelcomeCls>
    </div>
  );
}

export default App;
