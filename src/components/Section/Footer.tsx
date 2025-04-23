import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer className="py-8 text-center text-gray-600  text-sm border-t border-gray-200 ">
      <p>© 2025 Designed and coded with ❤️ by Alfiandi Rizki</p>
      <div className="flex justify-center space-x-4 mt-4">
        <FaGithub size={"20px"} />
        <FaLinkedin size={"20px"} />
      </div>
    </footer>
  );
}
