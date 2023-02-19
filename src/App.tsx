import "./App.css";
import { Suspense } from "react";
import { useControls } from "leva";
import {
  ApplicationMode,
  APPLICATION_MODE,
  AudioMode,
  getAppModeDisplayName,
  getAudioModes,
  getAudioDisplayName,
  getPlatformSupportedApplicationModes,
} from "./components/applicationModes";
import AudioFFTAnalyzer from "./components/analyzers/audioFFTAnalyzer";
import Visual3DCanvas from "./components/canvas/Visual3D";

const getAnalyzerComponent = (mode: ApplicationMode, play: AudioMode): JSX.Element | null => {
  switch (mode) {
    case APPLICATION_MODE.AUDIO:
      return <AudioFFTAnalyzer ep={play} />;
    default:
      return null;
  }
};

const AVAILABLE_MODES = getPlatformSupportedApplicationModes();
const AUDIO_MODES = getAudioModes();


const App = (): JSX.Element => {
  const { Play } = useControls({
    Play: {
      value: AUDIO_MODES[0],
      options: AUDIO_MODES.reduce((o, mode) => ({ ...o, [getAudioDisplayName(mode)]: mode }), {}),
      order: -100
    }
  });

  let { mode } = useControls({
    mode: {
      value: AVAILABLE_MODES[1],
      options: AVAILABLE_MODES.reduce(
        (o, mode) => ({ ...o, [getAppModeDisplayName(mode)]: mode }),
        {}
      ),
      order: -100,
    },
  });
  

  mode = Play !== 'MUTE' ? APPLICATION_MODE.AUDIO : APPLICATION_MODE.NOISE;


 

  return (
    <Suspense fallback={<span>loading...</span>}>
      {getAnalyzerComponent(mode as ApplicationMode, Play as AudioMode)}
      <Visual3DCanvas mode={mode as ApplicationMode} />
    </Suspense>
  );
};

export default App;
