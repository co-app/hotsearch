# 토스 스타일 인기검색어 앱

토스의 디자인 시스템을 참고하여 만든 인기검색어 트렌드 앱입니다.

## 주요 기능

### 🏠 인기검색어

- 실시간 인기검색어 순위
- 순위 변동 추이 (상승/하락/신규)
- 카테고리별 인기 검색어
- 빠른 검색 기능

### 🔍 검색

- 실시간 검색어 입력
- 최근 검색어 기록
- 인기 검색어 추천
- 검색 결과 분석

### 📂 카테고리

- 검색어 카테고리별 분류
- 금융, 투자, 보험, 카드, 대출, 적금 등
- 카테고리별 인기 검색어 순위

### ⚙️ 설정

- 푸시 알림 설정
- 다크 모드 지원
- 자동 새로고침 설정
- 데이터 관리

## 기술 스택

- **React Native** 0.77.0
- **TypeScript** 5.0.4
- **React Navigation** 7.x
- **Styled Components** 6.1.18
- **React Native SVG** 15.12.0

## 디자인 시스템

### 색상

- **Primary**: #0064FF (토스 블루)
- **Secondary**: #FF6B6B (토스 레드)
- **Background**: #F8F9FA
- **Surface**: #FFFFFF
- **Text Primary**: #1A1A1A
- **Text Secondary**: #666666

### 컴포넌트 구조

```
components/
├── atoms/          # 기본 컴포넌트
├── molecules/      # 복합 컴포넌트
├── organisms/      # 큰 단위 컴포넌트
└── templates/      # 페이지 템플릿
```

## 설치 및 실행

### 필수 요구사항

- Node.js >= 18
- React Native CLI
- Android Studio / Xcode

### 설치

```bash
# 의존성 설치
npm install

# iOS 의존성 설치 (iOS 개발 시)
cd ios && pod install && cd ..
```

### 실행

```bash
# Metro 서버 시작
npm start

# Android 실행
npm run android

# iOS 실행
npm run ios
```

## 프로젝트 구조

```
src/
├── assets/         # 이미지, 아이콘
├── components/     # 재사용 가능한 컴포넌트
├── navigation/     # 네비게이션 설정
├── screens/        # 화면 컴포넌트
├── theme/          # 테마 설정
├── types/          # TypeScript 타입 정의
└── services/       # API 서비스
```

## 주요 화면

1. **홈 화면**: 실시간 인기검색어 순위 및 카테고리별 인기
2. **검색 화면**: 검색 기능 및 최근/인기 검색어
3. **카테고리 화면**: 검색어 카테고리별 분류 및 순위
4. **설정 화면**: 앱 설정 및 개인화 옵션

## 개발 가이드

### 새로운 화면 추가

1. `src/screens/` 디렉토리에 새 화면 생성
2. `src/navigation/AppNavigator.tsx`에 라우트 추가
3. 필요한 아이콘을 `src/assets/images/`에 추가

### 컴포넌트 스타일링

- Styled Components 사용
- 토스 디자인 시스템 색상 적용
- 일관된 간격과 크기 사용

### 테마 사용

```typescript
import {colors} from '../theme/colors';

const StyledComponent = styled.View`
  background: ${colors.surface};
  color: ${colors.textPrimary};
`;
```

## 라이선스

MIT License

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
