import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./QualityProduct.css"; // Reuse the same CSS for consistency
import ChatBubble from "../components/ChatBubble";

function InnovationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className="page-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3>VALLEY CHILL</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; VALLEY CHILL
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container quality-product-content my-5">
            <div className="container my-5">
              <div>
                <h2 className="text-success fw-bold display-6 mb-3">
                  🎁 Chính Sách Đặc Biệt: VALLEY CHILL
                </h2>
                <p className="fst-italic fs-5">
                  "Một tách trà – Một trang sách – Một chút yêu thương"
                </p>
                <p className="fs-5">
                  <strong>Valley Book</strong> tin rằng đọc sách không chỉ là
                  tiếp nhận tri thức, mà còn là tận hưởng. Với mỗi đơn hàng từ{" "}
                  <strong>2 cuốn sách trở lên</strong>, bạn sẽ nhận được một{" "}
                  <strong>“gói cảm hứng nhỏ”</strong> – như một lời cảm ơn dịu
                  dàng từ chúng tôi đến hành trình đọc sách của bạn.
                </p>

                <h4 className="text-success mt-4">🎁 Bạn sẽ nhận được gì?</h4>
                <ul className="fs-5">
                  <li>
                    <strong>Gói trà thảo mộc/Trà túi lọc:</strong> Một tách trà
                    nhẹ nhàng để bạn thưởng sách trong không gian thư giãn.
                  </li>
                  <li>
                    <strong>Bookmark độc quyền:</strong> Thẻ đánh dấu sách in
                    câu trích dẫn truyền cảm hứng, thay đổi theo từng tháng.
                  </li>
                  <li>
                    <strong>Lời nhắn tay ngẫu nhiên:</strong> Một mẩu thư tay
                    viết bằng bút mực, là câu chúc hoặc thông điệp nho nhỏ để
                    khiến bạn mỉm cười.
                  </li>
                </ul>
                <p className="text-muted fst-italic">
                  📦 Những món quà này được gói kèm đơn hàng, hoàn toàn miễn
                  phí.
                </p>

                <h4 className="text-success mt-4">📌 Điều kiện áp dụng</h4>
                <ul className="fs-5">
                  <li>
                    Áp dụng cho đơn hàng từ <strong>2 cuốn sách trở lên</strong>
                    .
                  </li>
                  <li>
                    Không áp dụng đồng thời với các chương trình tặng quà khác.
                  </li>
                  <li>
                    Nếu bạn muốn <em>gửi sách như quà tặng</em>, hãy để lại lời
                    nhắn khi thanh toán để nhận thêm thiệp viết tay theo yêu
                    cầu.
                  </li>
                </ul>

                <h4 className="text-success mt-4">
                  🤲 Vì sao Valley Book làm điều này?
                </h4>
                <p className="fs-5 mt-2">
                  Chúng tôi không chỉ bán sách. Chúng tôi trao truyền cảm hứng.
                  <br />
                  <strong>Valley Chill</strong> là cách chúng tôi nói rằng:
                  <br />
                  <em>
                    “Bạn không chỉ đang mua sách. Bạn đang mua khoảnh khắc dễ
                    chịu dành riêng cho mình.”
                  </em>
                </p>
              </div>
            </div>
          </div>
          <ChatBubble />

          <Footer />
        </>
      )}
    </>
  );
}

export default InnovationPage;
