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
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(false);

  // random copyright free music
  const url = "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

  useEffect(() => {
    create();
    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;
    const options = formWaveSurferOptions();
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  const handleMUTE = () => {
    setMute(!mute);
    wavesurfer.current.toggleMute();
  };

  return (
    <div className={styles.outerContainer}>
      <h4>TRACK NAME: example</h4>
      <div className={styles.container}>
        <div className={styles.controls}>
          <button className={styles.play} onClick={handlePlayPause}>
            {!playing ? <Image className={styles.icon} src={playIconSVG} alt="Play" /> : <Image className={styles.icon} src={pauseIconSVG} alt="Pause" />}
          </button>
          <button className={styles.mute} onClick={handleMUTE}>
            {!mute ? <Image className={styles.icon} src={unmuteIconSVG} alt="mute" /> : <Image className={styles.icon} src={muteIconSVG} alt="unmute" />}
          </button>
        </div>

        <div id="waveform" className={styles.waveform} />
      </div>
      <Link className={styles.hearmore} href={"https://open.spotify.com/"}>
        HEAR MORE ON SPOTIFY HERE!
      </Link>
    </div>
  );
}

export default WaveformPlayer;
