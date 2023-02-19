import { AudioSource, AUDIO_SOURCE } from "./sourceControls/common";
import FileAudioControls from "./sourceControls/file";
import LivestreamAudioControls from "./sourceControls/livestream";
import { AudioMode } from '../applicationModes';

export interface ControlledAudioSourceProps {
  audio: HTMLAudioElement;
  audioSource: AudioSource;
  ep: AudioMode
}
const ControlledAudioSource = ({
  audio,
  audioSource,
  ep
}: ControlledAudioSourceProps): JSX.Element => {
  switch (audioSource) {
    case AUDIO_SOURCE.LIVE_STREAM:
      return <LivestreamAudioControls audio={audio} ep={ep} />;
    // case AUDIO_SOURCE.EP:
    //   return <FileAudioControls audio={audio} />;
    default:
      throw new Error(`Unsupported source: ${audioSource}`);
  }
};
export default ControlledAudioSource;
