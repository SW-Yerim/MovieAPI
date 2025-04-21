# 🎬 Movie Explorer – 영화 조회 어플리케이션

## 📌 Summary  
TMDB API를 활용하여 다양한 장르의 영화를 검색하고, 상세 정보를 조회할 수 있는 영화 탐색 어플리케이션입니다.  

- **최신 인기 영화**,  
- **장르별 영화**,  
- **선택한 영화의 상세 정보**  
를 확인할 수 있으며,
영화 검색 기능을 통해 원하는 영화를 빠르게 찾을 수 있습니다.

> 🎯 반응형으로 제작되어 모바일 환경에서도 최적화된 UI를 제공합니다.

---

## 🛠️ 사용 기술 및 언어  
- **Frontend**: React, JavaScript  
- **Styling**: CSS Module  
- **Routing**: react-router-dom, react-route  
- **API 상태 관리**: **React Query**  
- **UI Library**: react-slick (슬라이더)  
- **API**: The Movie Database (TMDB) API

---

## 🔗 프로젝트 링크  
- GitHub: [https://github.com/SW-Yerim/MovieAPI](https://github.com/SW-Yerim/MovieAPI)  
- Live Demo: [https://sw-yerim.github.io/MovieAPI](https://sw-yerim.github.io/MovieAPI)

---

## ✨ 주요 기능 및 특징  
- ✅ TMDB API 연동을 통한 실시간 영화 데이터 조회  
- ✅ **React Query**를 통한 API 데이터 캐싱 및 로딩/에러 처리 자동화
- ✅ 선택한 영화 클릭 시 상세 모달창 출력
- ✅ 장르 필터링 기능 (장르 선택 시 해당 장르 영화만 출력)
- ✅ 영화 검색 기능  
- ✅ 반응형 UI (모바일/태블릿 대응)

---

## 🎯 프로젝트 선정 이유 및 느낀점

1. **React Router 학습 목적**  
   - 페이지 간 이동과 URL 파라미터를 이용한 상세 페이지 구현 등 라우팅 기반 구조를 익히는 데에 중점을 두었습니다.

2. **React Query 도입으로 API 상태 관리 최적화**  
   - 로딩, 에러, 캐싱 등의 처리를 라이브러리를 통해 자동화함으로써 실무에서의 데이터 흐름 관리 방식을 실습할 수 있었습니다.

3. **슬라이드 UI 구성 학습**  
   - 시각적인 요소가 중요한 프로젝트에서 `react-slick` 라이브러리를 활용하여 사용자 친화적인 UI를 구성하는 방법을 경험해보았습니다.

4. **Open API 연동 실습**  
   - 실시간 API 응답 데이터를 활용해 필요한 정보를 필터링하고 가공하여 컴포넌트에 적용하는 과정을 실습하였습니다.

5. **반응형 스타일링 실습**  
   - `CSS Module`과 media query를 활용하여 다양한 디바이스에서도 자연스럽게 동작할 수 있도록 레이아웃을 구성해보며 실무 적용을 대비하였습니다.

---

## 🧩 트러블슈팅  

| 문제 상황 | 원인 | 해결 방법 |
|-----------|------|------------|
| 영화 상세 페이지에 진입한 뒤 새로고침 시 데이터가 출력되지 않았습니다. | 이전 페이지에서 전달된 props가 사라졌기 때문입니다. | `useParams`로 영화 ID를 받아오고, 해당 ID를 기반으로 React Query를 통해 상세 데이터를 다시 요청하도록 처리하였습니다. |

---

## 🔧 향후 개선 계획  
- 다크모드/라이트모드 테마 전환 기능 구현  

