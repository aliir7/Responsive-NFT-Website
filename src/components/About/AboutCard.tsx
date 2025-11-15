type Props = {
  title: string;
  desc: string;
  className?: string;
};

function AboutCard({ title, desc, className }: Props) {
  return (
    <div
      className={`group bg-secondary hover:shadow-secondary relative flex h-auto w-auto flex-col gap-4 px-5 py-11 transition-all duration-600 ${className}`}
    >
      {/* Top Left + */}
      <span className="bg-primary absolute top-0 left-0 h-1.5 w-[50px] opacity-0 transition-all duration-600 group-hover:opacity-100" />
      <span className="bg-primary absolute top-0 left-0 h-[50px] w-1.5 opacity-0 transition-all duration-600 group-hover:opacity-100" />

      {/* Bottom Right + */}
      <span className="bg-primary absolute right-0 bottom-0 h-1.5 w-[50px] opacity-0 transition-all duration-600 group-hover:opacity-100" />
      <span className="bg-primary absolute right-0 bottom-0 h-[50px] w-1.5 opacity-0 transition-all duration-600 group-hover:opacity-100" />

      <h3 className="text-xl font-medium">{title}</h3>
      <p className="font-verdana text-sm leading-6 font-medium">{desc}</p>
    </div>
  );
}

export default AboutCard;
