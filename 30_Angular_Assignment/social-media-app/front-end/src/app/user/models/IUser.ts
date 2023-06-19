import { IPost } from "./IPost";


export interface IUser {
  name?: String;
  email: String;
  password: String;
  avatar?: String;
  cover_photo?: string,
  role?: string,
  organization?: string,
  nickName?: string,
  basic?: {
    gender: String,
    dob: Date;
    languages?: String[],
    aboutYou?: String,
    favouriteQuote?: String,
    nickName?: String
  }
  address?: {
    hometown: string,
    currentTown: string,
    city: String,
    state: String,
    country: String,
    currentState: String,
    homeState: String
  },
  contact?: {
    email?: string,
    primary: string,
    secondary?: string
  }
  education?: {
    college?: string,
    highSchool: string,
    school: string
  }
  work?: {
    role: string,
    organization: string,
    city: string,
    state: string
  },
  social?: {
    insta?: string,
    website?: string
    twitter?: string
  }
  followers?: string[],
  following?: string[],
  posts?: IPost[],

}

