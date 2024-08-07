import React from 'react';
import { Pressable, Text, View } from 'react-native';

import SelectedBar from '@assets/todoList/selectedBar.svg';

interface NavBarProps {
  isTodo: boolean;
  handleTodo: () => void;
  handleRoleRule: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isTodo, handleTodo, handleRoleRule }) => {
  return (
    <View className="flex flex-row">
      <View className="mr-6">
        <Pressable onPress={handleTodo}>
          <Text
            className={`${
              isTodo ? 'text-main1' : 'text-disabledFont'
            } px-[17.5px] pt-1 pb-3 text-base font-semibold`}
          >
            To - do
          </Text>
          {isTodo && <SelectedBar />}
        </Pressable>
      </View>

      <View>
        <Pressable onPress={handleRoleRule}>
          <Text
            className={`${
              !isTodo ? 'text-main1' : 'text-disabledFont'
            } pt-1 pb-3 text-base font-semibold`}
          >
            Role & Rule
          </Text>
          {!isTodo && <SelectedBar />}
        </Pressable>
      </View>
    </View>
  );
};

export default NavBar;
