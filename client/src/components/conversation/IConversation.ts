import { IMessage, MessageStatus } from "../message/IMessage";
import { IUser, _user1, _user2 } from "../user/IUser";

export interface IConversation {
  id?: number;
  participants: IUser[];
  title?: string;
}

export const _conversation = {
  id: 1,
  participants: [_user1, _user2],
  title: "",
};

export const _messages: IMessage[] = [
  {
    id: Math.floor(Math.random() * 100),
    conservationId: 1,
    content: "Messages",
    from: _user1,
    sentAt: new Date(),
    status: MessageStatus.Sent,
  },
  {
    id: Math.floor(Math.random() * 100),
    conservationId: 1,
    content: "Messages",
    from: _user2,
    sentAt: new Date(),
    status: MessageStatus.Sent,
  },
];
