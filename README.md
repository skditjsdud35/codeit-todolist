
# 프로젝트 설명

- 코드잇 단기 심화 사전 과제 테스트 레파지토리입니다 
- 디자인에서 명시된 px 단위로 디자인하되, 실제 페이지에는 rem 단위로 적용하기 위해 커스텀 단위인 pxr을 사용하였습니다 
	(참고: https://fe-developers.kakaoent.com/2022/221013-tailwind-and-design-system/#%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%8B%A8%EC%9C%84-%EC%A0%95%EC%9D%98%ED%95%98%EA%B8%B0)

##  기술 스택
![](https://camo.githubusercontent.com/d13b13f612e04c7f0acbac86017eccf8b541fe32d9e3aabe51f036319f5f1946/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/a8288db858b02700d4d4d33894264f1c897566782c26fb013450c2539288c4d5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/95759dac505a57f5a260db91eca6f7a0c852a095cb271cc6d37c413081c5f799/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f4353532d3338423241433f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Query](https://img.shields.io/badge/-Zustand-23646CFF?style=for-the-badge&logo=react%20query&logoColor=white)

## 디렉토리 구조



```bash

codeit-todolist
├─ src
│  ├─ app                   # API 사용을 위한 세팅
│  │  ├─ (components)       # 메인페이지 컴포넌트
│  │  ├─ api                # API 사용 셋팅
│  │  └─ items              # 상세페이지 폴더
│  │  │  ├─ (components)    # 상세페이지 컴포넌트
│  ├─ components            # 공용 컴포넌트
│  ├─ constants             # 공통 상수
│  ├─ hooks              	# 커스텀 훅
│  ├─ store                 # zustand 전역 상태 스토어
│  ├─ types                 # Item 타입
│  └─ util                  # 기타 유틸리티

```

##  실행 방법

```bash
$ git clone https://github.com/skditjsdud35/codeit-todolist.git
$ npm install
$ npm run dev
```
