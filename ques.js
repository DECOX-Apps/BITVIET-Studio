/* ============================================================
   ques.js — Kho câu đố cho trang ques.html
   Bạn chỉ cần thêm câu hỏi vào mảng QUESTIONS bên dưới rồi tải lại trang.

   Có 2 dạng câu hỏi:

   1) TRẮC NGHIỆM — có "o" (các lựa chọn) và "a" là SỐ THỨ TỰ đáp án đúng (đếm từ 0)
      { cat: "Kiến thức", q: "Câu hỏi?", o: ["A", "B", "C", "D"], a: 2, exp: "Giải thích" }

   2) TỰ LUẬN / ĐỐ MẸO — "a" là CHỮ (hoặc mảng nhiều đáp án chấp nhận được)
      { cat: "Đố mẹo", q: "Câu hỏi?", a: ["đáp án 1", "đáp án 2"], hint: "Gợi ý" }
      → Khi chấm, hệ thống bỏ qua hoa/thường, dấu tiếng Việt và khoảng trắng thừa.

   Các trường:
     q    (bắt buộc)  nội dung câu hỏi
     a    (bắt buộc)  đáp án đúng (xem 2 dạng ở trên)
     o    (trắc nghiệm) danh sách lựa chọn
     cat  (tuỳ chọn)  chủ đề để lọc, bỏ trống = "Chung"
     hint (tuỳ chọn)  gợi ý, hiện khi người chơi bấm nút 💡
     exp  (tuỳ chọn)  lời giải thích, hiện sau khi trả lời

   Nhớ có dấu phẩy "," giữa các câu. Hãy xoá 4 câu mẫu dưới đây khi thêm câu của bạn.
   ============================================================ */
window.QUESTIONS = [
  {
    cat: "Kiến thức",
    q: "Thủ đô của Nhật Bản là thành phố nào?",
    o: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
    a: 2,
    exp: "Tokyo là thủ đô của Nhật Bản từ năm 1868."
  },
  {
    cat: "Kiến thức",
    q: "Số nguyên tố chẵn duy nhất là số nào?",
    o: ["0", "2", "4", "6"],
    a: 1,
    exp: "Mọi số chẵn khác đều chia hết cho 2 nên không phải số nguyên tố."
  },
  {
    cat: "Đố mẹo",
    q: "Cái gì của bạn nhưng người khác lại dùng nhiều hơn bạn?",
    a: ["tên", "cái tên", "tên của bạn"],
    hint: "Người ta gọi bạn bằng nó mỗi ngày.",
    exp: "Cái tên là của bạn, nhưng người xung quanh gọi nó nhiều hơn bạn."
  },
  {
    cat: "Đố mẹo",
    q: "Cái gì luôn ở phía trước nhưng bạn không bao giờ nhìn thấy?",
    a: ["tương lai", "tuong lai"],
    hint: "Nó chưa xảy ra.",
    exp: "Tương lai luôn ở phía trước, nhưng chưa ai nhìn thấy nó."
  }
];
