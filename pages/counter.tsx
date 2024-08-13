//리액트 로컬데이터 상태관리 훅인 useState훅을 참조합니다.
//각종 훅은 use라는 접두사를 사용합니다.
import { useState } from "react";

const Counter = () => {
  //카운트 상태값을 관리할 count변수, 세터함수 생성하기
  //useStste('초기값 정의') 함수가 sount,setCount함수를 반환하여 변수에 할당합니다.
  //useState(0)함수는 배열을 반환하는데
  const [count, setCount] = useState(0);

  //count 상태값 플러스 처리 이벤트 처리기 함수정의
  const handlePlus = (): void => {
    console.log("Pre SetCounter:", count);
    //count 상태값을 변경하려면 무조건 setCount()함수를 통해 변경해야합니다.

    // setCount(count + 1);
    // setCount(count + 1);를 두번 연속 호출하면  count 값이 2씩 증가할 것 같지만 해당  handlePlus함수 호출이 종료되어야
    //최종count값이 갱신되기에 몇번을 호출해도 한번만 적용됩니다.

    //변경되기 이전의 값을 prevCount라는 매개변수를 통해서 추출할 수 있어야합니다.
    //setCount((prevCount) => prevCount + 1);

    //setCount((prevCount) => prevCount + 1);을 연속으로 2번 호출시 2씩 증가합니다.
    //2씩 증가하는 이유는 precCount값은 실제 변경된 이전값을 바로보관하기 떄문에 handlePlus합수가 실행종료 되지 않아도
    //이전값에 변경된 값이 보관됩니다.
    setCount((prevCount) => prevCount + 1);

    //setter함수가 실행되는 handlePlus()함수가 완전히 실행이 완료된 후에 최종 count값이 갱신됩니다.
    console.log("After setCounter:", count);
    //Count= count+1
  };

  const handleMinus = () => {
    //count 상태값을 변경하려면 무조건 setCount()함수를 통해 변경해야합니다.
    setCount(count - 1);
    //Count= count-1
  };

  const onInit = () => {
    setCount(0);
  };

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[60px] font-semibold text-indigo-600">{count}</p>
        <p className="mt-6 text-base leading-7 text-gray-600">
          버튼을 클릭해 숫자를 증가 또는 감소 시켜보세요.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handlePlus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Plus
          </button>
          <button
            onClick={handleMinus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Minus
          </button>
          <button
            onClick={onInit}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Init
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
