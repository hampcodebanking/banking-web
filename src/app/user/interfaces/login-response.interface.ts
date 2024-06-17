import { Profile } from "./profile.interface";

export interface LoginResponse {
  token: string;
  user: Profile
}