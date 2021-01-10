export interface framesInterface {
  src: string;
}

type virtualScrollType = (index: number) => void;

export interface virtualFramesInterface extends Vue {
  scrollTo: virtualScrollType;
  virtualScrollSizesAgg: number[];
}

declare module '@vue/composition-api' {
  interface SetupContext {
    readonly refs: {[key: string]: Vue | Element | Vue[] | Element[]}
  }
}

export interface messagesInterface {
  data: {
    comment?: string;
    id: string;
    postDateTime?: Date;
    'media_type'?: string
    'like_count'?: number
    hashtag?: 'string'
    caption?: 'string'
    'comments_count'?: number
    permalink?: string
  },
  id: 'string'
}

export interface audioInterface extends Vue {
  muted: boolean;
  play: () => void;
}

export interface scrollDetails {
  index: number;
}
