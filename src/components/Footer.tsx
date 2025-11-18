import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";
import Button from "./UI/Button";

function Footer() {
  return (
    <footer className="section-wrapper bg-img relative z-1 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
      {/* bg-overlay dark */}
      <span className="absolute top-0 left-0 -z-1 h-full w-full bg-[#040b11] opacity-80" />
      {/* Footer Title */}
      <div className="space-y-2">
        <h2 className="text-3xl font-medium">
          NOX<span className="text-primary ml-2">STAR</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex w-full flex-col gap-2">
        {/* Navigation Links */}
        <h3 className="text-primary mb-5 text-2xl font-medium">Subscribe</h3>
        <p>
          <a
            href="#"
            className="font-verdana my-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Home
          </a>
        </p>
        <p>
          <a
            href="#"
            className="font-verdana my-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            About
          </a>
        </p>
        <p>
          <a
            href="#"
            className="font-verdana my-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Our Team
          </a>
        </p>
        <p>
          <a
            href="#"
            className="font-verdana my-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Partners
          </a>
        </p>
      </div>
      {/* Community Links */}
      <div className="flex w-full flex-col gap-2">
        <h3 className="text-primary mb-5 text-2xl font-medium">Community</h3>
        <p>
          <a
            href="#"
            className="font-verdana my-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Subscribe
          </a>
        </p>
        <p>
          <a
            href="#"
            className="font-verdana my-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>
        </p>
        <p>
          <a
            href="#"
            className="font-verdana my-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Pricing
          </a>
        </p>
      </div>
      {/* Newsletter Section*/}
      <div className="flex w-full flex-col gap-2">
        <h3 className="text-primary mb-5 text-2xl font-medium">Follow Us</h3>
        <div className="flex h-11 w-full items-center gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="font-verdana focus:ring-primary h-full w-3/5 rounded-md border-none bg-black/10 px-2 text-xs text-white outline-none focus:ring-1"
          />
          <Button
            className="bg-primary! unset w-2/5! text-stone-900!"
            size="md"
          >
            Subscribe
          </Button>
        </div>
        {/* Social Links */}
        <div className="mt-7.5 flex cursor-pointer gap-4">
          <RiFacebookLine className="flex-center bg-primary h-10 w-10 rounded-full p-2 text-2xl text-stone-900" />
          <RiInstagramLine className="flex-center bg-primary h-10 w-10 rounded-full p-2 text-2xl text-stone-900" />
          <RiYoutubeLine className="flex-center bg-primary h-10 w-10 rounded-full p-2 text-2xl text-stone-900" />
          <RiTwitterXLine className="flex-center bg-primary h-10 w-10 rounded-full p-2 text-2xl text-stone-900" />
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-t-white/50 md:col-span-2 lg:col-span-4">
        <div>
          <p className="font-verdana mt-3 text-xs font-light text-white/50">
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.
            <br />
            <p className="pt-1 text-xs capitalize">
              design by:{" "}
              <a
                href="https://www.alirezaeii.ir/"
                target="_blank"
                className="hover:text-primary transition-all duration-500"
                aria-label="developer"
              >
                Ali Rezaei
              </a>
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
