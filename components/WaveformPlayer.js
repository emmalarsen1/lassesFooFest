import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/WaveformPlayer.module.css";
import Image from "next/image";

import playIconSVG from "../public/play.svg";
import pauseIconSVG from "../public/pause.svg";
import muteIconSVG from "../public/mute.svg";
import unmuteIconSVG from "../public/unmute.svg";

const formWaveSurferOptions = () => ({
  container: "#waveform",
  waveColor: "#37395f",
  progressColor: "#79ac53",
  cursorColor: "#79ac53",
  barWidth: 3,
  barRadius: 3,
  cursorWidth: 1,
  height: 200,
  barGap: 3,
  responsive: true,
  normalize: true,
  partialRender: true,
});

function WaveformPlayer() {
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
    <div className={styles.outerContainer}>
      <h4>TRACK NAME: example</h4>
      <div className={styles.container}>
        <div className={styles.controls}>
          <button className={styles.play} onClick={handlePlayPause}>
            {!playing ? <Image src={playIconSVG} alt="Play" /> : <Image src={pauseIconSVG} alt="Pause" />}
          </button>
          <button className={styles.mute} onClick={handleMUTE}>
            {!mute ? <Image src={unmuteIconSVG} alt="mute" /> : <Image src={muteIconSVG} alt="unmute" />}
          </button>
        </div>
        <div className={styles.waveformContainer}>
          <div id="waveform" className={styles.waveform} />
        </div>
      </div>
      <Link className={styles.hearmore} href={"https://open.spotify.com/"}>
        HEAR MORE ON SPOTIFY HERE!
      </Link>
    </div>
  );
}

export default WaveformPlayer;
