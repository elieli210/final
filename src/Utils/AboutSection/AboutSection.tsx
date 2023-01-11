// React
import React from "react";
// React

type AboutSectionProps = {
  about: string;
  className?: string;
};

const AboutSection: React.FunctionComponent<AboutSectionProps> = ({
  about,
  className,
}) => {
  return (
    <div className="flex flex-row-reverse items-center justify-start mt-5">
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: "#FF5C01" }}
      ></span>
      <p className="w-full text-right mr-2">{about}</p>
    </div>
  );
};

export default AboutSection;
