"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHome, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavItem {
  title: string;
  path: string;
  icon: IconProp;
}

const items: INavItem[] = [
  {
    title: "Home page",
    path: "/",
    icon: faHome,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: faMessage,
  },
];

function Sidebar() {
  const [selectedItem, setSelectedItem] = React.useState(items[0].title);
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <Box className="h-screen fixed top-0 left-0 w-20 md:w-64 bg-white shadow-lg shadow-indigo-500/40">
      {/* Logo */}
      <Box className="h-20">
        <Typography
          variant="h3"
          className="text-center mt-8 mb-10 font-semibold text-base sm:text-4xl"
        >
          Chat
        </Typography>
      </Box>
      {/* Nav items */}
      <Box component={"nav"}>
        <Stack>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={
                "flex items-center px-5 py-3 justify-center md:justify-start" +
                (pathname === item.path
                  ? " bg-sidebar-bgActive text-sidebar-active border-r-2 border-r-[#6b32ec]"
                  : " hover:bg-sidebar-bgActive hover:text-sidebar-active") +
                " transition ease-in-out duration-300 hover:animate-bounce hover:delay-6000"
              }
            >
              <Tooltip title={item.title}>
                <FontAwesomeIcon icon={item.icon} />
              </Tooltip>

              <p className="hidden md:block ml-2">{item.title}</p>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Sidebar;
