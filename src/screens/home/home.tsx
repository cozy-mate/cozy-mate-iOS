import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

import Background from '@assets/home/background.svg';
import StarImage from '@assets/home/star.svg';

import HomeIcon from '@assets/home/homeIcon.svg';
import CodeIcon from '@assets/home/codeIcon.svg';

import { HomeScreenProps } from '@type/param/stack';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const toRoomMain = () => {
    navigation.navigate('RoomMainScreen');
  };

  return (
    <View className="flex-1 bg-[#CADFFF]">
      <Background style={{ position: 'absolute' }} />
      <View className="flex items-center mt-[111px]">
        <View className="mb-[147px]">
          <Text className="text-base font-semibold text-center text-basicFont">
            아직 홈이 결성되지 않았어요
          </Text>
          <Text className="text-base font-semibold text-center text-basicFont">
            방을 생성하거나, 초대코드를 입력해주세요!
          </Text>
        </View>
      </View>

      <View className="flex-1 flex-col bg-white px-[26px] pt-[60px] rounded-t-[40px] relative">
        <View className="absolute top-[-110px] left-[115px]">
          <StarImage />
        </View>
        <View className="px-5 py-4 mb-4 border border-disabled rounded-xl">
          <Pressable className="flex-row">
            <View className="mr-3">
              <HomeIcon />
            </View>
            <View>
              <Text className="text-base font-semibold text-emphasizedFont">방 만들기</Text>
              <Text className="text-xs font-medium tracking-tight text-basicFont">
                룸메이트가 모일 커뮤니티 방을 만들어요!
              </Text>
            </View>
          </Pressable>
        </View>

        <View className="px-5 py-4 border border-disabled rounded-xl">
          <Pressable className="flex-row">
            <View className="mr-3">
              <CodeIcon />
            </View>
            <View className="flex flex-col">
              <Text className="text-base font-semibold text-emphasizedFont">초대코드 입력하기</Text>
              <Text className="text-xs font-medium tracking-tight text-basicFont">
                방장에게서 받은 코드로 커뮤니티 방에 입장할래요!
              </Text>
            </View>
          </Pressable>
        </View>

        {/* 네비게이션용 코드 */}
        <View className="px-5 py-4 border border-disabled rounded-xl">
          <Pressable className="flex-row" onPress={toRoomMain}>
            <View className="mr-3">
              <CodeIcon />
            </View>
            <View className="flex flex-col">
              <Text className="text-base font-semibold text-emphasizedFont">룸 메인으로 이동</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
