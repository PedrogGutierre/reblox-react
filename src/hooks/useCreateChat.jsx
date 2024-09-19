import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const useCreateChat = () => {
  const [history] = useState([
    {
      role: "user",
      parts: [
        {
          text: "Você é um assistente especializado em explicar a Fórmula E, inovações tecnológicas e sustentabilidade no automobilismo. Sua tarefa é responder a perguntas relacionadas a esses temas de forma objetiva e clara, com respostas curtas e diretas. Caso o usuário faça perguntas fora desses tópicos, informe educadamente que o assunto está fora do escopo do assistente. Não utilize formatação complexa, como markdown ou listas. Evite diálogos extensos e foque apenas nas informações mais relevantes. ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Bem vindo! Do que voce precisa?",
        },
      ],
    },
  ]);
  const [messages, setMessages] = useState([]);

  const generateChat = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const newChat = model.startChat({ history });
    return newChat;
  };

  const chat = generateChat();

  const sendMessage = async (message) => {
    await chat.sendMessage( message);

    setMessages(history);
  };

  return {
    chat,
    sendMessage,
    messages,
  };
};

export default useCreateChat;
