interface ActiveProjects {
    next: () => void;
}

const ActiveProjects = ({next}: ActiveProjects) => {
  return (
    <div className="mb-20 flex ">
      <div className="basis-6/12 flex flex-col gap-10">
        <form className="">
          <label>I Am Currentely Working on...</label>
          <div className="flex gap-5"> 
            <input
              className="mt-2 w-48 text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
              placeholder="Project Name"
              type="text"
            />
             <input
              className="mt-2 w-48 text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
              placeholder="Since"
              type="text"
            />
             <input
              className="mt-2 w-48 text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
              placeholder="Project role"
              type="text"
            />
          </div>
        </form>

        <form className="">
          <label>Description</label>
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="WIf you'd like to elaborate..."
          />
        </form>

        <button className="-mb-8 bg-gray-400 text-white py-3">
          Add Another Project
        </button>

        <button className="bg-black text-white py-3" onClick={() => next()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ActiveProjects;
