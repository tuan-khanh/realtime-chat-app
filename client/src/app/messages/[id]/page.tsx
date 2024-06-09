"use client";

import {
  _conversation,
  _messages,
} from "@/components/conversation/IConversation";
import Message from "@/components/message/message";
import { _user1, _user2 } from "@/components/user/IUser";
import {
  faCircleInfo,
  faFaceSmile,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
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
    <Box className="bg-white h-screen flex flex-col pb-3">
      <Box className="flex px-4 h-[4.5rem] items-center border-b-2 flex-none">
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
      <Box className="flex-1 px-2 overflow-y-scroll relative">
        {messages.map((item, index) => (
          <Box
            key={index}
            className={
              "my-1 flex items-end " +
              (item.from.id !== currentUser.id
                ? "justify-start"
                : "justify-end")
            }
            component={"section"}
          >
            <Message
              key={item.id}
              message={item}
              className={
                item.from.id !== currentUser.id
                  ? "bg-slate-100 "
                  : "bg-sky-500 text-white "
              }
            ></Message>
            <Avatar
              src={item.from.avatar}
              className={
                (item.from.id !== currentUser.id
                  ? "order-first"
                  : "order-last") +
                (index < messages.length - 1 &&
                item.from.id == messages[index + 1].from.id
                  ? " hidden"
                  : "")
              }
            ></Avatar>
          </Box>
        ))}
      </Box>
      <Box className="flex-none px-2">
        <TextField
          placeholder="Message..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <FontAwesomeIcon icon={faFaceSmile} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="text" className="normal-case" color="primary">
                  Send
                </Button>
              </InputAdornment>
            ),
            className: "rounded-full",
            size: "small",
          }}
        />
      </Box>
    </Box>
  );
}

export default ConversationPage;
