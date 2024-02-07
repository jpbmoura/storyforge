import { GiAnvil } from "react-icons/gi";
import { HiArrowSmLeft, HiPaperAirplane } from "react-icons/hi";
import Input from "~/components/Input";

const Adventure = () => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="hidden w-1/5 flex-col items-center justify-center bg-slate-950 px-4 text-white md:flex">
        <h1 className="flex flex-row items-center justify-center gap-1 text-3xl font-bold underline decoration-amber-600 decoration-dotted">
          <GiAnvil className="text-amber-600" />
          StoryForge
        </h1>
        <p className=" text-center text-gray-500 dark:text-gray-400">
          Explore the world and write your own story
        </p>
      </div>

      <div className="flex h-full w-3/5 flex-col bg-slate-950 px-4 text-white">
        <div className="flex flex-row items-center gap-1 p-4">
          <button className="flex flex-row items-center gap-1 font-semibold transition-all hover:text-amber-600">
            <HiArrowSmLeft className="text-lg" />
            <p className="text-white">Voltar</p>
          </button>
        </div>

        <div className="grid flex-1 gap-4 overflow-auto p-4">oiee</div>

        <div className="flex items-center gap-2  p-4">
          <textarea
            className="mx-2 min-h-[40px] w-full flex-1 resize-none rounded-2xl bg-slate-800 px-4 py-2 text-sm font-bold text-white hover:opacity-85"
            id="message"
            placeholder="What will you do?"
          />
          <button className="mx-2">
            <HiPaperAirplane className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="hidden grow items-center justify-center bg-slate-950 md:flex">
        oi
      </div>
    </div>
  );
};

export default Adventure;
