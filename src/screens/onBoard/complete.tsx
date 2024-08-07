import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

import { useRecoilValue } from 'recoil';
import { signUpState } from '@recoil/recoil';

import { CompleteScreenProps } from '@type/param/rootStack';

const CompleteScreen = ({ navigation }: CompleteScreenProps) => {
  const signUp = useRecoilValue(signUpState);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-col justify-between flex-1 px-5">
        {/* 상단 View */}
        <View className="flex mt-[56px]">
          {/* 설명 Text */}
          <View className="mb-[108px] leading-loose">
            <Text className="text-lg font-semibold tracking-tight text-emphasizedFont">
              {signUp.nickname}님,{'\n'}cozymate에 오신걸 환영해요!
            </Text>
          </View>

          {/* 선택된 캐릭터 이미지 */}
          <View className="flex items-center">
            <View>
              <Text>{signUp.character}</Text>
            </View>
          </View>
        </View>

        {/* 하단 View */}
        <View className="flex">
          <Pressable>
            <View className="p-4 rounded-xl bg-main1">
              <Text className="text-base font-semibold text-center text-white">
                cozymate 바로가기
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteScreen;
