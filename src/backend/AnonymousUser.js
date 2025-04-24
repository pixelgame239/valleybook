// src/utils/anonymousUser.js

const ANONYMOUS_USER_ID_STORAGE_KEY = "anonymousUserId";

export function getAnonymousUserId() {
  let userId = localStorage.getItem(ANONYMOUS_USER_ID_STORAGE_KEY);
  if (!userId) {
    // Tạo ID mới nếu chưa có
    userId = `anonymous_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setAnonymousUserId(userId); // Lưu ngay sau khi tạo
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
