import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignInScreen: undefined;
  OnBoardScreen: undefined;
  RoomMateScreen: undefined;
  CreateRoomScreen: undefined;
  UserDetailScreen: undefined;
};

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;
export type OnBoardScreenProps = NativeStackScreenProps<RootStackParamList, 'OnBoardScreen'>;
export type RoomMateScreenProps = NativeStackScreenProps<RootStackParamList, 'RoomMateScreen'>;
export type CreateRoomScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateRoomScreen'>;
export type UserDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'UserDetailScreen'>;