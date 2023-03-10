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
      return "πMute";
    case APPLICATION_MODE.AUDIO:
      return "π§ audio";
    default:
      throw new Error(`Unknown mode ${mode}`);
  }
};

export const getAudioDisplayName = (mode: AudioMode): string => {
  switch (mode) {
    case AUDIO_MODE.MUTE:
      return "πMute";
    case AUDIO_MODE.EP1:
      return "π§ EP1: Welcome to the beancast";
    case AUDIO_MODE.EP2:
      return "π§ EP2: We are depressed";
    case AUDIO_MODE.EP3:
      return "π§ EP3: Losing the plot";
    case AUDIO_MODE.EP4:
      return "π§ EP4: Economics";
    case AUDIO_MODE.EP5:
      return "π§ EP5: Constipated";
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
