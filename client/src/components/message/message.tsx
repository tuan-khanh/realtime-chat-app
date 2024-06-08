import { IMessage } from "./IMessage";

function Message({
  message,
  className,
}: {
  message: IMessage;
  className: string;
}) {
  return (
    <p
      className={
        "rounded-xl md:max-w-96 xs:max-w-60 py-2 px-4 mb-2 w-fit break-words" +
        " " +
        className
      }
    >
      {message.content}
    </p>
  );
}

export default Message;
