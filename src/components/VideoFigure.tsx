import { useEffect, useRef, useState, type ReactNode } from "react";
import "./video-figure.css";

/**
 * Silent, looping project clip that plays only while it is on screen.
 * - Muted + playsInline so it autoplays on iOS/Android.
 * - preload="none" + poster: nothing downloads until the clip nears the viewport.
 * - Respects prefers-reduced-motion: no autoplay, shows a play button instead.
 * - Click / Enter / Space toggles play-pause.
 */
type Props = {src:string;poster:string;caption?:string;alt:string;orientation?:"landscape"|"portrait"};
export default function VideoFigure({ src, poster, caption, alt, orientation = "landscape" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [near, setNear] = useState(false);
  const manualPaused = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const nearObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNear(true); nearObserver.disconnect(); }
    }, {rootMargin:"200px 0px"});
    nearObserver.observe(v);
    return () => nearObserver.disconnect();
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduced) v.pause();
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !document.hidden) {
        if (!reduced && !manualPaused.current) v.play().catch(() => {});
      } else v.pause();
    }, {threshold:[0,0.5,1]});
    const hide = () => { if (document.hidden) v.pause(); };
    document.addEventListener("visibilitychange",hide);
    io.observe(v);
    return () => { io.disconnect(); document.removeEventListener("visibilitychange",hide); };
  }, [reduced, near]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (!near) {setNear(true); v.src=src;}
    if (v.paused) {manualPaused.current=false; v.play().catch(() => {});}
    else {manualPaused.current=true; v.pause();}
  };

  return (
    <figure className={`vf vf--${orientation}`}>
      <div
        className="vf__frame"
        role="button"
        tabIndex={0}
        aria-label={`${playing ? "Pause" : "Play"} video: ${alt}`}
        onClick={toggle}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle())}
      >
        <video
          ref={ref}
          className="vf__video"
          src={near ? src : undefined}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          aria-hidden="true"
        />
        {!playing && (
          <span className="vf__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
          </span>
        )}
      </div>
      {caption && <figcaption className="vf__caption">{caption}</figcaption>}
    </figure>
  );
}

/** Two clips side by side on desktop, stacked on phones. */
export function VideoPair({ children }: {children:ReactNode}) {
  return <div className="vf-pair">{children}</div>;
}
