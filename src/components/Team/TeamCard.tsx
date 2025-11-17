import {
  RiFacebookLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterXLine,
} from "react-icons/ri";
import Plus from "../UI/Plus";

type Props = {
  name: string;
  position: string;
  imgSrc: string;
};

function TeamCard({ name, position, imgSrc }: Props) {
  return (
    <div className="group bg-secondary hover:shadow-secondary hover:before:text-primary relative z-1 flex h-auto w-full flex-col justify-start p-5 transition-all duration-600">
      <Plus />
      <div className="flex-col-center space-y-1.5">
        <img src={imgSrc} alt={name} className="mx-auto my-2 w-[80%]" />
        <h3 className="font-verdana text-center text-lg font-light lg:text-xl">
          {name}
          <small className="text-primary relative block text-center text-sm lg:text-lg">
            {position}
          </small>
        </h3>
      </div>
      {/* social links */}
      <div className="flex-center mt-7.5 mb-4 gap-4 text-lg">
        <RiFacebookLine className="bg-primary flex-center hover:shadow-social h-10 w-10 items-center rounded-full p-2 font-semibold text-stone-900 transition-all duration-600 hover:-translate-y-[5px] hover:text-white" />
        <RiInstagramLine className="bg-primary flex-center hover:shadow-social h-10 w-10 items-center rounded-full p-2 font-semibold text-stone-900 transition-all duration-600 hover:-translate-y-[5px] hover:text-white" />
        <RiYoutubeLine className="bg-primary flex-center hover:shadow-social h-10 w-10 items-center rounded-full p-2 font-semibold text-stone-900 transition-all duration-600 hover:-translate-y-[5px] hover:text-white" />
        <RiTwitterXLine className="bg-primary flex-center hover:shadow-social h-10 w-10 items-center rounded-full p-2 font-semibold text-stone-900 transition-all duration-600 hover:-translate-y-[5px] hover:text-white" />
      </div>
    </div>
  );
}

export default TeamCard;
