export const APPLICATION_MODE = {
  WAVE_FORM: "WAVE_FORM",
  NOISE: "NOISE",
  AUDIO: "AUDIO"
} as const;

export const AUDIO_MODE = {
  MUTE: "MUTE",
  EP1: "EP1",
  EP2: "EP2",
  EP3: "EP3",
  EP4: "EP4",
  EP5: "EP5"
} as const;

type ObjectValues<T> = T[keyof T];
export type ApplicationMode = ObjectValues<typeof APPLICATION_MODE>;
export type AudioMode = ObjectValues<typeof AUDIO_MODE>;

export const getAppModeDisplayName = (mode: ApplicationMode): string => {
  switch (mode) {
    case APPLICATION_MODE.WAVE_FORM:
      return "wave";
    case APPLICATION_MODE.NOISE:
      return "🔇mute";
    case APPLICATION_MODE.AUDIO:
      return "🎧 audio";
    default:
      throw new Error(`Unknown mode ${mode}`);
  }
};

export const getAudioDisplayName = (mode: AudioMode): string => {
  switch (mode) {
    case AUDIO_MODE.MUTE:
      return "🔇mute";
    case AUDIO_MODE.EP1:
      return "🎧 EP1: Welcome to the beancast";
    case AUDIO_MODE.EP2:
      return "🎧 EP2: We are depressed";
    case AUDIO_MODE.EP3:
      return "🎧 EP3: Losing the plot";
    case AUDIO_MODE.EP4:
      return "🎧 EP4: Economics";
    case AUDIO_MODE.EP5:
      return "🎧 EP5: Constipated";
    default:
      throw new Error(`Unknown mode ${mode}`);
  }
};

export const getPlatformSupportedApplicationModes = (): ApplicationMode[] => {
  return [
    APPLICATION_MODE.WAVE_FORM,
    APPLICATION_MODE.NOISE,
    APPLICATION_MODE.AUDIO
  ];
};

export const getAudioModes = (): AudioMode[] => {
  return [
    AUDIO_MODE.MUTE,
    AUDIO_MODE.EP1,
    AUDIO_MODE.EP2,
    AUDIO_MODE.EP3,
    AUDIO_MODE.EP4,
    AUDIO_MODE.EP5
  ]
}
