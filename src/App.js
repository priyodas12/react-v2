import './App.css';
import WelcomeFunc from './Components/WelcomeFunc'
import WelcomeCls from './Components/WelcomeCls'
import ClickEvent from './Components/ClickEvent'

function App() {
  return (
    <div className="App">
      <WelcomeFunc name="Priyo" surname="Das"></WelcomeFunc>
      <WelcomeCls name="Priya" surname="Roy"></WelcomeCls>
      <ClickEvent></ClickEvent>
    </div>
  );
}

export default App;
