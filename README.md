## Preview 
![image](https://github.com/YoHaiYo/ActorArchive/assets/124754510/e5554384-116f-41b9-9fa9-92e9a2af45d3)

![image](https://github.com/YoHaiYo/ActorArchive/assets/124754510/adb3b27d-25d9-4aa9-adca-8d6d8a80634c)
	
## 배포용 링크
https://actorarchive.vercel.app/

## 프로젝트 간단 소개 
- 객관적 지표를 바탕으로 배우들의 점수를 산정합니다.
- 한글 / 영어 모두 배우 정보 검색을 지원합니다.
- 랜덤 페이지네이션 기능으로 다양한 배우 리스트를 얻을 수 있습니다.  

## 기획 초점
“ 영화배우들을 객관적인 지표로 점수를 매겨서 최고의 배우를 찾아보면 어떨까라는 아이디어로 시작한 프로젝트입니다. “
- 5가지 객관적인 지표로 배우들의 부분 점수를 산정하고 이 지표들을 종합하여 종합점수를 산정할 수 있게 하였습니다. 
- 배우 페이지를 랜덤으로 이동 할 수 있게 하여 사용자 경험의 흥미를 높혔습니다.
- 한글/영어 모두 검색가능하고 검색한 배우들의 종합점수도 볼 수 있게 하여 사용자들이 배우 정보를 탐색하는 재미를 얻게 하였습니다.

## 피그마 기획
[링크바로가기](https://www.figma.com/file/YoztuZE2rJGrX8PQGnnCyQ/ActorArchive?type=design&node-id=0-1&mode=design&t=OYgQjUIHA5ctLd21-0)

## 프로젝트 특징
1. Next JS를 통해 서버사이드랜더링 방식으로 개발되어 SEO 최적화 및 사용자 랜더링 경험을 향상시켰습니다.
3. typescript를 통해 비동기로 가져오는 여러 타입의 데이터들의 타입을 관리하여 타입오류 발생을 사전에 차단하였습니다. 
4. .env.local 파일을 통해 apikey를 서버에서 관리하여 중요 데이터 보안을 신경썼습니다. 
5. next의 Metadata 를 통해 페이지마다 meta 태그의 title을 따로 관리하였습니다.
6. TMDB의 데이터를 비동기로 가져와 배우 카드를 구성했습니다. 이때 서버사이드와 클라이언트 사이드를 적절하게 구분하여 배우 데이터를 가져옵니다.
7. 비동기로 배우 및 영화 사진을 가져오기까지 시간동안 보여주거나 원본 데이터가 없을때 보여줄 placeholder 이미지로 사용자 경험을 향상 시켰습니다.
8. 다양한 디바이스 사이즈에 맞게 반응형으로 배경이미지, 스타일을 적용하였습니다.

## 이슈 발생과 해결과정
## 이슈 1 
**문제 :** TMDB의 API 특성한 API를 2중, 3중으로 호출하여 데이터를 받아와야했는데 클라이언트, 서버 사이드 구분 오류가 발생했습니다.
**해결 :** 배우정보카드 컴포넌트를 둘로 나누어 각각 서버사이드, 클라이언트 사이드에 맞게 비동기로 데이터를 받아오게 하여 문제를 해결했습니다. 
(actorsCard.tsx : 클라이언트 사이드, actorsSearchCard.tsx : 서버 사이드)

## 이슈 2 
**문제 :** 세부페이지서 뒤로가기를 하게 되면 화면이 나오지 않는 오류가 발생했습니다.

**해결 :** next의 Link태그로 이동 시킨 페이지라 실제 주소로 이동된게 아닌 동적으로 화면이 바뀐 상태라 생긴 오류였습니다. a태그로 변경하여 문제를 해결했습니다. 

## 이슈 3 
**문제 :** 배우들의 점수를 산정할때 여러 점수를 합산하는데 덧셈이 아닌 접합연산자로 합산되는 오류가 발생했습니다. (10 + 10 = 1010 이 나오는 문제)

**해결 :**
비동기로 가져온 점수 데이터를 toFixed 메서드를 통해 가공하는 과정에서 타입변환이 발생하여 생긴 문제였습니다. 
점수 데이터를 꼼꼼하게 타입스크립트로 타입을 지정하여 타입변환 오류를 해결 하였습니다. 

## 사용 모듈 및 프레임워크
- next 14.1.0
- react 18.2.0
- bootstrap 5.3.3
- react-bootstrap 2.10.1
- react-bootstrap-icons 1.11.3
- react-dom : 18.2.0
- sass 1.71.1

