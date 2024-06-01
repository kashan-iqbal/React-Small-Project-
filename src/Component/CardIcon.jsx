import { Icon } from "@chakra-ui/react";
import { HiDesktopComputer } from "react-icons/hi";
import { TbPlaystationSquare } from "react-icons/tb";
import { FaXbox } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { FaLinux } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
const CardIcon = ({ data }) => {
  const item = {
    PC: HiDesktopComputer,
    PlayStation: TbPlaystationSquare,
    Xbox: FaXbox,
    Apple_Macintos: RiAppleLine,
    Linux: FaLinux,
    Nintendo: BsNintendoSwitch,
  };

  let itemIcom = item[data];

  if (!itemIcom) {
    itemIcom = item.Apple_Macintos;
  }

  return (
    <>
      {data.length > 0 &&
        data.map((d,i) => {
          if (!d) {
            d = item.Apple_Macintos;
          }

          return <Icon key={i}  as={item[d]} />;
        })}
    </>
  );
};

export default CardIcon;
