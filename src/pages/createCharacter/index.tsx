import Button from "~/components/Button";
import Input from "~/components/Input";
import Select from "~/components/Select";

export default function CreateCharacter() {
  return (
    <div className="flex h-screen w-screen items-center justify-center  bg-slate-950 text-white">
      <div className="flex w-screen max-w-md flex-col items-center justify-center space-y-6 px-4 md:p-0">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create Your Character</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your character&apos;s details and start your adventure
          </p>
        </div>

        <div className="flex w-full flex-col space-y-4">
          <div className="w-full space-y-2">
            <Input id="character-name" placeholder="Enter character name" />
          </div>

          <Select className="w-full rounded-2xl border-r-8 border-transparent bg-slate-800 px-4 py-2 font-bold text-white">
            <option value="warrior">Warrior</option>
            <option value="mage">Mage</option>
            <option value="rogue">Rogue</option>
          </Select>

          <Select className="w-full rounded-2xl border-r-8 border-transparent bg-slate-800 px-4 py-2 font-bold text-white">
            <option value="warrior">Human</option>
            <option value="mage">Elf</option>
            <option value="rogue">Dwarf</option>
          </Select>

          <Select className="w-full rounded-2xl border-r-8 border-transparent bg-slate-800 px-4 py-2 font-bold text-white">
            <option value="warrior">Male</option>
            <option value="mage">Female</option>
          </Select>

          <Button>Create Character</Button>
        </div>
      </div>
    </div>
  );
}
