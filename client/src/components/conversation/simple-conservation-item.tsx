"use client";

import { Avatar, Box, Container } from "@mui/material";
import { ISimpleConversation } from "./ISimpleConservation";

const defaultConversationAvatar =
  "https://api.dicebear.com/8.x/adventurer/svg?seed=Whiskers";

function SimpleConversationItem({
  conservationItem,
  selected = false,
}: Readonly<{
  conservationItem: ISimpleConversation;
  selected?: boolean;
}>) {
  const { id, title, avatar, lastMessage, type } = conservationItem;
  return (
    <Box className={"flex items-center py-2 rounded-xl flex-1"}>
      <Avatar
        src={avatar ? avatar : defaultConversationAvatar}
        className="w-16 h-16 flex-none"
      ></Avatar>
      <Container component="section" className="text-left flex-1">
        <p className="text-slate-950 normal-case">{title}</p>
        <p className="text-slate-500 normal-case">{lastMessage}</p>
      </Container>
    </Box>
  );
}

export default SimpleConversationItem;
