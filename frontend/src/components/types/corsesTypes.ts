export interface videoType {
  id: number;
  subtitle: string;
  time: string;
  title: string;
  video: string;
}

export interface CorsesType {
  id: number;
  title: string;
  image: string;
  link: string;
  corseDetails: string;
  headerVideo: string;
  video: videoType[];
}
