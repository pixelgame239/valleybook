import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./QualityProduct.css"; // You might need to create this CSS file
import ChatBubble from "../components/ChatBubble";

function QualityProduct() {
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
          <Header currentPage="shop" />
          <div className="page-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Sản phẩm chất lượng</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Sản phẩm chất lượng
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-5 fs-5">
            <h2 className="mb-4 text-primary fw-bold fs-2">
              Cam Kết Chất Lượng Sản Phẩm Tại Valley Book
            </h2>

            <p>
              Tại <strong>Valley Book</strong>, chất lượng luôn là ưu tiên hàng
              đầu. Chúng tôi tin rằng mỗi cuốn sách – dù là sách in, ebook hay
              sách nói – đều góp phần tạo nên trải nghiệm đọc tuyệt vời và đáng
              tin cậy cho khách hàng.
            </p>

            <div className="mb-5">
              <h4 className="text-success mt-4 fs-4">
                📚 Sách in – Mới & Nguyên Seal
              </h4>
              <ul>
                <li>
                  Tất cả sách giấy đều là <strong>hàng mới 100%</strong>, chưa
                  qua sử dụng.
                </li>
                <li>
                  Sách được <strong>niêm phong kỹ càng</strong>, đảm bảo nguyên
                  vẹn, không rách nát, không bong tróc.
                </li>
              </ul>

              <h4 className="text-success mt-4 fs-4">
                🔐 Bản quyền rõ ràng – Không in lậu
              </h4>
              <ul>
                <li>
                  Sản phẩm được nhập khẩu hoặc phân phối{" "}
                  <strong>chính ngạch</strong>, có đầy đủ chứng nhận bản quyền.
                </li>
                <li>
                  <strong>
                    Cam kết không phân phối sách lậu, sao chép trái phép hoặc vi
                    phạm bản quyền.
                  </strong>
                </li>
              </ul>

              <h4 className="text-success mt-4 fs-4">
                ✅ Quy trình kiểm soát nghiêm ngặt
              </h4>
              <ul>
                <li>Kiểm tra nghiêm ngặt từ khâu nhập hàng đến giao hàng.</li>
                <li>
                  Đảm bảo không có lỗi in, thiếu trang, sai sót trong đóng gói
                  hay hư hại.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary fs-4">
                📱 Cam Kết Chất Lượng Ebook & Sách Nói
              </h4>

              <h5 className="mt-3 fs-5">
                💾 Ebook – Tương thích, tải về dễ dàng
              </h5>
              <ul>
                <li>
                  Định dạng phổ biến (PDF, EPUB, MOBI...), hỗ trợ nhiều thiết
                  bị.
                </li>
                <li>
                  Cho phép <strong>tải về để đọc offline</strong>.
                </li>
                <li>
                  Một số ebook có thể sử dụng{" "}
                  <strong>DRM để bảo vệ bản quyền</strong>.
                </li>
              </ul>

              <h5 className="mt-3 fs-5">
                🎧 Sách nói – Âm thanh chuẩn, giọng đọc chuyên nghiệp
              </h5>
              <ul>
                <li>Âm thanh rõ ràng, không tạp âm, giọng đọc truyền cảm.</li>
                <li>Hỗ trợ định dạng MP3, M4B, và các ứng dụng nghe sách.</li>
                <li>
                  Nội dung được <strong>cấp phép đầy đủ</strong>, trung thực với
                  bản gốc.
                </li>
              </ul>

              <h5 className="mt-3 fs-5">
                🛠 Hỗ trợ kỹ thuật – Xử lý lỗi nhanh chóng
              </h5>
              <ul>
                <li>
                  Nếu gặp lỗi không mở được file, nghe không được, âm thanh bị
                  hỏng hoặc file thiếu trang, bạn chỉ cần{" "}
                  <strong>Liên hệ CSKH</strong>.
                </li>
                <li>
                  Valley Book cam kết:
                  <ul>
                    <li>
                      <strong>- Hỗ trợ đổi file</strong> hoặc cung cấp bản thay
                      thế <strong>trong vòng 24</strong> giờ.
                    </li>
                    <li>
                      - <strong>Hoàn tiền</strong> nếu không khắc phục được sự
                      cố (theo chính sách hoàn trả).
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <p className="mt-5">
              Chúng tôi không chỉ bán sách – chúng tôi mang đến{" "}
              <strong>trải nghiệm đọc và nghe trọn vẹn, chất lượng</strong>.
              Valley Book luôn sẵn sàng đồng hành cùng bạn trên hành trình khám
              phá tri thức.
            </p>
          </div>
          <ChatBubble />
          <Footer />
        </>
      )}
    </>
  );
}

export default QualityProduct;
