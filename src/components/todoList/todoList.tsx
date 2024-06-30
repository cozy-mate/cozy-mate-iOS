import React from 'react';
import { Text, View } from 'react-native';

const TodoList: React.FC = () => {
  return (
    <View>
      <Text className="text-base font-semibold text-emphasizedFont">
        오늘 <Text className="text-main">델로</Text>님이
      </Text>
      <Text className="text-base font-semibold text-emphasizedFont">
        해야할 일들을 알려드릴게요!
      </Text>
    </View>
  );
};

export default TodoList;
