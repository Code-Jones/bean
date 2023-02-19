import { useEffect, useMemo } from "react";
import ControlledAudioSource from "../audio/audioSource";
import {
  AudioSource,
  AUDIO_SOURCE,
  useSelectAudioSource,
} from "../audio/sourceControls/common";
import { AudioMode } from '../applicationModes';
import MicrophoneAudioControls from "../audio/sourceControls/mic";
import FFTAnalyzerControls from "./fftAnalyzerControls";
import FFTAnalyzer from "./analyzers/fft";
import { useMicrophoneLink } from "./analyzers/common";

interface InternalAudioAnalyzerProps {
  audioSource: AudioSource;
  ep: AudioMode
}
const InternalAudioFFTAnalyzer = ({
  audioSource,
  ep
}: InternalAudioAnalyzerProps): JSX.Element => {
  const audio = useMemo(() => {
    const node = new Audio();
    node.crossOrigin = "anonymous";
    return node;
  }, []);

  const analyzer = useMemo(() => {
    return new FFTAnalyzer(audio);
  }, [audio]);

  useEffect(() => {
    analyzer.volume = 1.0;
  }, [analyzer, audioSource]);

  useEffect(() => {
    return () => {
      console.log("REMOVING");
      audio.pause();
      audio.remove();
    };
  }, [audio]);

  return (
    <>
      <ControlledAudioSource
        audio={audio}
        audioSource={audioSource as unknown as AudioSource}
        ep={ep}
      />
      <FFTAnalyzerControls analyzer={analyzer} />
    </>
  );
};

// interface InternalMicrophoneFFTAnalyzerProps {}
// const InternalMicrophoneFFTAnalyzer =
//   ({}: InternalMicrophoneFFTAnalyzerProps): JSX.Element => {
//     const audio = useMemo(() => {
//       const node = new Audio();
//       node.crossOrigin = "anonymous";
//       return node;
//     }, []);

//     const analyzer = useMemo(() => {
//       const out = new FFTAnalyzer(audio);
//       out.volume = 0.0;
//       return out;
//     }, [audio]);

//     const { onMicDisabled, onStreamCreated } = useMicrophoneLink(
//       audio,
//       analyzer
//     );

//     useEffect(() => {
//       return () => {
//         console.log("REMOVING");
//         audio.pause();
//         audio.remove();
//       };
//     }, [audio]);

//     return (
//       <>
//         <MicrophoneAudioControls
//           audio={audio}
//           onMicDisabled={onMicDisabled}
//           onStreamCreated={onStreamCreated}
//         />
//         <FFTAnalyzerControls analyzer={analyzer} />
//       </>
//     );
//   };
type fttProps = {
  ep: AudioMode
}

const AudioFFTAnalyzer = (props: fttProps): JSX.Element => {
  // const audioSource = useSelectAudioSource(play);
  const audioSource = AUDIO_SOURCE.LIVE_STREAM;

  return <InternalAudioFFTAnalyzer audioSource={audioSource as unknown as AudioSource} ep={props.ep} />

  // return (audioSource as unknown as AudioSource) === AUDIO_SOURCE.MICROPHONE ? (
  //   <InternalMicrophoneFFTAnalyzer />
  // ) : (
  //   <InternalAudioFFTAnalyzer
  //     audioSource={audioSource as unknown as AudioSource}
  //   />
  // );
};

export default AudioFFTAnalyzer;
