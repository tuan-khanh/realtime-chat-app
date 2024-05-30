"use client";

import { Avatar, Box, Container } from "@mui/material";
import { useState } from "react";
import { ISimpleConversation } from "./ISimpleConservation";

const defaultConversationAvatar =
  "https://api.dicebear.com/8.x/adventurer/svg?seed=Whiskers";

function SimpleConversationItem({
  conservationItem,
  afterSelected,
	selected = false
}: Readonly<{
  conservationItem: ISimpleConversation;
  afterSelected?: any;
	selected?: boolean
}>) {
  const { id, title, avatar, lastMessage, type } = conservationItem;
  return (
    <Box
      className={
        "flex items-center hover:bg-slate-200 py-2 rounded-xl" +
        (selected ? " bg-slate-200" : "")
      }
    >
      <Avatar
        src={avatar ? avatar : defaultConversationAvatar}
        className="w-max"
      ></Avatar>
      <Container>
        <p>{title}</p>
        <p>{lastMessage}</p>
      </Container>
    </Box>
  );
}

export default SimpleConversationItem;
