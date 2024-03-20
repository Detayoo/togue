import { Header } from "@/components";

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto text-white px-10 m:px-0 h-screen">
        <Header />
        <div className="h-[90vh] overflow-y-auto m:px-10 py-5 text-sm"></div>
      </div>
    </div>
  );
}
