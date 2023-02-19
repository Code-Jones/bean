export const APPLICATION_MODE = {
  WAVE_FORM: "WAVE_FORM",
  NOISE: "NOISE",
  AUDIO: "AUDIO"
} as const;

export const AUDIO_MODE = {
  MUTE: "MUTE",
  AUDIO: "AUDIO"
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
   case AUDIO_MODE.AUDIO:
      return "🎧 audio";
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
    AUDIO_MODE.AUDIO,
    AUDIO_MODE.MUTE
  ]
}
