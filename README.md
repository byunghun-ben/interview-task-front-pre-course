# 프론트엔드 개발자 사전 과제

## 주요 기능

- **할 일 추가**: 입력 필드에 할 일을 입력하고 추가 버튼 또는 Enter 키를 눌러 새로운 할 일을 목록에 추가할 수 있습니다.
- **할 일 완료 토글**: 각 할 일 옆의 체크 버튼을 클릭하여 완료 상태를 토글할 수 있습니다.
- **할 일 삭제**: 삭제 버튼을 클릭하여 불필요한 할 일을 목록에서 제거할 수 있습니다.
- **필터링**: 'All', 'To Do', 'Done' 탭을 통해 전체, 미완료, 완료된 할 일 목록을 필터링하여 볼 수 있습니다.

## 기술 스택

- **프레임워크**: React, Next.js
- **언어**: TypeScript
- **스타일링**: Emotion Styled
- **테스팅**: Jest, React Testing Library
- **패키지 매니저**: Yarn

## 프로젝트 실행 방법

### 1. 의존성 설치

프로젝트의 루트 디렉토리에서 다음 명령어를 실행하여 필요한 패키지를 설치합니다.

```bash
yarn install
```

### 2. 개발 서버 실행

의존성 설치가 완료되면 개발 서버를 시작합니다.

개발 서버가 성공적으로 시작되면 http://localhost:3000에서 애플리케이션을 확인할 수 있습니다.

## 테스트 실행 방법

테스트를 실행하여 구현한 기능이 올바르게 동작하는지 확인할 수 있습니다.

```bash
yarn test
```
