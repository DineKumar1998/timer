import './App.css';
import AddTimerForm from './components/AddTimerForm';

// ** Custom Components
import TimerList from './components/TimerList';

function App() {
  return (
    <div className="App">
      <TimerList />
      <AddTimerForm />
    </div>
  );
}

export default App;
