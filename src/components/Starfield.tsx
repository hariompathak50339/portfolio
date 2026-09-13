export default function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020617]">
      {/* nebula glows */}
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-700/25 blur-[120px]" />
      <div className="absolute top-1/3 -left-40 h-[380px] w-[380px] rounded-full bg-sky-500/15 blur-[100px]" />
      <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-fuchsia-600/15 blur-[110px]" />

      {/* static + twinkling star layers */}
      <div className="stars-layer absolute inset-0 opacity-70" />
      <div className="stars-layer stars-twinkle-1 absolute inset-0 opacity-60" />
      <div className="stars-layer stars-twinkle-2 absolute inset-0 opacity-40" />

      {/* shooting star */}
      <div className="shooting-star absolute top-16 right-24 h-px w-28 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
