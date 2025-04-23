import Image from "next/image";

export default function WorkExperienceComponent() {
  return (
    <div>
      <h1>Work Experience</h1>
      <div className="flex flex-row border-2 ">
        {/* Image */}
        <div>
          <Image
            src="/profile.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        {/* Content Experience */}
        <div>
          <div className="flex justify-self-end">
            <div>
              <p>Mentor Full Stack Web Developer</p>
              <p>DumbWays Indonesia</p>
            </div>
            <p>Oct 2022 - Present</p>
          </div>
          <div>
            <ul>
              <li>Mentoring students in Full Stack Development bootcamp</li>
              <li>Mentoring students in Full Stack Development bootcamp</li>
            </ul>
          </div>
        </div>
        {/* Stack */}
        <div>
          <p className="bg-gray-400 rounded-2xl">javascript</p>
        </div>
      </div>
    </div>
  );
}
