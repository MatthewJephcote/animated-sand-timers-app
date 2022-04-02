import { Glass } from './glass';
import { NarrowContour } from './contours/narrow-contour';
import { NarrowestContour } from './contours/narrowest-contour';
import { TimerSlice } from './timer-slice';
import { WideContour } from './contours/wide-contour';
import { WidestContour } from './contours/widest-contour';
import { Wood } from './wood';
export const SandTimer = (props) => {
  return (
    <div className={props.styles}>
      <Wood />
      <div className="flex">
        <WidestContour />
        <Glass />
        <div className="sand flex flex-col w-56 h-16">
          <TimerSlice styles="sand-level w-56 h-8" />
          <TimerSlice styles="sand-level-a bg-yellow-400 w-56 h-8" />
        </div>
        <Glass />
        <WidestContour />
      </div>
      <div className="flex">
        <WidestContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-bl-3xl" />
        <div className="sand flex flex-col w-56 h-16">
          <TimerSlice styles="sand-level-b bg-yellow-400 w-56 h-8" />
          <TimerSlice styles="sand-level-c bg-yellow-400 w-56 h-8 rounded-bl-3xl rounded-br-3xl" />
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-br-3xl" />
        <WidestContour />
      </div>
      <div className="flex">
        <WideContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tr-3xl rounded-bl-3xl" />
        <div className="sand flex flex-col w-40 h-16">
          <TimerSlice styles="sand-level-d bg-yellow-400 w-40 h-8"/ >
          <TimerSlice styles="sand-level-e bg-yellow-400 w-40 h-8 rounded-bl-3xl rounded-br-3xl"/ >
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tl-3xl rounded-br-3xl"/ >
        <WideContour />
      </div>
      <div className="flex">
        <NarrowContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tr-3xl rounded-bl-3xl"/ >
        <div className="sand flex flex-col w-24 h-16">
          <TimerSlice styles="sand-level-f bg-yellow-400 w-24 h-8"/ >
          <TimerSlice styles="sand-level-g bg-yellow-400 w-24 h-8  rounded-bl-3xl rounded-br-3xl"/ >
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tl-3xl rounded-br-3xl"/ >
        <NarrowContour />
      </div>
      <div className="flex">
        <NarrowestContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tr-3xl rounded-bl-3xl"/ >
        <div className="sand flex flex-col w-8 h-16">
          <TimerSlice styles="sand-level-h bg-yellow-400 w-8 h-8"/ >
          <TimerSlice styles="sand-level-i bg-yellow-400 w-8 h-8 rounded-bl-3xl rounded-br-3xl"/ >
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tl-3xl rounded-br-3xl"/ >
        <NarrowestContour />
      </div>
      <div className="flex">
        <NarrowestContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tl-3xl rounded-br-3xl"/ >
        <div className="sand flex flex-col w-8 h-16">
          <TimerSlice styles="sand-level-j w-8 h-8" / >
          <TimerSlice styles="sand-level-k w-8 h-8 rounded-tl-3xl rounded-tr-3xl" / >
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-bl-3xl rounded-tr-3xl"/ >
        <NarrowestContour />
      </div>
      <div className="flex">
        <NarrowestContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tl-3xl rounded-br-3xl"/ >
        <div className="sand flex flex-col w-24 h-16">
          <TimerSlice styles="sand-level-l w-24 h-8 rounded-tl-3xl rounded-tr-3xl"/ >
          <TimerSlice styles="sand-level-m w-24 h-8"/ >
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tr-3xl rounded-bl-3xl"/ >
        <NarrowestContour />
      </div>
      <div className="flex">
        <WideContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tl-3xl rounded-br-3xl"/ >
        <div className="sand flex flex-col w-40 h-16">
          <TimerSlice styles="sand-level-n w-40 h-8 rounded-tl-3xl rounded-tr-3xl"/ >
          <TimerSlice styles="sand-level-o w-40 h-8"/ >
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tr-3xl rounded-bl-3xl"/ >
        <WideContour />
      </div>
      <div className="flex">
        <WidestContour />
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tl-3xl"/ >
        <div className="sand flex flex-col w-56 h-16">
          <TimerSlice styles="sand-level-p w-56 h-8 rounded-tl-3xl rounded-tr-3xl"/ >
          <TimerSlice styles="sand-level-q w-56 h-8"/ >
        </div>
        <TimerSlice styles="glass bg-black w-8 h-16 rounded-tr-3xl"/ >
        <WidestContour />
      </div>
      <div className="flex">
        <WidestContour />
        <Glass />
        <div className="sand flex flex-col w-56 h-16">
          <TimerSlice styles="sand-level-r w-56 h-8"/ >
          <TimerSlice styles="sand-level-s w-56 h-8"/ >
        </div>
        <Glass />
        <WidestContour />
      </div>
      <Wood />
    </div>
  );
}
