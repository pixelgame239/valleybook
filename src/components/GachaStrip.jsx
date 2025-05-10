import React, { useState, useRef, useEffect } from "react";
import styles from "./GachaStrip.module.css";
import { getVoucher } from "../backend/voucherData";
import Preloader from "./Preloader";
import voucher from "../../public/assets/images/voucher.png";
import freeShip from "../../public/assets/images/freeship.png";
import { fetchVoucher, updateVoucherItems } from "../backend/userData";

// Accept onCloseOverlay prop
function GachaStrip({ onCloseOverlay }) {
  const [basePrizes, setBasePrizes] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const stripRef = useRef(null);
  const stripContainerRef = useRef(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchVoucher = async () => {
      const tempData = await getVoucher("Voucher");
      setBasePrizes((prev) => (prev = tempData));
      setLoading(false);
    };
    fetchVoucher();
  }, []);

  // Tạo một mảng dài gấp nhiều lần để tạo hiệu ứng vô hạn
  const extendedPrizes = [...Array(50)].flatMap(() => basePrizes);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(""); // Reset result when spinning starts
    const itemWidth = stripRef.current.children[0].offsetWidth;
    const visibleItems = 7;
    const middleItemIndex = Math.floor(visibleItems / 2);

    // Tính toán số vòng quay ngẫu nhiên
    const minSpins = 2;
    const randomSpins = Math.floor(Math.random() * 3) + minSpins;
    const randomExtra = Math.floor(Math.random() * basePrizes.length);

    // Tính toán index cần dừng lại
    const targetIndex =
      basePrizes.length * randomSpins + middleItemIndex + randomExtra;
    const translateX = targetIndex * itemWidth;

    // Quay strip
    stripRef.current.style.transition =
      "transform 4s cubic-bezier(0.95, 0.05, 0.5, 1)";
    stripRef.current.style.transform = `translateX(-${translateX}px)`;

    // Sau khi quay xong, lấy kết quả
    setTimeout(async () => {
      setIsSpinning(false);
      // Make sure randomExtra is a valid index
      if (randomExtra >= 0 && randomExtra < basePrizes.length) {
        let tempResult = basePrizes[randomExtra-1];
        setResult(tempResult.detail); // Use randomExtra directly for the result index
        let userVoucher  = await fetchVoucher(userInfo.email);
        console.log(userVoucher);
        userVoucher.push(tempResult.voucher_id);
        await updateVoucherItems(userInfo.email, userVoucher);
      } else {
        // Handle case where randomExtra is out of bounds (shouldn't happen with Math.random)
        setResult("Không tìm thấy kết quả");
      }

      // ✅ Reset về vị trí tương đương ở giữa strip để tránh lỗi "quay ngược"
      const itemWidth = stripRef.current.children[0].offsetWidth;
      const visibleItems = 7;
      const middleItemIndex = Math.floor(visibleItems / 2);
      const safeIndex = basePrizes.length * 2 + middleItemIndex + randomExtra; // Use randomExtra here too
      const newTranslateX = safeIndex * itemWidth;

      // ⚠️ Loại bỏ transition trước khi reset
      stripRef.current.style.transition = "none";
      stripRef.current.style.transform = `translateX(-${newTranslateX}px)`;
    }, 4000);
  };

  // Determine button text and action based on state
  const getButtonText = () => {
    if (loading) return "Đang tải...";
    if (isSpinning) return "Đang quay...";
    if (result) return "Xác nhận"; // Change text to "Đóng" when result is available
    return "Quay"; // Default text
  };

  const handleButtonClick = () => {
    if (result) {
      // If result is available, call the close overlay function
      onCloseOverlay();
    } else {
      // Otherwise, handle the spin
      handleSpin();
    }
  };

  return (
    <div className={styles.gachaContainer}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className={styles.stripFrame} ref={stripContainerRef}>
            <div className={styles.strip} ref={stripRef}>
              {extendedPrizes.map((prize, index) => (
                <div className={styles.stripItem} key={index}>
                  <img
                    src={prize.voucher_id.startsWith("V") ? voucher : freeShip}
                    alt={prize.voucher_id}
                  ></img>{" "}
                  {/* Add alt text */}
                  <p>
                    {prize.discount > 100
                      ? `${prize.discount.toLocaleString()}đ`
                      : `${prize.discount}%`}
                  </p>
                </div>
              ))}
            </div>
            <div className={styles.indicator}>▼</div>
          </div>
          <button
            className={styles.spinBtn}
            onClick={handleButtonClick} // Use the new handler
            disabled={isSpinning || loading} // Disable while spinning or loading
          >
            {getButtonText()} {/* Use the function to get button text */}
          </button>
          {result && !isSpinning && (
            <div className={styles.result}>
              🎉 Bạn nhận được mã <strong>{result}</strong>!
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default GachaStrip;
