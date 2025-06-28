import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Switch, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme/colors';
import Container from '../components/layout/container/Container';
import SectionTitle from '../components/ui/atoms/SectionTitle';
import AppbarHeader from '../components/layout/header/AppbarHeader';

const SettingsScreen = ({navigation}: any) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const settingsSections = [
    {
      title: '알림 설정',
      items: [
        {
          id: 'notifications',
          title: '푸시 알림',
          subtitle: '인기검색어 업데이트 알림',
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications,
        },
        {
          id: 'sound',
          title: '알림음',
          subtitle: '알림음 재생',
          type: 'switch',
          value: true,
          onValueChange: () => {},
        },
      ],
    },
    {
      title: '앱 설정',
      items: [
        {
          id: 'darkMode',
          title: '다크 모드',
          subtitle: '어두운 테마 사용',
          type: 'switch',
          value: darkMode,
          onValueChange: setDarkMode,
        },
        {
          id: 'autoRefresh',
          title: '자동 새로고침',
          subtitle: '5분마다 데이터 업데이트',
          type: 'switch',
          value: autoRefresh,
          onValueChange: setAutoRefresh,
        },
        {
          id: 'language',
          title: '언어 설정',
          subtitle: '한국어',
          type: 'arrow',
        },
        {
          id: 'region',
          title: '지역 설정',
          subtitle: '대한민국',
          type: 'arrow',
        },
      ],
    },
    {
      title: '데이터 관리',
      items: [
        {
          id: 'clearCache',
          title: '캐시 삭제',
          subtitle: '저장된 데이터 삭제',
          type: 'arrow',
        },
        {
          id: 'exportData',
          title: '데이터 내보내기',
          subtitle: '검색 기록 백업',
          type: 'arrow',
        },
      ],
    },
    {
      title: '정보',
      items: [
        {
          id: 'version',
          title: '앱 버전',
          subtitle: '1.0.0',
          type: 'text',
        },
        {
          id: 'privacy',
          title: '개인정보처리방침',
          subtitle: '',
          type: 'arrow',
        },
        {
          id: 'terms',
          title: '이용약관',
          subtitle: '',
          type: 'arrow',
        },
        {
          id: 'support',
          title: '고객지원',
          subtitle: '문의하기',
          type: 'arrow',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <AppbarHeader title="설정" type="left" />
      <ScrollView contentContainerStyle={{paddingTop: 10, paddingBottom: 32}}>
        <Container style={{paddingHorizontal: 0}}>
          {settingsSections.map((section, sectionIndex) => (
            <SettingsSection key={sectionIndex}>
              <SectionTitle>{section.title}</SectionTitle>
              <SettingsList>
                {section.items.map((item, itemIndex) => (
                  <SettingsItem key={item.id}>
                    <SettingsContent>
                      <SettingsTitle>{item.title}</SettingsTitle>
                      {item.subtitle && (
                        <SettingsSubtitle>{item.subtitle}</SettingsSubtitle>
                      )}
                    </SettingsContent>
                    {item.type === 'switch' && (
                      <Switch
                        value={item.value}
                        onValueChange={item.onValueChange}
                        trackColor={{
                          false: colors.border,
                          true: colors.primary,
                        }}
                        thumbColor={
                          item.value ? colors.surface : colors.surfaceSecondary
                        }
                      />
                    )}
                    {item.type === 'arrow' && <ArrowIcon>›</ArrowIcon>}
                    {item.type === 'text' && (
                      <SettingsValue>{item.subtitle}</SettingsValue>
                    )}
                  </SettingsItem>
                ))}
              </SettingsList>
            </SettingsSection>
          ))}

          <LogoutSection>
            <LogoutButton>
              <LogoutText>로그아웃</LogoutText>
            </LogoutButton>
          </LogoutSection>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const SettingsSection = styled.View`
  margin-bottom: 32px;
`;

const SettingsList = styled.View`
  background: ${colors.surface};
  border-radius: 16px;
  margin: 0 20px;
  overflow: hidden;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const SettingsItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderLight};
`;

const SettingsContent = styled.View`
  flex: 1;
`;

const SettingsTitle = styled.Text`
  font-size: 16px;
  color: ${colors.textPrimary};
  font-weight: 500;
`;

const SettingsSubtitle = styled.Text`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-top: 4px;
`;

const SettingsValue = styled.Text`
  font-size: 14px;
  color: ${colors.textTertiary};
`;

const ArrowIcon = styled.Text`
  font-size: 18px;
  color: ${colors.textTertiary};
  font-weight: 300;
`;

const LogoutSection = styled.View`
  margin: 32px 20px;
`;

const LogoutButton = styled.TouchableOpacity`
  background: ${colors.surface};
  border-radius: 16px;
  padding: 20px;
  align-items: center;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const LogoutText = styled.Text`
  font-size: 16px;
  color: ${colors.error};
  font-weight: 500;
`;
