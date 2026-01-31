const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white">
      <h1 className="text-9xl font-black tracking-tighter text-orange-500 animate-pulse">404</h1>
      <p className="text-xl text-neutral-400 mt-4 uppercase tracking-[0.5em]">Lost in Space</p>
      <a href="/" className="mt-10 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
        Return Home
      </a>
    </div>
  );
};

export default NotFoundPage;
