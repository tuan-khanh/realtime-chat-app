import { Box, Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realtime chat app",
  description: "Generated by create next app",
};

function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{ bgcolor: "#E3E7FF" }}
      component={"section"}
      className="h-screen flex items-center justify-center "
    >
      {children}
    </Box>
  );
}

export default LoginLayout;
