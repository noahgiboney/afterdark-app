// The ghost from the App Store header: a soft radial glow, a faint blurred echo trailing up and to the
// left, and the ghost itself with a cream halo.
export default function GlowingGhost({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(242,237,228,0.10)_0%,rgba(242,237,228,0.03)_40%,transparent_70%)]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ghost.svg"
        alt=""
        aria-hidden
        className="absolute top-[-6%] left-[-17%] h-full w-full opacity-[0.07] blur-[3px]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ghost.svg"
        alt=""
        aria-hidden
        className="ghost-float relative h-full w-full drop-shadow-[0_0_28px_rgba(242,237,228,0.25)]"
      />
    </div>
  );
}
