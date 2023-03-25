import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl text-[red] font-bold underline">Hello global world!</h1>
    </main>
  );
}
