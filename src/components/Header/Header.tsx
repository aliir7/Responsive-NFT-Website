import { RiLinksLine, RiWalletLine } from "react-icons/ri";
import Button from "../UI/Button";
import heroImg from "../../assets/hero-img.png";

function Header() {
  return (
    <section className="section-wrapper bg-img relative z-1 flex flex-col items-start bg-cover bg-center pt-[100px]">
      {/* overlay مثل ::after */}
      <div className="absolute inset-0 z-[-1] bg-[#040b114d]" />

      {/* محتوای هدر */}
      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
        {/* متن سمت چپ */}
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-4xl leading-tight font-bold">
            With <span className="text-primary">Nox</span> <br />
            Explore NFT <br /> Collection
          </h2>
          <p className="max-w-md text-stone-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            praesentium id. Magnam atque aperiam eveniet. Similique deserunt
            corrupti vero labore!
          </p>

          <div className="mt-6 flex gap-6 text-lg">
            <p>
              <span className="text-primary font-bold">2021+</span> Clients
            </p>
            <p>
              <span className="text-primary font-bold">20000+</span> Whitelist
              Profiles
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <Button icon={<RiWalletLine />} variant="primary" size="md">
              Connect Wallet
            </Button>
            <Button icon={<RiLinksLine />} variant="outline" size="md">
              Whitelist Now
            </Button>
          </div>
        </div>

        {/* تصویر سمت راست */}
        <div className="mt-10 lg:mt-0">
          <img
            src={heroImg}
            alt="hero-image"
            className="max-w-[400px] lg:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
