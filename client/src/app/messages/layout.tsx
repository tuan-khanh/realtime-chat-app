"use client";
import { Box } from "@mui/material";

function MessagesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Box className="h-screen">{children}</Box>;
}

export default MessagesLayout;
