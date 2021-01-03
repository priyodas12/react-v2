import './App.css';
import WelcomeFunc from './Components/WelcomeFunc'
import WelcomeCls from './Components/WelcomeCls'
import ClickEventFunc from './Components/ClickEventFunc'
import ClickEventCls from './Components/ClickEventCls'
import Bindeventcls from './Components/BindEventCls'

function App() {
  return (
    <div className="App">
      <WelcomeFunc name="Priyo" surname="Das"></WelcomeFunc>
      <WelcomeCls name="Priya" surname="Roy"></WelcomeCls>
      <ClickEventFunc></ClickEventFunc>
      <ClickEventCls></ClickEventCls>
      <Bindeventcls></Bindeventcls>
    </div>
  );
}

export default App;
