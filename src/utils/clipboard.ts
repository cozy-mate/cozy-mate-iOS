import Clipboard from '@react-native-clipboard/clipboard';

export const onCopyAddress = (text: string) => {
  try {
    Clipboard.setString(text);
  } catch (error) {
    console.log(error);
  }
};
