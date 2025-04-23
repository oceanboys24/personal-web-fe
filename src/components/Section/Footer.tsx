import { MdCopyright } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <div className="p-10 border-t-2">
      <p>
        <MdCopyright /> 2025 Designed and coded with <FaHeart color="red" />
        by Muhammad Alfiandi Rizki
      </p>
      <p>
        <FaGithub />
        <FaLinkedin />
      </p>
    </div>
  );
}
