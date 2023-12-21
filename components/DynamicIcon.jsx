import React from 'react'
import * as RiReactIcons from "react-icons/ri";
import {RiImageLine} from "react-icons/ri";

const DynamicIcon = ({ iconName }) => {
    let IconComponent = null;

    if (iconName.startsWith("Ri")) {
      IconComponent = RiReactIcons[iconName];
    }

    if (IconComponent) {
      return <div>{<IconComponent />}</div>;
    } else {
      return <RiImageLine/>;
    }
}

export default DynamicIcon