# invest-assistant

## 프로젝트 설명

### 주식 트레이딩 전쟁에 방탄모자와 방탄 조끼가 되어 줄 내 프로젝트

---

### 배포

- AWS 인프라 이용

## 프로젝트 버전 명세

- Nodejs - v18.15.0
- React - v18.2.0
- typescript - v5.0.4
- yarn - v3.5.1

## 프로젝트 기술 스택

- React 18+
- React Router v6.4+
- emotion
- zustand
- eslint, prettier
- yarn berry
- vite

## 프로젝트 실행 명세

`yarn set-init`은 `git clone` 이후 최초에만 실행 하면 된다. (only vscode)

````zsh
vscode extension & setting 생성

**package.json** file 참고

**script/set-init.sh** file 참고

```json

"scripts": {
  "set-init": "sh script/set-init.sh",
...
},
````

## 프로젝트 커밋 컨벤션

- feat : 새로운 기능 추가
- edited : 코드 수정
- added : 코드 추가
- fixed : 버그 수정
- docs : 문서 수정
- style : css 변경
- refactor : 코드 리펙토링
- test : 테스트 코드 추가 및 수정, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
- story : 스토리북 추가 및 수정


## 프로젝트 디렉토리 구조

> src <br/>
> ⎣&nbsp;**pages** - 페이지 단위의 컴포넌트 : 하위로 공용컴포넌트 및 페이지별 컨테이너와 컴포넌트 트리구조로 형성<br/>
> ⎣&nbsp;**router** - Route 관련 파일 <br/>
> ⎣&nbsp;**api** - rest api 및 주소 <br/>
> ⎣&nbsp;**assets/images** - image 파일 <br/>
> ⎣&nbsp;**assets/icons** - icon 파일 <br/>
> ⎣&nbsp;**components** - 범용적으로 사용되는 UI 파일<br/>
> ⎣&nbsp;**constants** - 상수 폴더<br/>
> ⎣&nbsp;**hooks** - custom hooks<br/>
> ⎣&nbsp;**i18n** - i18n<br/>
> ⎣&nbsp;**layout** - 글로벌 레이아웃<br/>
> ⎣&nbsp;**locale** - lang<br/>
> ⎣&nbsp;**types** - Typescript 객체에 대한 타입 지정을 모아두고 있다.<br/>
> ⎣&nbsp;**store** - 전역상태 관련 파일(zustand)<br/>
> ⎣&nbsp;**styles** - css 모음<br/>
> ⎣&nbsp;**utils** - util 함수들<br/>
> ⎣&nbsp;**mocks** - mock(test) 관련 파일들<br/>

## Styled Component + Style Lint 사용시 주의 사항

```ts
export const roundCircle = css`
  border-radius: 9999px;
`;

export const ExpandButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.white};

  ${roundCircle} // css를 mixin을 변수로 주입 할 경우
  position: absolute;
`;
```

아래와 같이 Stylelint 에러로는 잡히지만 autoFix가 되지 않음

![스크린샷 2023-07-14 오후 2 56 47](https://github.com/torderdev/hubt-client/assets/129036508/551f3b61-ef24-4301-b604-791547607339)

javascript 변수로 주입 한 부분을 주석 처리 하면 auto fix 적용 된다

```ts
export const ExpandButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.white};

  /* ${roundCircle} */
  position: absolute;
`;

// fixed
export const ExpandButton = styled.div`
  /* ${roundCircle} */
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: ${colors.white};
`;
```
