// src/utils/anonymousUser.js

const ANONYMOUS_USER_ID_STORAGE_KEY = "anonymousUserId";

export function getAnonymousUserId() {
  let userId = localStorage.getItem(ANONYMOUS_USER_ID_STORAGE_KEY);
  if (!userId) {
    // Generate a unique UUID
    userId = crypto.randomUUID();
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
