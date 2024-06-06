import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex h-[800px] bg-[hsl(0,0%,95%)]">
        <div className="mx-auto flex w-full max-w-[1440px] justify-between">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-3xl font-normal">Classic Exclusive</h1>
              <h2 className="text-5xl font-bold text-primary-500">
                Women Collections
              </h2>
              <h2 className="text-2xl text-primary-400">UPIO 40% off</h2>
              <Button>Shop Now!</Button>
            </div>
          </div>
          <div className="relative hidden min-w-[590px] overflow-hidden lg:flex">
            <Image
              alt="hero"
              className="relative z-[1]"
              height={880}
              src={"/Hero.png"}
              width={590}
            ></Image>
            <div className="absolute left-3 mt-14 h-[600px] w-[500px] border-[20px] border-b-0 border-white bg-transparent"></div>
            <div className="absolute bottom-8 left-3 z-[2] h-[600px] w-[500px] border-[20px] border-t-0 border-white bg-transparent"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
