import { RiLinksLine, RiWalletLine } from "react-icons/ri";
import Button from "../UI/Button";
import heroImg from "../../assets/hero-img.png";
import element1 from "../../assets/element-star.png";
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <section className="section-wrapper bg-img relative z-1 flex flex-col items-start bg-cover bg-center bg-no-repeat pt-[120px] sm:pt-[140px]">
      {/* overlay نیمه‌شفاف */}
      <div className="absolute inset-0 z-[-1] bg-[#040b114d]" />

      {/* گرادیانت — حالت نیم‌دایره در موبایل، کشیده‌تر در دسکتاپ */}
      <span className="bg-darkGradient lg:rounded-50 absolute top-0 left-1/2 z-[-2] h-[300px] w-[90%] -translate-x-1/2 rounded-b-full from-10% to-transparent opacity-50 sm:h-[400px] md:w-[600px] lg:h-[480px] lg:w-[780px]" />

      {/* محتوای هدر */}
      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
        {/* متن سمت چپ */}
        <div className="order-2 mt-8 flex w-full flex-col items-center gap-5 text-center text-white lg:order-1 lg:mt-0 lg:w-1/2 lg:items-start lg:text-left">
          <h2 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            With{" "}
            <span className="text-primary from-primary/80 to-primary/35 ml-1 bg-linear-270 bg-clip-text fill-transparent">
              <ReactTyped
                strings={["NOXSTAR", "BOXNFT", "NFTBOX"]}
                typeSpeed={30}
                backSpeed={60}
                loop={true}
              />
            </span>{" "}
            <br />
            Explore NFT <br /> Collection
          </h2>

          <p className="font-verdana w-11/12 max-w-md text-base font-semibold text-stone-300 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            praesentium id. Magnam atque aperiam eveniet. Similique deserunt
            corrupti vero labore!
          </p>

          <div className="mt-6 flex w-full justify-center gap-10 text-base sm:text-lg lg:justify-start">
            <p className="flex-center-col w-fit text-xl text-shadow-lg lg:text-3xl">
              <span className="text-primary font-medium">2021+</span> Clients
            </p>
            <p className="flex-center-col w-fit text-xl text-shadow-lg lg:text-3xl">
              <span className="text-primary font-medium">20000+</span> Whitelist
              Profiles
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-5 flex w-full flex-col gap-4 sm:gap-5 md:w-fit md:flex-row lg:h-14">
            <Button icon={<RiWalletLine />} variant="primary" size="md">
              Connect Wallet
            </Button>
            <Button icon={<RiLinksLine />} variant="outline" size="md">
              Whitelist Now
            </Button>
          </div>
        </div>

        {/* تصویر سمت راست */}
        <div className="relative order-1 mt-5 w-4/5 sm:w-3/4 md:w-1/2 lg:order-2 lg:mt-0">
          <img
            src={heroImg}
            alt="hero-image"
            className="animate-rightLeft-4 w-full max-w-[360px] duration-500 sm:max-w-[420px] lg:max-w-[500px]"
          />
          <img
            src={element1}
            alt="element-star"
            className="animate-rightLeft absolute top-10 left-0 w-24 sm:w-28 md:w-30"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
