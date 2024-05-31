"use client";

import { faHome, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Box, Stack, Typography } from "@mui/material";
import NavItem from "./nav-item";
import { INavItem } from "./INavItem";

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
            <NavItem key={index} item={item} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Sidebar;
