import { CiMail } from "react-icons/ci";
import { RiWhatsappFill } from "react-icons/ri";

export default function QuoteComponent() {
  return (
    <div className="text-center mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Let's build something together
      </h2>
      <p className="text-gray-600 text-sm mb-8 dark:text-gray-400">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center">
        <div className="flex flex-row gap-2 justify-center items-center ">
            <CiMail /> alfian.jw@gmail.com
        </div>
        <span className="hidden md:inline">|</span>
        <div className="flex flex-row gap-2 justify-center items-center">
          <RiWhatsappFill className="text-green-500 dark:tex-white"  />
          +62 8133-143-154
        </div>
      </div>
    </div>
  );
}
