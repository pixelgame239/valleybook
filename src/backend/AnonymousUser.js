// src/utils/anonymousUser.js

const ANONYMOUS_USER_ID_STORAGE_KEY = "anonymousUserId";

let anonymousUserIdCounter = 1;
export function getAnonymousUserId() {
  let userId = localStorage.getItem(ANONYMOUS_USER_ID_STORAGE_KEY);
  if (!userId) {
    userId = `anonymous_${anonymousUserIdCounter++}`;
    setAnonymousUserId(userId); // Lưu ngay sau khi tao
  }
  return userId;
}

export function setAnonymousUserId(userId) {
  localStorage.setItem(ANONYMOUS_USER_ID_STORAGE_KEY, userId);
}

// Hàm tùy chọn: xóa ID ẩn danh (ví dụ: khi người dùng đăng nhập thật)
export function removeAnonymousUserId() {
  localStorage.removeItem(ANONYMOUS_USER_ID_STORAGE_KEY);
}
