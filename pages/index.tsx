export default function Home() {
  let msg = ""
  return (
    <div className="flex flex-grow items-center justify-center p-4">
      <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl h-[700px] bg-white rounded-xl shadow-lg flex flex-col">
        <div className="flex-1 overflow-y-auto p-4" />
        <div className="bg-gray-50 p-4 rounded-b-xl">
          <div className="join w-full">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="input input-bordered join-item flex-grow"
              onChange={(e)=> {
                msg = e.target.value
              }}
              onKeyDown={(e) => { //엔터를 이용해서도 제출을 할 수 있게 해주려면 이런 방식을 택해야한다.
                if (e.key === 'Enter') {
                  testFunc(msg);
                }
              }}
               />
            <button className="btn btn-primary join-item" onClick={(e) => { testFunc(msg) }}>전송</button>
          </div>
        </div>
      </div>
    </div>
  );
}


async function testFunc(message: string) {
  const res = await fetch('http://localhost:8080',{
    method: 'POST', headers: {"Content-Type": "application/json",
    Accept: "application/json"},
    body: JSON.stringify({ msg: message })
  });
  const result = await res.json();
  return console.log(result);
}
// fetch - https://www.youtube.com/watch?v=oAbsd50Uh7o
// 채팅 - https://velog.io/@hkj0206/Socket.io-Next.js-%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%B1%84%ED%8C%85%EC%97%90%EC%84%9C-%EC%83%9D%EA%B8%B0%EB%8A%94-%EB%8B%A4%EC%96%91%ED%95%9C-%EB%B2%84%EA%B7%B8-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95