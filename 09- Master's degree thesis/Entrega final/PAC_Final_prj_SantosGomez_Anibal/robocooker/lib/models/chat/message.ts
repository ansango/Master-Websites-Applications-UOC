type Message = {
  _id: MessageId;
  chatId: ChatId;
  sender: UserId;
  content: Content;
  created: Date;
};

export { type Message };
