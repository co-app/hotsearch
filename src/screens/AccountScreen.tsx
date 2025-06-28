import React, {useLayoutEffect} from 'react';
import CenteredScreen from '../components/layout/container/CenteredScreen';
import SectionTitle from '../components/ui/atoms/SectionTitle';

const AccountScreen = ({navigation, headerTitle}: any) => {
  useLayoutEffect(() => {
    if (headerTitle) {
      navigation.setOptions({headerTitle});
    }
  }, [navigation, headerTitle]);

  return (
    <CenteredScreen>
      <SectionTitle>내 계정</SectionTitle>
    </CenteredScreen>
  );
};

export default AccountScreen;
