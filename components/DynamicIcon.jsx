import React from 'react'
import {RiImageLine} from "react-icons/ri";
import dynamic from "next/dynamic";

const DynamicIcon = ({ iconName }) => {
    let IconComponent = null;

    if (iconName.startsWith("Ri")) {
      const RiReactIcons = dynamic(() => import("react-icons/ri").then((mod) => mod[iconName]))
      IconComponent = RiReactIcons;
    }

    if (IconComponent) {
      return <div>{<IconComponent />}</div>;
    } else {
      return <RiImageLine/>;
    }
}

export default DynamicIcon