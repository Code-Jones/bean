import { folder, useControls } from "leva";
import { useEffect } from "react";
import { AudioSourceControlsProps } from "./common";
import { AudioMode } from '../../applicationModes';

const LivestreamAudioControls = ({
  audio,
  ep
}: AudioSourceControlsProps): JSX.Element => {
  // const { streamUrl } = useControls({
  //   Audio: folder({
  //     streamUrl: {
  //       value: "http://igor.torontocast.com:1950/stream",
  //       options: {
  //         Default: "http://igor.torontocast.com:1950/stream",
  //         //Ice: "https://icecast2.ufpel.edu.br/live" // DEAD
  //         Estilo:
  //           "https://us4.internet-radio.com/proxy/radioestiloleblon?mp=/stream",
  //         // LoFi: "http://192.95.39.65:5607/stream/1/",
  //         // "Lo Fly": "http://64.20.39.8:8421/stream/1/",
  //         // "Disco/Funk": "http://91.121.104.123:8000/stream/1/",
  //         // Soul: "http://192.95.18.39:5123/stream/1/",
  //         // Latin: "http://149.56.157.81:5152/stream/1/",
  //         // "Smooth Jazz": "http://64.95.243.43:8002/stream/1/",
  //         "Jazz Cafe": "http://radio.wanderingsheep.net:8090/jazzcafe320",
  //         // House: "http://62.210.105.16:7000/stream/1/",
  //         // "Drum and Bass": "http://91.232.4.33:7022/stream/1/",
  //       },
  //       order: -99,
  //     },
  //   }),
  // })

  let streamUrl: string;
  switch (ep) {
    case "EP1":
      streamUrl = "/ep1.mp3";
      break;
    case "EP2":
      streamUrl = "/ep2.mp3";
      break;
    case "EP3":
      streamUrl = "/ep3.mp3";
      break;
    case "EP4":
      streamUrl = "/ep4.mp3";
      break;
    case "EP5":
      streamUrl = "/ep5.mp3";
      break;
    default:
      streamUrl = "/ep1.mp3";
      break;
  }

  useEffect(() => {
    audio.pause();
    audio.src = streamUrl;
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => console.log(`Playing ${streamUrl}`))
        .catch((error) => {
          // Auto-play was prevented
          console.error(`Error playing ${streamUrl}`);
        });
    }
    return () => {
      audio.pause();
    };
  }, [audio, streamUrl]);

  return <></>;
};

export default LivestreamAudioControls;
