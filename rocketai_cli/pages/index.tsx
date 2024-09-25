import { useEffect, useRef, useState } from "react";
import TopHeader from "./headerLayout";
import { useTranslation } from "react-i18next";

export default function Home() {

  interface ChatState {
    sendList: string[];
    chat: string;
  }

  const [chatList, setChatList] = useState<ChatState>({
    sendList: [],
    chat: ''
  });
  const chatScroll = useRef<HTMLDivElement>(null);
  const chatFocus = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if(chatFocus.current) chatFocus.current.focus();
  }, [])

  useEffect(() => {
    if(chatScroll.current){
      chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
    }
  }, [chatList.sendList])

  const sendChat = async () => {
    const res = await fetch(`${process.env.URL}`,{
      method: 'POST', headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ msg: chatList.chat })
    });
    const result = await res.json();
    setChatList((prev)=>{
      return {sendList: [...prev.sendList, chatList.chat, result.msg], chat: ''}
    }); 
  }
  return (
    <TopHeader>
      <div className="flex flex-grow items-center justify-center p-4">
        <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl h-[700px] bg-white rounded-xl shadow-lg flex flex-col">
          <div className="flex-grow overflow-y-auto p-4" ref={ chatScroll }>
            {
              chatList.sendList.map((e, i) => {
                if ( i%2==0 ) {
                  return (
                    <div className="chat chat-end items-center" key={ i }>
                      <div className="chat-bubble chat-bubble-info pt-2.5">
                        {e}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="chat chat-start" key={ i }>
                      <div className="chat-bubble chat-bubble-accent pt-2.5">
                        {e}
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
          <div className="bg-gray-50 p-4 rounded-b-xl">
            <div className="join w-full">
              <input
                type="text"
                placeholder= {t('placeholder')}
                className="input input-bordered join-item flex-grow"
                onChange={(e)=> {
                  setChatList((prev)=>{
                    return {sendList: [...prev.sendList], chat: e.target.value}
                  });
                }}
                onKeyUp={(e) => { //엔터를 이용
                  if (e.key === 'Enter' && !/^\s*$/.test(chatList.chat)) sendChat()
                }}
                value={ chatList.chat }
                ref={ chatFocus }
              />
              <button className="btn btn-primary join-item" onClick={sendChat}>{t('sending')}</button>
            </div>
          </div>
        </div>
      </div>
    </TopHeader>
  );
}
// fetch - https://www.youtube.com/watch?v=oAbsd50Uh7o
// 채팅 - https://velog.io/@hkj0206/Socket.io-Next.js-%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%B1%84%ED%8C%85%EC%97%90%EC%84%9C-%EC%83%9D%EA%B8%B0%EB%8A%94-%EB%8B%A4%EC%96%91%ED%95%9C-%EB%B2%84%EA%B7%B8-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95
// usestate - https://www.youtube.com/watch?v=G3qglTF-fFI&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&t=953s
// useRef - https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5
// 스크롤 - https://bayaa.tistory.com/16
// https - https://kagrin97-blog.vercel.app/server/ec2-httpTohttps