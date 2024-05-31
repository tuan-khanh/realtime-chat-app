"use client";

import { ISimpleConversation } from "@/components/conversation/ISimpleConservation";
import SimpleConversationItem from "@/components/conversation/simple-conservation-item";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useImmer } from "use-immer";

const _conservations = new Array<ISimpleConversation>(20).fill({
  id: Math.floor(Math.random() * 100),
  title: "" + Math.floor(Math.random() * 100),
  avatar: "https://api.dicebear.com/8.x/adventurer/svg?seed=Misty",
  lastMessage: "Last message",
  type: 0,
});

function MessagesPage() {
  const [conservations, setConservations] = useImmer(_conservations);
  return (
    <Stack className="w-96 bg-white h-screen px-4 overflow-hidden" spacing={2}>
      <Box className="pt-10 flex items-end justify-between">
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
            <SimpleConversationItem
              key={`${item.id}${index}`}
              conservationItem={item}
            ></SimpleConversationItem>
          ))}
        </Box>
      </Box>
    </Stack>
  );
}

export default MessagesPage;
