import { Helper } from "./deps.ts";

interface Helpers {
  [key: string]: Helper;
}

type RawSong = {
  archiveTime: Date;
  archiveTitle: string;
  song: string;
  data: string;
  startURL: string;
};
type Response = {
  status: "ok" | "ng";
  songs: RawSong[];
};

type Song = {
  archiveTime: Date;
  song: string;
  data: string;
  startURL: string;
};
export type Archive = {
  archiveTitle: string;
  archiveTime: Date;
  songs: Song[];
};

const response = await fetch(
  "https://script.google.com/macros/s/AKfycbzQGP4WyU0NGuHkNPkjmPoVA01MoYBYLD3_-woaIXm1FKwYIsLIan6YVgfja_yDWwosWg/exec",
);
const data = (await response.json()) as Response;
const songs = data.status === "ok" ? data.songs : [];

const archives = songs.reduce<Archive[]>((archives, song) => {
  const archive = archives.find((a) => a.archiveTitle == song.archiveTitle);
  if (archive) {
    archive.songs.push(song);
  } else {
    archives.push({
      archiveTime: song.archiveTime,
      archiveTitle: song.archiveTitle,
      songs: [song],
    });
  }
  return archives;
}, []);

export default (_data: unknown, _helpers: Helpers) => JSON.stringify(archives);
export const url = (page) => `/${page.data.basename}`;
