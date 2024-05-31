"use client";
import { ISimpleConversation } from "@/components/conversation/ISimpleConservation";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useImmer } from "use-immer";
import { _conservations } from "./conversations";
import SimpleConversationItem from "@/components/conversation/simple-conservation-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function MessagesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [conservations, setConservations] = useImmer(
    [] as ISimpleConversation[]
  );
  const [selectedConservationId, setSelectedConservationId] = useState(-1);
  React.useEffect(() => {
    setConservations(_conservations);
  }, [setConservations]);
  return (
    <Box className="h-screen flex">
      <Stack
        className="w-96 bg-white h-screen px-4 overflow-hidden"
        spacing={2}
      >
        <Box className="pt-8 flex items-end justify-between">
          <Typography variant="h5" className="font-semibold">
            Conversations
          </Typography>
          <IconButton aria-label="Start new chat" className="text-primary">
            <Tooltip title="New message">
              <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </Tooltip>
          </IconButton>
        </Box>
        <Box>
          <Paper className="flex items-center w-full p-1 rounded-2xl overflow-hidden ">
            <SearchRoundedIcon></SearchRoundedIcon>
            <InputBase
              id="filled-adornment-amount"
              className="w-full flex-1 ml-1"
              placeholder="Search in Messenger"
            ></InputBase>
          </Paper>
        </Box>
        <Box>
          <Typography variant="subtitle1" className="font-semibold py-2">
            Messages
          </Typography>
          <Box className="h-full">
            {conservations.map((item, index) => (
              <Button
                variant="text"
                key={`${item.id}${index}`}
                onClick={() => setSelectedConservationId(item.id)}
                className={
                  "w-full justify-start hover:bg-slate-300" +
                  (selectedConservationId === item.id ? " bg-slate-300" : "")
                }
              >
                <SimpleConversationItem
                  conservationItem={item}
                  selected={selectedConservationId === item.id}
                ></SimpleConversationItem>
              </Button>
            ))}
          </Box>
        </Box>
      </Stack>
      {children}
    </Box>
  );
}

export default MessagesLayout;
