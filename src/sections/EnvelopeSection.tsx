export default function EnvelopeSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: '#6b7263' }}>

      {/* Background illustration */}
      <img
        src="/images/bg.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(80,85,72,0.45)' }} />

      {/* Flower top-left */}
      <img
        src="/images/flower-1.webp"
        alt=""
        className="absolute top-0 w-64 md:w-80 pointer-events-none select-none flower-sway-left"
        style={{ left: '-0.5em' }}
      />

      {/* Flower top-right */}
      <div className="absolute top-0 w-64 md:w-80" style={{ right: '-2em', transform: 'scaleX(-1)' }}>
        <img
          src="/images/flower-2.webp"
          alt=""
          className="w-full pointer-events-none select-none flower-sway-right"
        />
      </div>

      {/* Oval glow */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          width: '28em',
          height: '38em',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(255,253,245,0.55) 0%, rgba(255,253,245,0.2) 50%, transparent 75%)',
        }}
      />

      {/* Center content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <p className="text-sm tracking-[0.1em] text-stone-700 mb-8">
          We invite you to The Wedding of
        </p>

        <h1 className="text-3xl md:text-5xl font-light tracking-wide text-stone-800 leading-tight">
          Nabila <span className="text-stone-500">&amp;</span> Naufal
        </h1>

        <div className="w-16 h-px bg-stone-400 my-8" />

        <button className="flex items-center gap-2 bg-stone-700 hover:bg-stone-800 text-white text-sm tracking-widest px-8 py-3 rounded-full transition-colors">
          Open the Invitation ✉
        </button>
      </div>

      {/* Mountain ornament bottom */}
      <img
        src="/images/mountain-ornament.webp"
        alt=""
        className="absolute left-0 w-full pointer-events-none select-none"
        style={{ bottom: '-10em' }}
      />

    </section>
  )
}
