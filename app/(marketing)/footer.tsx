import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly mt-4">
        <Button size="lg" variant="ghost" className="flex gap-2">
          <Image src="/tr.svg" alt="tr" width={30} height={42} />
          Turkiye
        </Button>
        <Button size="lg" variant="ghost" className="flex gap-2">
          <Image src="/fr.svg" alt="tr" width={30} height={42} />
          French
        </Button>
        <Button size="lg" variant="ghost" className="flex gap-2">
          <Image src="/es.svg" alt="tr" width={30} height={42} />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="flex gap-2">
          <Image src="/it.svg" alt="tr" width={30} height={42} />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="flex gap-2">
          <Image src="/jp.svg" alt="tr" width={30} height={42} />
          Japan
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
