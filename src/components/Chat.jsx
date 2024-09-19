import { ChatBubbleOutline, SendOutlined } from "@mui/icons-material";
import { useState } from "react";

import useCreateChat from "../hooks/useCreateChat";

const Chat = () => {
  const [chatOpened, setChatOpened] = useState(false);
  const [message, setMessage] = useState("");

  const { sendMessage, messages } = useCreateChat();

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="fixed right-4 bottom-4 flex flex-col items-end gap-2">
      {chatOpened && (
        <div className="bg-light-white h-96 w-96 rounded flex flex-col overflow-auto relative justify-between shadow-2xl">
          <ul className="flex flex-col gap-2 pb-4 p-4 items-end">
            {messages &&
              messages.map((msg, index) => {
                let styles = "rounded p-4 border";

                switch (msg.role) {
                  case "user":
                    styles +=
                      " bg-secondary-blue text-light-white border-secondary-blue";
                    break;
                  case "model":
                    styles += " self-start";
                    break;
                }

                return (
                  <li key={index} className={styles}>
                    {msg.parts[0].text}
                  </li>
                );
              })}
          </ul>

          <form
            onSubmit={handleSendMessage}
            className="p-4  w-full flex bg-light-white sticky bottom-0"
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Digite sua mensagem"
              className="flex-1 px-4 py-2 outline-none bg-transparent"
            />
            <button className="bg-secondary-blue p-2 text-light-white rounded hover:bg-hover-blue">
              <SendOutlined />
            </button>
          </form>
        </div>
      )}
      <div
        className="cursor-pointer w-8 flex justify-center items-center bg-secondary-blue text-center transition text-light-white px-6 py-3 rounded hover:bg-hover-blue font-bold"
        onClick={() => setChatOpened(!chatOpened)}
      >
        <ChatBubbleOutline />
      </div>
    </div>
  );
};

export default Chat;
