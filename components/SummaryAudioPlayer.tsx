"use client";

import { Pause, Play, SpeakerHigh, WarningCircle } from "@phosphor-icons/react";
import { type CSSProperties, useEffect, useRef, useState } from "react";

const playbackRates = [0.85, 1, 1.25] as const;
type PlaybackRate = (typeof playbackRates)[number];
type AudioStatus = "idle" | "loading" | "ready" | "error";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

interface SummaryAudioPlayerProps {
  src?: string;
  ttsEndpoint?: string;
  title?: string;
}

export default function SummaryAudioPlayer({ src, ttsEndpoint, title = "Listen to the 500-word summary" }: SummaryAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSrc, setAudioSrc] = useState(src ?? "");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<PlaybackRate>(1);
  const [status, setStatus] = useState<AudioStatus>(src || ttsEndpoint ? "loading" : "idle");

  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  const canSeek = status === "ready" && duration > 0 && Boolean(audioSrc);
  const hasPlaybackSource = Boolean(audioSrc || ttsEndpoint);
  const isPreparing = status === "loading" && !audioSrc && Boolean(ttsEndpoint);
  const statusLabel =
    status === "error"
      ? "Audio unavailable"
      : isPreparing
        ? "Generating voice"
        : isWaiting
          ? "Buffering"
          : isPlaying
            ? "Now playing"
            : "CosyVoice summary";

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsWaiting(false);
    setAudioSrc(src ?? "");
    setStatus(src || ttsEndpoint ? "loading" : "idle");
  }, [src, ttsEndpoint]);

  useEffect(() => {
    if (src || !ttsEndpoint) return;

    let cancelled = false;
    const controller = new AbortController();

    requestTtsSource(controller.signal).then((nextSrc) => {
      if (cancelled || !nextSrc) return;
      setAudioSrc(nextSrc);
    });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [src, ttsEndpoint]);

  useEffect(() => {
    if (!audioSrc) return;

    const audio = audioRef.current;
    if (!audio) return;

    const handleMetadata = () => syncDuration(audio);
    handleMetadata();
    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("durationchange", handleMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("durationchange", handleMetadata);
    };
  }, [audioSrc]);

  async function requestTtsSource(signal?: AbortSignal) {
    if (!ttsEndpoint) return undefined;

    setStatus("loading");

    try {
      const response = await fetch(ttsEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        signal,
      });
      const payload = (await response.json().catch(() => null)) as { audioUrl?: unknown } | null;
      if (!response.ok || typeof payload?.audioUrl !== "string" || !payload.audioUrl.trim()) {
        throw new Error("Audio URL missing");
      }

      return payload.audioUrl;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return undefined;
      setIsWaiting(false);
      setStatus("error");
      return undefined;
    }
  }

  async function loadTtsSource(audio: HTMLAudioElement) {
    if (audioSrc) return audioSrc;
    if (!ttsEndpoint) return undefined;

    setIsWaiting(true);
    const nextSrc = await requestTtsSource();
    if (!nextSrc) return undefined;

    setAudioSrc(nextSrc);
    audio.src = nextSrc;
    audio.load();
    return nextSrc;
  }

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !hasPlaybackSource || isPreparing) return;

    if (audio.paused) {
      const nextSrc = await loadTtsSource(audio);
      if (!nextSrc) return;

      try {
        audio.playbackRate = playbackRate;
        await audio.play();
      } catch {
        setIsPlaying(false);
        setIsWaiting(false);
        setStatus("error");
      }
      return;
    }

    audio.pause();
  }

  function seekTo(value: string) {
    const nextTime = Number(value);
    const audio = audioRef.current;
    if (!Number.isFinite(nextTime) || !audio || !canSeek) return;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function changePlaybackRate(rate: PlaybackRate) {
    setPlaybackRate(rate);
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }

  function syncDuration(audio: HTMLAudioElement) {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      setDuration(audio.duration);
      setStatus("ready");
    }
  }

  return (
    <section className="mt-5 rounded-[1.75rem] border border-slate-200/90 bg-[linear-gradient(135deg,#ffffff_0%,#f8fdff_54%,#edf9ff_100%)] p-3 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-4">
      <audio
        ref={audioRef}
        preload="metadata"
        src={audioSrc || undefined}
        onCanPlay={(event) => syncDuration(event.currentTarget)}
        onDurationChange={(event) => syncDuration(event.currentTarget)}
        onLoadedMetadata={(event) => syncDuration(event.currentTarget)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPlaying={() => {
          setIsPlaying(true);
          setIsWaiting(false);
        }}
        onWaiting={() => setIsWaiting(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={(event) => {
          setIsPlaying(false);
          setIsWaiting(false);
          setCurrentTime(event.currentTarget.duration || 0);
        }}
        onError={() => {
          setIsPlaying(false);
          setIsWaiting(false);
          setStatus("error");
        }}
      />

      <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <button
          type="button"
          onClick={togglePlayback}
          className="focus-ring group grid h-16 w-16 place-items-center rounded-full bg-aied-ink text-white shadow-[0_14px_34px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-aied-blue disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none active:translate-y-0"
          disabled={!hasPlaybackSource || isPreparing}
          aria-label={isPlaying ? "Pause audio summary" : "Play audio summary"}
        >
          {status === "error" ? <WarningCircle size={25} weight="fill" /> : isPlaying ? <Pause size={25} weight="fill" /> : <Play size={25} weight="fill" className="ml-0.5" />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center">
              <div className="min-w-0">
                <p className="truncate text-sm font-black tracking-tight text-aied-ink sm:text-base">{title}</p>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400" aria-live="polite">
                  {statusLabel}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-black tabular-nums text-slate-500">
              <SpeakerHigh size={16} weight="bold" className="text-aied-blue" />
              <span>{formatTime(currentTime)}</span>
              <span className="text-slate-300">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onInput={(event) => seekTo(event.currentTarget.value)}
              onChange={(event) => seekTo(event.currentTarget.value)}
              disabled={!canSeek}
              aria-label="Audio playback progress"
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
              className="summary-audio-range w-full"
              style={{ "--progress": `${progress}%` } as CSSProperties}
            />

            <div className="grid grid-cols-3 rounded-full border border-slate-200 bg-white p-1 shadow-sm" aria-label="Playback speed">
              {playbackRates.map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => changePlaybackRate(rate)}
                  className={`focus-ring rounded-full px-3 py-1.5 text-xs font-black tabular-nums transition ${
                    playbackRate === rate ? "bg-aied-blue text-white shadow-sm" : "text-slate-500 hover:bg-aied-soft hover:text-aied-blue"
                  }`}
                  aria-pressed={playbackRate === rate}
                  aria-label={`Set playback speed to ${rate}x`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
