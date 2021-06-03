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
  About = 'About',
  Password='Password',

  Result = 'Result',

  Detail = 'Detail',
  Edit = 'Edit',
}

export type RootStackParamList = {
  [SCREEN.Start]: undefined;

  [SCREEN.Camera]: undefined;
  [SCREEN.Settings]: undefined;
  [SCREEN.Pictures]: undefined;

  [SCREEN.Detail]: {  id: string;
    img: string;}

  [SCREEN.SignIn]: undefined;
  [SCREEN.SignUp]: undefined;
  
  [SCREEN.Language]: undefined;
  [SCREEN.About]: undefined;
  [SCREEN.Profile]: undefined;
  [SCREEN.Password]: undefined;
};
