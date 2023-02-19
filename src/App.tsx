import "./App.css";
import { Suspense } from "react";
import { useControls } from "leva";
import {
  ApplicationMode,
  APPLICATION_MODE,
  getAppModeDisplayName,
  getAudioModes,
  getAudioDisplayName,
  getPlatformSupportedApplicationModes,
} from "./components/applicationModes";
import AudioFFTAnalyzer from "./components/analyzers/audioFFTAnalyzer";
import Visual3DCanvas from "./components/canvas/Visual3D";

const getAnalyzerComponent = (mode: ApplicationMode): JSX.Element | null => {
  switch (mode) {
    case APPLICATION_MODE.AUDIO:
      return <AudioFFTAnalyzer />;
    default:
      return null;
  }
};

const AVAILABLE_MODES = getPlatformSupportedApplicationModes();
const AUDIO_MODES = getAudioModes();


const App = (): JSX.Element => {
  const { Audio } = useControls({
    Audio: {
      value: AUDIO_MODES[1],
      options: AUDIO_MODES.reduce((o, mode) => ({ ...o, [getAudioDisplayName(mode)]: mode }), {}),
      order: -100
    }
  });

  const mode = Audio === 'AUDIO' ? APPLICATION_MODE.AUDIO : APPLICATION_MODE.NOISE;


  // const { mode } = useControls({
  //   mode: {
  //     value: AVAILABLE_MODES[1],
  //     options: AVAILABLE_MODES.reduce(
  //       (o, mode) => ({ ...o, [getAppModeDisplayName(mode)]: mode }),
  //       {}
  //     ),
  //     order: -100,
  //   },
  // });
  

  return (
    <Suspense fallback={<span>loading...</span>}>
      {getAnalyzerComponent(mode as ApplicationMode)}
      <Visual3DCanvas mode={mode as ApplicationMode} />
    </Suspense>
  );
};

export default App;
