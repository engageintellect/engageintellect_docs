export default function Test() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-48 my-10">
      <div className="bg-neutral-900 rounded-lg p-2 hover:bg-neutral-800 transition-all duration-200 flex items-center justify-center hover:scale-[105%]">
        Hello
      </div>
      <div className="bg-neutral-900 rounded-lg p-2 hover:bg-neutral-800 transition-all duration-200 flex items-center justify-center hover:scale-[105%]">
        There
      </div>
      <div className="bg-neutral-900 rounded-lg p-2 hover:bg-neutral-800 transition-all duration-200 flex items-center justify-center hover:scale-[105%]">
        World
      </div>
    </div>
  );
}
