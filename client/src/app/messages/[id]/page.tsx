"use client";

import {
  _conversation,
  _messages,
} from "@/components/conversation/IConversation";
import { _user1, _user2 } from "@/components/user/IUser";
import {
  faCircleInfo,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useImmer } from "use-immer";

function ConversationPage() {
  const params = useParams();
  const [conversation, setConservation] = useImmer(_conversation);
  const [messages, setMessages] = useImmer(_messages);
  const [currentUser, setCurrentUser] = useImmer(_user1);

  const avatars = () => {
    const { participants } = conversation;
    if (participants.length <= 2) {
      const user = participants.find((e) => e.id != currentUser.id);
      return <Avatar alt={user?.name} src={user?.avatar}></Avatar>;
    }
    return (
      <AvatarGroup max={4}>
        {participants.map((item) => (
          <Avatar key={item.id} src={item.avatar} alt={item.name}></Avatar>
        ))}
      </AvatarGroup>
    );
  };
  return (
    <Box className="bg-white h-screen">
      <Box className="flex px-4 h-[4.5rem] items-center sticky">
        <Box className="flex flex-1 items-center">
          {avatars()}
          <Typography variant="h6" className="ml-3">
            {_user2.name}
          </Typography>
        </Box>
        <Box className="flex-none">
          <IconButton color="primary" size="medium" className="mx-1">
            <FontAwesomeIcon icon={faPhone} />
          </IconButton>
          <IconButton color="primary" size="medium" className="mx-1">
            <FontAwesomeIcon icon={faVideo} />
          </IconButton>
          <IconButton color="primary" size="medium" className="mx-1">
            <FontAwesomeIcon icon={faCircleInfo} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ConversationPage;
