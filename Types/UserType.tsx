export interface userCardTypes {
  id: number;
  card_bg: string;
  avatar: string;
  name: string;
  userProfile: string;
  follower: string;
  following: string;
  totalPost: string;
}

export interface cardType {
  item: userCardTypes;
}
