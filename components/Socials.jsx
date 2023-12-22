import React from "react";
import Link from "next/link";
import DynamicIcon from "./DynamicIcon";

const Socials = ({ containerStyle, iconsStyles, social }) => {
  return (
    <div className={`${containerStyle}`}>
      {social.map((social, index) => {
        return (
          <Link href={social.path} target="_blank" key={index}>
            <div className={`${iconsStyles}`}>
              <DynamicIcon iconName={social.icon} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
