import { CiMail } from "react-icons/ci";
import { RiWhatsappFill } from "react-icons/ri";

export default function QuoteComponent() {
  return (
    <div>
      <h1>Let's build something together</h1>
      <p>
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>
      <p>
        <CiMail /> alfian.jw@gmail.com | <RiWhatsappFill color="green" />
        +62 8133-143-154
      </p>
    </div>
  );
}
