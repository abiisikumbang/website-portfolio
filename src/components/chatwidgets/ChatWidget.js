import {useEffect, useState, useRef} from "react";
import "./ChatWidget.scss";

// Fungsi utama komponen ChatWidget
export default function ChatWidget() {
  // State untuk menentukan apakah chatbox terbuka atau tidak
  const [isOpen, setIsOpen] = useState(false);

  // State untuk menyimpan riwayat pesan
  const [messages, setMessages] = useState([
    {from: "bot", text: "Halo, ada yang bisa saya bantu?"}
  ]);

  // State untuk menyimpan inputan pengguna
  const [input, setInput] = useState("");

  // State untuk menunjukkan status loading (sedang memproses respons)
  const [isLoading, setIsLoading] = useState(false);

  // Ref untuk menggulir otomatis ke pesan terbaru
  const chatBodyRef = useRef(null);

  // Fungsi asinkron untuk memanggil Gemini API
  const fetchGeminiResponse = async prompt => {
    setIsLoading(true);
    const apiKey = "AIzaSyC2ePy4em95zhZhFeq44y1y1O5kjrbR1kE"; // API Key akan disediakan oleh runtime Canvas
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const chatHistory = [{role: "user", parts: [{text: prompt}]}];
    const payload = {contents: chatHistory};

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      const botResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (botResponse) {
        setMessages(prevMessages => [
          ...prevMessages,
          {from: "bot", text: botResponse}
        ]);
      } else {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            from: "bot",
            text: "Maaf, saya tidak dapat memproses permintaan ini."
          }
        ]);
      }
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          from: "bot",
          text: "Maaf, terjadi kesalahan saat menghubungi layanan. Silakan coba lagi."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk mengirimkan pesan ketika tombol "Kirim" ditekan atau "Enter"
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {from: "user", text: input};
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Panggil Gemini API dengan input pengguna
    fetchGeminiResponse(input);

    setInput("");
  };

  // Efek untuk menggulir ke bawah setiap kali ada pesan baru
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="chat-container">
      {isOpen && (
        <div className="chat-window">
          {/* Header Chat */}
          <div className="chat-header">
            <div className="chat-title">BIYUU Assistant</div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>

          {/* Body Chat (area pesan) */}
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.from}`}>
                <span>{msg.text}</span>
              </div>
            ))}
            {/* Tampilkan indikator loading saat bot berpikir */}
            {isLoading && (
              <div className="chat-bubble bot loading">
                <span>...</span>
              </div>
            )}
          </div>

          {/* Footer Chat (area input) */}
          <div className="chat-footer">
            <input
              className="chat-input"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Tulis pesan..."
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            {/* Tombol kirim */}
            <button
              className="send-button"
              onClick={handleSend}
              disabled={isLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send-horizonal"
              >
                <path d="m3 3 3 9-3 9 19-9Z" />
                <path d="M6 12h16" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* Tombol toggle untuk membuka/menutup chat */}
      {!isOpen && (
        <button className="chat-toggle" onClick={() => setIsOpen(true)}>
          <i className="icon fas fa-comments" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
}
