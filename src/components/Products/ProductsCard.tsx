import Plus from "../UI/Plus";

type Props = {
  title: string;
  imgSrc: string;
};

function ProductsCard({ title, imgSrc }: Props) {
  return (
    <div className="bg-secondary hover:text-primary group hover:shadow-secondary relative z-1 flex h-auto w-auto flex-col gap-4 px-7.5 py-5">
      <Plus />
      <img src={imgSrc} alt={title} className="h-75 w-full object-cover" />
      <h3 className="hover:text-primary text-center">{title}</h3>
    </div>
  );
}

export default ProductsCard;
