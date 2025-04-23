import Marquee from "react-fast-marquee";

export default function StackComponent() {
  return (
    <div className=" px-15 mb-32">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Tech Stack - Tools I Use Everyday
      </h2>
      <Marquee direction="right">
        <div className="flex flex-col justify-center items-center mr-15">
          <div className="rounded-2xl mb-2 transform transition duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <img src="/stack/go.png" className="w-20" alt="Golang Logo" />
          </div>
          <span className="text-center">Golang</span>
        </div>
      </Marquee>
    </div>
  );
}
