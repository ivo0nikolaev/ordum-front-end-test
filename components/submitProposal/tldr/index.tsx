import Image from "next/image";

import { useContext } from "react";
import { useRouter } from "next/router";

import SubmitPropolsalContext from "@/store/submitPropolsal";

import infoIcon from "@/assets/svg-icons/info-icon.svg";

type Props = {
  className?: string;
};

const SubmitProposalTLDR: React.FC<Props> = (props) => {

  const submitCtx = useContext(SubmitPropolsalContext);
  const router = useRouter();
  const step = submitCtx.propolsalStep;
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h1 className="text-4xl xl:text-6xl font-medium">Submit Proposal</h1>
        <p className="mt-4  text-xs md:text-sm">
          Our community advises submitting a proposal to “Discussions” so you
          can receive feedback and update your proposal. Would you like to take
          this route or still continue posting directly on chain?
        </p>
        <div className="mt-5 py-3 max-w-[33rem] bg-gray-300 flex justify-around">
          <button className="text-white border rounded bg-clack py-2 px-20 bg-black">
            Discussion
          </button>
          <button className="text-white border rounded bg-clack py-2 px-20 bg-gray-500">
            On-Chain
          </button>
        </div>

        <h2 className="mt-8 text-4xl">TL;DR</h2>

        <form className="mt-8">
          <div className="flex justify-between">
            <label className="text-xl flex">
              <span>Choose Proposer Account </span>
              <Image src={infoIcon} width={12} alt="" className="-mt-4 mr-2" />
            </label>
            <span>Transfarable 00.00</span>
          </div>
          <select
            className="mt-2  text-gray-500
            w-[33rem] pl-2  md:py-2 border border-black rounded-md text-xs md:text-sm shadow-sm bg-white focus:outline-none focus:border-sky-500"
          >
            <option value="" className="" disabled hidden>
              All
            </option>
            <option value="All">
              Ordum
            </option>
            <option value="Option 1">Option 2</option>
            <option value="Option 2">Option 3</option>
          </select>

          <span className="mt-1.5 block text-xs max-w-[26rem]">
            This account does not have a verified identity. Please visit
            <span className="underline">this link</span> to learn how to do so,
            it will increase your credibility.
          </span>

          <label className="mt-4 text-xl flex">
            <span>Project Type </span>
          </label>
          <select
            className="mt-2  text-gray-500
            w-[33rem] pl-2  md:py-2 border border-black rounded-md text-xs md:text-sm shadow-sm bg-white focus:outline-none focus:border-sky-500"
          >
            <option value="" className="" disabled hidden>
              All
            </option>
            <option value="All">
              <div className="border rounded bg-black" /> Govenance
            </option>
            <option value="Option 1">Option 2</option>
            <option value="Option 2">Option 3</option>
          </select>

          <label className="mt-4 text-xl flex">
            <span>Track</span>
          </label>
          <select
            className="mt-2  text-gray-500
            w-[33rem] pl-2  md:py-2 border border-black rounded-md text-xs md:text-sm shadow-sm bg-white focus:outline-none focus:border-sky-500"
          >
            <option value="" className="" disabled hidden>
              All
            </option>
            <option value="All">{`Eg. Big Spender (>XXXX KSM)`}</option>
            <option value="Option 1">Option 2</option>
            <option value="Option 2">Option 3</option>
          </select>

          <label className="mt-4 text-xl flex">
            <span>Contact</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Email"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Proposal Name</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Name your propolsal"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Date</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="DD/MM/YY"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Funding Amount</span>
          </label>
          <div className="mt-2 flex flex-row justify-between">
            <input
              className="text-gray-500 w-[23rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
              placeholder="KSM"
              type="text"
            />
            <button className="bg-black text-white border rounded px-10">
              Calculate
            </button>
          </div>

          <label className="mt-4 text-xl flex">
            <span>Duration</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. 4 months"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Short description</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Describe your project in a few sentences. Max XXXX characters.&#10; 
            Suggested format:&#10; 
            
            #Problem 
            
            #Solution 
            
            #How you aim to get there? 
            
            #Deliverables(what will you deliver?)
            
            ---> TBC with surveys and community "
          />

          <label className="mt-4 text-xl flex">
            <span>If you have seen similar before: why is yours different</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Are there any similar or competing projects in the ecosystem or outside of it? If so, how is yours different. "
          />

          <label className="mt-4 text-xl flex">
            <span>Add external links</span>
          </label>
          <div className="mt-2 flex flex-row justify-between">
            <input
              className="text-gray-500 w-[23rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
              placeholder="eg Gihub, Figma"
              type="text"
            />
            <button className="bg-black text-white border rounded px-10">
              Add Link
            </button>
          </div>


          {/* Button Row - take one level up */}
          <div className="mt-10 flex flex-col gap-4">
            <button className="bg-black text-white py-2 md:py-4"
            onClick={()=> changePropolsalSubPage(2, "/submitproposal/context")}>
              Save and continue
            </button>
            <button className="bg-black text-white py-2 md:py-4"
            onClick={()=> changePropolsalSubPage(1, "/")}>
              Save draft and Close
            </button>
            <button className="bg-gray-400 text-white py-2 md:py-4"
            onClick={()=> changePropolsalSubPage(1, "/")}>
              Back
            </button>
          </div>


        </form>
      </div>
    </div>
  );
};

export default SubmitProposalTLDR;
