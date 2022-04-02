import './App.css';
import { SandTimer } from './components/sand-timer';

function App() {
  return (
    <div className="flex flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-12 min-h-screen bg-gradient-to-r from-indigo-900">
      <SandTimer
      styles={"first-timer-container flex flex-col w-80"} />
      <SandTimer
      styles={"second-timer-container flex flex-col w-80"} />
      <SandTimer
      styles={"third-timer-container flex flex-col w-80"} />
      <SandTimer
      styles={"fourth-timer-container flex flex-col w-80"} />
    </div>
  );
}

export default App;
