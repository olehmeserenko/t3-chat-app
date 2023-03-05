const PLACEHOLDER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg";

const users = [
  { id: "5", name: "Jill", image: PLACEHOLDER_IMAGE, username: "jill" },
  { id: "6", name: "Jam", image: PLACEHOLDER_IMAGE, username: "jam" },
  {
    id: "3",
    name: "John Hen",
    image: PLACEHOLDER_IMAGE,
    username: "johnhen",
  },
];

const messages = [
  {
    id: "1",
    messageText: "Hello, world! gjaijeigjiejgiajei",
    userId: "3",
    createdAt: new Date(),
  },
  { id: "2", messageText: "Hi", userId: "1", createdAt: new Date() },
];

const conversations = [
  {
    userId: "1",
    conversation: {
      id: "2",
      conversationUsers: [
        { id: "1", name: "Me", image: PLACEHOLDER_IMAGE, username: "me" },
        {
          id: "3",
          name: "John Doe",
          image: PLACEHOLDER_IMAGE,
          username: "john",
        },
      ],
      messages: [{ id: "4", messageText: 'Hello, "John Doe"!' }],
    },
  },
];

export { PLACEHOLDER_IMAGE, users, messages, conversations };
