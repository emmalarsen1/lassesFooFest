import { useEffect, useRef, useState } from "react";

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
    <div>
      <div id="waveform" />
      <div className="controls">
        <div onClick={handlePlayPause}>{!playing ? "PLAY" : "PAUSE"}</div>
        <div onClick={handleMUTE}>{!mute ? "UNMUTED" : "MUTED"}</div>
      </div>
    </div>
  );
}

export default WaveformPlayer;
