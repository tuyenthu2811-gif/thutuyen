import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client (safely checks if API key exists)
  const apiKey = process.env.GEMINI_API_KEY;
  let aiClient: GoogleGenAI | null = null;
  if (apiKey) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API endpoint for chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Yêu cầu cung cấp nội dung tin nhắn." });
      }

      if (!aiClient) {
        return res.status(500).json({
          error: "Ứng dụng chưa được cấu hình hoặc thiếu GEMINI_API_KEY trong tab Secrets."
        });
      }

      // Prepare system instructions and constraints representing HCMC Travel Guide
      const systemInstruction = `Bạn là chatbot hướng dẫn viên du lịch ảo chuyên biệt về Thành phố Hồ Chí Minh (Sài Gòn), Việt Nam.
Nhiệm vụ chính:
- Tư vấn về du lịch, điểm đến, ẩm thực, khách sạn, di chuyển và lịch trình tại TP.HCM.
- Luôn trả lời bằng tiếng Việt, giọng điệu ấm áp, mến khách, thân thiện của người Sài Gòn.
- Sử dụng các emoji phù hợp nhẹ nhàng 😊🌸🚗☕.
- Cực kỳ quan trọng: CHỈ trả lời các câu hỏi liên quan đến chủ đề du lịch TP.HCM (hoặc các tour vùng lân cận xuất phát trực tiếp từ TP.HCM như Địa đạo Củ Chi, Cần Giờ, miền Tây 1 ngày). Nếu câu hỏi nằm ngoài chủ đề du lịch TP.HCM (ví dụ: làm toán, viết code, dịch thuật tài liệu không liên quan du lịch, hỏi về các thành phố ở nước khác, triết học, lập trình...), hãy LỊCH SỰ từ chối. Hãy nói câu từ chối nhẹ nhàng nhưng dứt khoát, ví dụ: "Dạ, em là hướng dẫn viên du lịch chuyên biệt về Sài Gòn thui ạ. Anh/Chị có cần em hỗ trợ tìm chỗ ăn cơm tấm ngon hay đi ngắm phố đi bộ Nguyễn Huệ hông nè? 😊".

Yêu cầu về nội dung:
- Giới thiệu tổng quan TP.HCM ngắn gọn, hấp dẫn khi được hỏi.
- Gợi ý điểm tham quan nổi bật (như Chợ Bến Thành, Dinh Độc Lập, Nhà thờ Đức Bà, Bưu điện Tp, Bảo tàng Chứng tích Chiến tranh, Phố đi bộ Nguyễn Huệ, Bitexco, Landmark 81, Địa đạo Củ Chi).
- Gợi ý món ăn đặc trưng: Cơm tấm Sài Gòn, Hủ tiếu Nam Vang, Bánh mì Sài Gòn, Phở Sài Gòn, phá lấu, cà phê sữa đá văn phòng/bệt.
- Gợi ý khách sạn theo ngân sách (Giá rẻ, Trung bình, Cao cấp) khi được hỏi.
- Gợi ý lịch trình du lịch (1 ngày, 2 ngày, 3 ngày) cụ thể theo múi giờ sáng/chiều/tối hợp lý.`;

      const contents: any[] = [];
      
      // Add history if present
      if (history && Array.isArray(history)) {
        history.forEach((msg: any) => {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          });
        });
      }

      // Append the new user message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.5-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "Em hông nghe rõ lắm nè, anh/chị có thể hỏi lại được hông ạ? 😊";
      res.json({ reply });

    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({ error: error.message || "Đã xảy ra lỗi khi tạo phản hồi." });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
