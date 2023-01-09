import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/WaveformPlayer.module.css";

const formWaveSurferOptions = () => ({
  container: "#waveform",
  waveColor: "#D9DCFF",
  progressColor: "#4353FF",
  cursorColor: "#4353FF",
  barWidth: 3,
  barRadius: 3,
  cursorWidth: 1,
  height: 200,
  barGap: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true,
});

function WaveformPlayer() {
  const playBut = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="transparent" class="bi bi-play" viewBox="0 0 16 16">
      <path d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
    </svg>
  );
  const pauseBut = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="transparent" class="bi bi-pause" viewBox="0 0 16 16">
      <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
    </svg>
  );
  const muteBut = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="transparent" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
      <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
    </svg>
  );
  const unmuteBut = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="transparent" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
      <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
      <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
      <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
    </svg>
  );
  const moreBut = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="transparent" class="bi bi-three-dots" viewBox="0 0 16 16">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );

  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(false);

  const url = "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

  useEffect(() => {
    create();
    console.log("useEffekt");
    return () => {
      if (wavesurfer.current) {
        console.log("destroy");
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    console.log("create");
    const WaveSurfer = (await import("wavesurfer.js")).default;
    const options = formWaveSurferOptions();
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
    console.log("load");
  };

  const handlePlayPause = () => {
    console.log("pause");
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  const handleMUTE = () => {
    console.log("mute");
    setMute(!mute);
    wavesurfer.current.toggleMute();
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.play} onClick={handlePlayPause}>
          {!playing ? playBut : pauseBut}
        </div>
        <div className={styles.mute} onClick={handleMUTE}>
          {!mute ? unmuteBut : muteBut}
        </div>
        <Link href={"https://open.spotify.com/"}>{moreBut}</Link>
      </div>
      <div className={styles.waveformContainer}>
        <div id="waveform" className={styles.waveform} />
      </div>
    </div>
  );
}

export default WaveformPlayer;
