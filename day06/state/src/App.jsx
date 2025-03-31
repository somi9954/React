import Register from "./Register";

function App() {
  // react 19버전
  //state(상태) [모양새나 값이] 변화가 일어나면 useState 사용하기
  //setNum이 num의 값을 변경해주는 함수

  // input에 입력한 값의 길이가 4~10글자가 넘어가면
  // 입력한 값이 너무 유효하지 않아요!
  // 아니면 입력한 값이 유효합니다.

  //해당하면 초록색 아니면 검은색

  return (
    <>
      <Register />
    </>
  );
}

export default App;
