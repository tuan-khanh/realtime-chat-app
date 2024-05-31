export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

const _user1: IUser = {
  id: 1,
  name: "Khanh",
  avatar: "https://api.dicebear.com/8.x/adventurer/svg?seed=Scooter",
};

const _user2: IUser = {
  id: 2,
  name: "Other guy",
  avatar: "https://api.dicebear.com/8.x/adventurer/svg?seed=Cookie",
};

export { _user1, _user2 };
