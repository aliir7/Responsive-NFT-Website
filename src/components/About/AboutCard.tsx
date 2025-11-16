import Plus from "../UI/Plus";

type Props = {
  title: string;
  desc: string;
  className?: string;
  count?: number;
};

function AboutCard({ title, desc, className, count }: Props) {
  return (
    <div
      className={`group bg-secondary hover:shadow-secondary hover:before:text-primary relative z-1 flex h-auto w-auto flex-col gap-4 px-5 py-11 pt-10 transition-all duration-600 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:-z-1 before:-translate-x-1/2 before:text-[150px] before:leading-[120px] before:font-bold before:text-[#21e7876d] before:content-[attr(data-count)] ${className}`}
      data-count={count}
    >
      <Plus />
      <h3 className="z-2 text-center text-xl font-medium">{title}</h3>
      <p className="font-verdana z-2 text-center text-sm leading-6 font-medium text-white/50">
        {desc}
      </p>
    </div>
  );
}

export default AboutCard;
