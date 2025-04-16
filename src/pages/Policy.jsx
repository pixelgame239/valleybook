import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./Policy.css";

function Policy() {
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
                  <h3>Chính sách</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Chính sách
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container policy-content my-5">
            <h4>Chính sách bảo mật thông tin khách hàng</h4>
            <p>
              - Chúng tôi thu thập, lưu trữ và xử lý thông tin của bạn cho quá
              trình mua hàng và cho những thông báo sau này liên quan đến đơn
              hàng, và để cung cấp dịch vụ, bao gồm một số thông tin cá nhân:
              tên, email, địa chỉ, địa chỉ giao hàng, số điện thoại, chi tiết
              thanh toán, chi tiết thanh toán bằng thẻ.
            </p>
            <p>
              - Chúng tôi sẽ dùng thông tin quý khách đã cung cấp để xử lý đơn
              đặt hàng, cung cấp các dịch vụ và thông tin yêu cầu thông qua
              website và theo yêu cầu của bạn.
            </p>
            <p>
              - Hơn nữa, chúng tôi sẽ sử dụng các thông tin đó để quản lý tài
              khoản của bạn; xác minh và thực hiện giao dịch trực tuyến, nhận
              diện khách vào web, nghiên cứu nhân khẩu học, gửi thông tin bao
              gồm thông tin sản phẩm và dịch vụ. Nếu quý khách không muốn nhận
              bất cứ thông tin tiếp thị của chúng tôi thì có thể từ chối bất cứ
              lúc nào.
            </p>
            <p>
              - Chúng tôi có thể chuyển tên và địa chỉ cho bên thứ ba để họ giao
              hàng cho bạn (ví dụ cho bên chuyển phát nhanh hoặc nhà cung cấp).
            </p>
            <p>
              - Chi tiết đơn đặt hàng của bạn được chúng tôi lưu giữ nhưng vì lí
              do bảo mật nên chúng tôi không công khai trực tiếp được. Tuy
              nhiên, quý khách có thể tiếp cận thông tin bằng cách đăng nhập tài
              khoản trên web.
            </p>
            <p>
              - Quý khách cam kết bảo mật dữ liệu cá nhân và không được phép
              tiết lộ cho bên thứ ba. Chúng tôi không chịu bất kỳ trách nhiệm
              nào cho việc dùng sai mật khẩu nếu đây không phải lỗi của chúng
              tôi.
            </p>
            <p>
              - Chúng tôi có thể dùng thông tin cá nhân của bạn để nghiên cứu
              thị trường. Mọi thông tin chi tiết sẽ được ẩn và chỉ được dùng để
              thống kê. Quý khách có thể từ chối không tham gia bất cứ lúc nào.
            </p>

            <h4>2. Bảo mật</h4>
            <p>
              - Chúng tôi có biện pháp thích hợp về kỹ thuật và an ninh để ngăn
              chặn truy cập trái phép hoặc trái pháp luật hoặc mất mát hoặc tiêu
              hủy hoặc thiệt hại cho thông tin của bạn.
            </p>
            <p>
              - Chúng tôi khuyên quý khách không nên đưa thông tin chi tiết về
              việc thanh toán với bất kỳ ai bằng e-mail, chúng tôi không chịu
              trách nhiệm về những mất mát quý khách có thể gánh chịu trong việc
              trao đổi thông tin của quý khách qua internet hoặc email.
            </p>
            <p>
              - Quý khách tuyệt đối không sử dụng bất kỳ chương trình, công cụ
              hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi
              cấu trúc dữ liệu. Mọi vi phạm sẽ bị truy tố nếu cần thiết.
            </p>
            <p>
              - Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp
              cơ quan pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những
              thông tin này cho các cơ quan pháp luật.
            </p>
            <p>
              - Các điều kiện, điều khoản và nội dung của trang web này được
              điều chỉnh bởi luật pháp Việt Nam và tòa án Việt Nam có thẩm quyền
              xem xét.
            </p>

            <h4>3. Quyền lợi khách hàng</h4>
            <p>
              - Quý khách có quyền yêu cầu truy cập vào dữ liệu cá nhân của
              mình, có quyền yêu cầu chúng tôi sửa lại những sai sót trong dữ
              liệu của bạn mà không mất phí.
            </p>
            <p>
              - Bất cứ lúc nào bạn cũng có quyền yêu cầu chúng tôi ngưng sử dụng
              dữ liệu cá nhân của bạn cho mục đích tiếp thị.
            </p>
            <h4>4. Chính sách đổi trả</h4>
            <h5>1. Các trường hợp chấp nhận đổi trả</h5>
            <p>1.1. Sản phẩm bị lỗi in ấn, nội dung.</p>
            <p>1.2. Sản phẩm bị giao nhầm lẫn do lỗi từ Dinhtibooks.</p>
            <p>1.3. Sản phẩm nhầm do khách hàng đặt nhầm</p>

            <h5>2. Thời gian hoàn trả</h5>
            <p>
              - Thời gian vận chuyển dao động từ 3 - 7 ngày làm việc tuỳ theo
              vùng miền.
            </p>

            <h5>3. Phí hoàn trả</h5>
            <p>
              3.1. Phí vận chuyển sản phẩm hoàn trả sẽ do Dinhtibooks hỗ trợ
              trong các trường hợp 1.1 và 1.2.
            </p>
            <p>3.2. Trong trường hợp 1.3, khách hàng sẽ chịu phí vận chuyển.</p>

            <h5>4. Phương thức hoàn tiền</h5>
            <p>
              Với những trường hợp do sai sót của Dinhtibooks, khách hàng sẽ
              được chuyển khoản ngay sau khi được sự thống nhất giữa hai bên.
            </p>

            {/* giao hàng */}
            <h4>5. Chính sách giao hàng</h4>
            <h5>1. Cước phí đóng gói và giao hàng</h5>
            <p>Đơn hàng sẽ được miễn phí "Phí đóng gói và giao hàng" khi:</p>
            <ul>
              <li>
                Có giá trị từ 300.000 trở lên ở khu vực nội thành TP. Hồ Chí
                Minh và Hà Nội.
              </li>
              <li>
                Có giá trị từ 500.000 trở lên ở các tỉnh thành khác trên toàn
                quốc.
              </li>
            </ul>
            <p>
              Trong trường hợp trị giá đơn hàng chưa đủ mức miễn phí đóng gói và
              giao hàng, thì phí sẽ được áp dụng như sau:
            </p>

            <h5>Đối với khu vực Hà Nội và TP. Hồ Chí Minh</h5>
            <ul>
              <li>Đơn hàng từ 0 - 109.000: phí vận chuyển là 35.000</li>
              <li>Đơn hàng từ 110.000 - 169.000: phí vận chuyển là 25.000</li>
              <li>Đơn hàng từ 170.000 - 299.000: phí vận chuyển là 20.000</li>
              <li>Đơn hàng lớn hơn 300.000 : Miễn phí vận chuyển</li>
            </ul>

            <h5>Đối với các tỉnh thành khác</h5>
            <ul>
              <li>Đơn hàng từ 0 - 109.000: phí vận chuyển là 35.000</li>
              <li>Đơn hàng từ 110.000 - 199.000: phí vận chuyển là 30.000</li>
              <li>Đơn hàng từ 200.000 - 299.000: phí vận chuyển là 25.000</li>
              <li>Đơn hàng từ 300.000 - 499.000: phí vận chuyển là 20.000</li>
              <li>Đơn hàng lớn hơn 500.000: Miễn phí vận chuyển</li>
            </ul>

            <p>
              Đặc biệt, nếu khách hàng ở tỉnh thành khác chọn hình thức thanh
              toán chuyển khoản qua ngân hàng hoặc thanh toán qua VNPAY thì với
              đơn hàng lớn hơn 300.000, Quý khách sẽ được tặng phí vận chuyển.
            </p>
            <p>
              Duy nhất từ 1 -31/7/2020, Đinh Tị Books áp dụng chính sách miễn
              phí vận chuyển với đơn hàng từ 300K.
            </p>

            <h5>2. Thời gian giao hàng</h5>
            <ul>
              <li>
                Đối với đơn hàng tại khu vực nội thành TP. Hồ Chí Minh và Hà
                Nội: Sau 1-2 ngày làm việc.
              </li>
              <li>
                Đối với đơn hàng tại khu vực miền Trung: Sau 4-6 ngày làm việc
              </li>
              <li>
                Đối với các tỉnh thành khác trên toàn quốc: Sau 3-5 ngày làm
                việc.
              </li>
            </ul>

            <h5>3. Dịch vụ vận chuyển nhanh</h5>
            <ul>
              <li>Khu vực áp dụng: Nội thành Hà Nội và TP. HCM</li>
              <li>
                Phí vận chuyển: Để nhận hàng ngay trong ngày, khách hàng vui
                lòng thanh toán trước đơn hàng bằng hình thức chuyển khoản/qua
                VNPAY và sẽ trả hoàn toàn phí vận chuyển khi nhận hàng nếu đơn
                hàng có giá trị &lt;1 triệu. Nếu đơn hàng từ 1 triệu, Đinh Tị
                Books sẽ hỗ trợ 50% phí vận chuyển.
              </li>
            </ul>

            <p>
              Lưu ý: Phí vận chuyển sẽ phụ thuộc vào địa chỉ của khách hàng.
            </p>

            <p>
              Để áp dụng dịch vụ vận chuyển nhanh trong ngày, khi đặt hàng trên
              website, khách hàng ghi chú lại tại ô ghi chú hoặc liên hệ
              hotline: 0989.856.285
            </p>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default Policy;
