// src/utils/anonymousUser.js
// 36,000 tên khác nhau.
const ANONYMOUS_USER_ID_STORAGE_KEY = "anonymousUserId";
const adjectives = [
  "Vui vẻ",
  "Năng động",
  "Hiền hòa",
  "Thông minh",
  "Nhanh nhẹn",
  "Dễ thương",
  "Ấm áp",
  "Hài hước",
  "Thân thiện",
  "Bí ẩn",
  "Lạc quan",
  "Dũng cảm",
  "Tài năng",
  "Hòa nhã",
  "Lịch sự",
  "Nhiệt huyết",
  "Thông thái",
  "Kiên cường",
  "Hào phóng",
  "Nhanh nhạy",
];

const animals = [
  "Mèo Mun",
  "Cá Vàng",
  "Sóc Nâu",
  "Chó Con",
  "Gấu Trúc",
  "Chim Én",
  "Thỏ Trắng",
  "Hươu Cao",
  "Ngựa Vằn",
  "Cú Mèo",
  "Hổ Vằn",
  "Ngựa Bạch",
  "Voi Ma Mút",
  "Cá Mập",
  "Rồng Lửa",
  "Khỉ Đột",
  "Lạc Đà",
  "Gấu Bắc Cực",
  "Cọp Đen",
  "Cá Koi",
];

export function getAnonymousUserId() {
  let userId = localStorage.getItem(ANONYMOUS_USER_ID_STORAGE_KEY);
  if (!userId) {
    userId = generateFriendlyAnonymousUserId();
    setAnonymousUserId(userId);
  }
  return userId;
}

export function setAnonymousUserId(userId) {
  localStorage.setItem(ANONYMOUS_USER_ID_STORAGE_KEY, userId);
}

export function removeAnonymousUserId() {
  localStorage.removeItem(ANONYMOUS_USER_ID_STORAGE_KEY);
}

function generateFriendlyAnonymousUserId() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  const randomNumber = Math.floor(Math.random() * 90) + 10; // từ 10 đến 99
  return ` ${randomAnimal} ${randomAdjective} ${randomNumber}`;
}
