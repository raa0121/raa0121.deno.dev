export default function ({ songs }) {
  return <>
    <h1>しろあちゃん歌枠セットリスト</h1>

    <ul>
      { songs.map((song) => (
        <li>
          <p>{ song.archiveTitle }</p>
          <p>{ song.song }</p>
          <p>{ song.startURL }</p>
        </li>
      ))}
    </ul>
  </>;
}
