import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavItem } from "./INavItem";



function NavItem({ item }: { item: INavItem }) {
  const { path, icon, title } = item;
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={
        "flex items-center px-5 py-3 justify-center md:justify-start" +
        (pathname === path
          ? " bg-sidebar-bgActive text-sidebar-active border-r-2 border-r-[#6b32ec]"
          : " hover:bg-sidebar-bgActive hover:text-sidebar-active") +
        " transition ease-in-out duration-300 hover:animate-bounce hover:delay-6000"
      }
    >
      <Tooltip title={title}>
        <FontAwesomeIcon icon={icon} />
      </Tooltip>

      <p className="hidden md:block ml-2">{title}</p>
    </Link>
  );
}

export default NavItem;
