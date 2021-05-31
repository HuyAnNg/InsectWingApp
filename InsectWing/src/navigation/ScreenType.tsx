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

  Result = 'Result',

  Detail = 'Detail',
  Edit = 'Edit',
}

export type RootStackParamList = {
  [SCREEN.Start]: undefined;

  [SCREEN.Detail]: undefined;
  [SCREEN.Camera]: undefined;
  [SCREEN.Settings]: undefined;
  [SCREEN.Pictures]: undefined;

  [SCREEN.SignIn]: undefined;
  [SCREEN.SignUp]: undefined;
  
  [SCREEN.Language]: undefined;
  [SCREEN.About]: undefined;
  [SCREEN.Profile]: undefined;
};
