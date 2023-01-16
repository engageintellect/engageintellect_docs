export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <a href="/docs">
          <div className="bg-neutral-900 h-32 transition-all duratin-500 p-2 hover:bg-neutral-800 flex items-center justify-center rounded-lg">
            Docs
          </div>
        </a>
        <a href="/about">
          <div className="bg-neutral-900 h-32 transition-all duratin-500 p-2 hover:bg-neutral-800 flex items-center justify-center rounded-lg">
            About
          </div>
        </a>
        <a href="/personal/personal_test">
          <div className="bg-neutral-900 h-32 transition-all duratin-500 p-2 hover:bg-neutral-800 flex items-center justify-center rounded-lg">
            Projects
          </div>
        </a>
      </div>
    </>
  );
}
