import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';

import KakaoLogo from '@assets/signIn/kakaoLogo.svg';
import AppleLogo from '@assets/signIn/appleLogo.svg';
import { SignInScreenProps } from '@type/param/stack';

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const toOnBoard = () => {
    navigation.navigate('OnBoardScreen');
  };

  const toCozyHome = () => {
    navigation.navigate('CozyHomeScreen');
  };

  const toRoomMate = () => {
    navigation.navigate('RoomMateScreen');
  };

  const toCreateRoom = () => {
    navigation.navigate('CreateRoomScreen');
  };

  const toUserDetail = () => {
    navigation.navigate('UserDetailScreen');
  };

  const toTodoList = () => {
    navigation.navigate('TodoListScreen');
  };

  const toUserInfoScreen = () => {
    navigation.navigate('UserInfoScreen');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 mx-6">
        <View className="items-center justify-center flex-1">
          <View className="flex-row mb-[7px]">
            <Text className="text-[42px] font-extrabold">
              <Text className="text-[#FFE28B]">cozy</Text>
              <Text className="text-[#BDD8FF]">mate</Text>
            </Text>
          </View>
          <Text className="text-basicFont text-[13.5px] font-semibold font-['SF_HambakSnow']">
            “룸메이트와 함께 만드는 우리의 편안한 공간”
          </Text>
        </View>

        <View className="mx-3 mb-4">
          <Pressable
            className="flex-row justify-center items-center rounded-[33px] bg-kakaoyellow px-6 py-4"
            onPress={toOnBoard}
          >
            <KakaoLogo className="mr-2" />
            <Text className="font-semibold text-black opacity-85">온보딩 스크린</Text>
          </Pressable>
        </View>

        <View className="mx-3 mb-4">
          <Pressable
            className="flex-row justify-center items-center rounded-[33px] bg-navergreen px-6 py-4"
            onPress={toCozyHome}
          >
            <Text className="font-semibold text-black opacity-85">홈 스크린</Text>
          </Pressable>
        </View>

        <View className="mx-3 mb-4">
          <Pressable
            className="flex-row justify-center items-center rounded-[33px] bg-navergreen px-6 py-4"
            onPress={toRoomMate}
          >
            <Text className="font-semibold text-black opacity-85">룸메이트 스크린</Text>
          </Pressable>
        </View>

        <View className="mx-3 mb-4">
          <Pressable
            className="flex-row items-center rounded-[33px] bg-appleblack px-[96px] py-[14px]"
            onPress={toCreateRoom}
          >
            <AppleLogo className="mr-2" />
            <Text className="font-semibold text-center text-white">방 생성하기 스크린</Text>
          </Pressable>
        </View>

        <View className="mx-3 mb-4">
          <Pressable
            className="flex-row items-center rounded-[33px] bg-appleblack px-[96px] py-[14px]"
            onPress={toTodoList}
          >
            <AppleLogo className="mr-2" />
            <Text className="font-semibold text-center text-white">투두리스트 스크린</Text>
          </Pressable>
        </View>

        <View className="mx-3 mb-4">
          <Pressable
            className="flex-row items-center rounded-[33px] bg-appleblack px-[96px] py-[14px]"
            onPress={toUserDetail}
          >
            <AppleLogo className="mr-2" />
            <Text className="font-semibold text-center text-white">상세 스크린</Text>
          </Pressable>
        </View>

        <View className="mx-3 mb-11">
          <Pressable
            className="flex-row items-center rounded-[33px] bg-appleblack px-[96px] py-[14px]"
            onPress={toUserInfoScreen}
          >
            <AppleLogo className="mr-2" />
            <Text className="font-semibold text-center text-white">상세 스크린</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
