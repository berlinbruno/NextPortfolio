import * as bsIcons from "react-icons/bs";
import * as aiIcons from "react-icons/ai";
import * as biIcons from "react-icons/bi";
import * as giIcons from "react-icons/gi";
import * as faIcons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import * as riIcons from "react-icons/ri";

const GetIcon = ({ icon, className }) => {
  const getIcon = (iconName) => {
    const iconsMap = new Map();
    iconsMap.set("Bs", bsIcons);
    iconsMap.set("Ai", aiIcons);
    iconsMap.set("Bi", biIcons);
    iconsMap.set("Gi", giIcons);
    iconsMap.set("Fa", faIcons);
    iconsMap.set("Tb", tbIcons);
    iconsMap.set("Ri", riIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  console.log(icons.get(icon))
  const TheIcon = icons[icon];

  return TheIcon({ className });
};

export default GetIcon;
