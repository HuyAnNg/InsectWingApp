import { image } from "../model/Item";

export enum SCREEN {
  Start = 'Start',

  Camera = 'Camera',
  Settings = 'Settings',
  Pictures = 'Pictures',

  SignIn = 'SignIn',
  SignUp = 'SignUp',

  Language = 'Language',
  Profile = 'Profile',
  editProfile='editProfile',
  showProfile='ShowProfile',
  About = 'About',
  Password='Password',

  Result = 'Result',

  
}

export type RootStackParamList = {
  [SCREEN.Start]: undefined;

  [SCREEN.Camera]: undefined;
  [SCREEN.Settings]: undefined;
  [SCREEN.Pictures]: undefined;

  [SCREEN.SignIn]: undefined;
  [SCREEN.SignUp]: undefined;
  
  [SCREEN.Language]: undefined;
  [SCREEN.About]: undefined;
  [SCREEN.Profile]: undefined;
  [SCREEN.showProfile]:undefined;
  [SCREEN.editProfile]:undefined;
  [SCREEN.Password]: undefined;
};
