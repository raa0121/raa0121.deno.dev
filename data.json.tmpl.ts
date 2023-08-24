import { Helper } from "lume/core.ts";

interface Helpers {
  [key: string]: Helper;
}

type Song = {
  archiveTime: Date;
  archiveTitle: string;
  song: string;
  data: string;
  startURL: string;
};
type Response = {
  status: "ok" | "ng";
  songs: Song[];
};

const response = await fetch(
  "https://script.google.com/macros/s/AKfycbz4OIhijFjJKscOx8V43rzUj4E2pe9MyHMj3327KscStJoE48EDIOEjRf554zthpitBMA/exec",
);
const data = (await response.json()) as Response;
const songs = data.status === "ok" ? data.songs : [];

export default (_data: unknown, _helpers: Helpers) => JSON.stringify(songs);
