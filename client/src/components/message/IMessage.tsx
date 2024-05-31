import { IUser } from "../user/IUser";

export interface IMessage {
  id: number;
  conservationId: number;
  content: string;
  from: IUser;
  sentAt: Date;
  status: MessageStatus;
}

export enum MessageStatus {
  Sending,
  Sent,
  Seen,
  Deleted,
}
