import React from 'react'
import * as RiReactIcons from "react-icons/ri";
import {RiImageLine} from "react-icons/ri";
import * as BsReactIcons from "react-icons/bs";
import * as BiReactIcons from "react-icons/bi";

const DynamicIcon = ({ iconName }) => {
    let IconComponent = null;

    if (iconName.startsWith("Ri")) {
      IconComponent = RiReactIcons[iconName];
    } else if (iconName.startsWith("Bs")) {
      IconComponent = BsReactIcons[iconName];
    } else if (iconName.startsWith("Bi")) {
      IconComponent = BiReactIcons[iconName];
    }

    if (IconComponent) {
      return <div>{<IconComponent />}</div>;
    } else {
      return <RiImageLine/>;
    }
}

export default DynamicIcon