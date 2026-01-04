import { useState, useRef, useEffect } from "react";
import API from "../services/api";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input }
    ];

    setMessages(newMessages);
    setInput("");

    try {
      const res = await API.post("/chat", {
        messages: newMessages,
        mode: "Developer"
      });

      setMessages([
        ...newMessages,
        { role: "assistant", content: res.data.reply }
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full border border-[var(--border-primary)] bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-[var(--bg-secondary)]"
      >
        Chat with AI
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[360px] rounded-xl border border-[var(--border-primary)] bg-white shadow-xl">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--border-primary)] px-4 py-3">
            <span className="text-sm font-medium">
              Abhijeet’s AI Assistant
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto px-4 py-3 space-y-4 text-sm">
            {messages.length === 0 && (
              <p className="text-[var(--text-secondary)]">
                Ask me about my projects, skills, or experience.
              </p>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 ${
                  m.role === "user"
                    ? "ml-auto bg-[var(--accent)] text-white"
                    : "mr-auto bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                }`}
              >
                {m.content}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[var(--border-primary)] p-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full rounded-md border border-[var(--border-primary)] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
          </div>
        </div>
      )}
    </>
  );
}
