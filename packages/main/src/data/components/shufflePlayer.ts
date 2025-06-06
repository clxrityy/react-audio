import { Colors, type Component } from '../../util'

export const ShufflePlayerComponent: Component<'audio'> = {
  title: 'ShufflePlayer',
  description:
    'A simple audio player component with shuffle functionality.',
  url: '',
  props: {
    srcs: {
      value: 'string[]',
      description: 'An array of source URLs for the audio files.',
      required: true,
      default: undefined,
    },
    autoplay: {
      value: 'boolean',
      description:
        'Whether the audio should start playing automatically.',
      required: false,
      default: false,
    },
    color: {
      value: 'string',
      description: 'The color of the player.',
      required: false,
      default: Colors.primary,
    },
    showNextPrevControls: {
      value: 'boolean',
      description: 'Whether to show the next and previous controls.',
      required: false,
      default: true,
    },
    showProgress: {
      value: 'boolean',
      description: 'Whether to show the progress bar.',
      required: false,
      default: true,
    },
    showVolume: {
      value: 'boolean',
      description: 'Whether to show the volume control.',
      required: false,
      default: true,
    },
    shuffle: {
      value: 'boolean',
      description:
        'Whether to shuffle the audio files. If true, a random file will be played each time.',
      required: false,
      default: false,
    },
  },
}
