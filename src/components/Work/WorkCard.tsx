import Plus from "../UI/Plus";

type Props = {
  title: string;
  desc: string;
  imgSrc: string;
};

function WorkCard({ title, desc, imgSrc }: Props) {
  return (
    <div className="group bg-secondary hover:shadow-secondary hover:before:text-primary relative z-1 flex h-auto w-full flex-col justify-start p-5 transition-all duration-600">
      <Plus />
      <div className="space-y-2">
        <img
          src={imgSrc}
          alt={title}
          className="mb-4 object-cover pb-2"
          width={50}
          height={50}
        />
        <h3 className="mt-4 text-xl font-normal text-nowrap">{title}</h3>
        <p className="font-verdana text-sm leading-5 text-white/50">{desc}</p>
      </div>
    </div>
  );
}

export default WorkCard;
