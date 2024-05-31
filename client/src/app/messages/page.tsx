"use client";

import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";

function NoSelectedConversationPage() {
  return (
    <Box className="bg-white flex justify-center items-center w-full flex-col">
      <FontAwesomeIcon icon={faFacebookMessenger} size="5x" className="mb-3" color="#6b32ec"/>
      <Typography variant="h6">
        Your messages
      </Typography>
      <Typography variant="body1" className="mb-2 text-slate-500">
        Send a message to start a chat
      </Typography>
      <Button variant="contained" className="mb-3 bg-[#6b32ec] opacity-85 hover:opacity-100 hover:bg-[#6b32ec]">
        Send message
      </Button>
    </Box>
  );
}

export default NoSelectedConversationPage;
