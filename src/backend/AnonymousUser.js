// src/utils/anonymousUser.js

const ANONYMOUS_USER_ID_STORAGE_KEY = "anonymousUserId";
const ANONYMOUS_USER_COUNTER_KEY = "anonymousUserCounter";

export function getAnonymousUserId() {
  let userId = localStorage.getItem(ANONYMOUS_USER_ID_STORAGE_KEY);
  if (!userId) {
    // Generate a new incremental ID
    userId = generateNextAnonymousUserId();
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

function generateNextAnonymousUserId() {
  let counter = parseInt(localStorage.getItem(ANONYMOUS_USER_COUNTER_KEY), 10);
  if (isNaN(counter)) {
    counter = 1;
  } else {
    counter += 1;
  }
  localStorage.setItem(ANONYMOUS_USER_COUNTER_KEY, counter);
  return `Khách hàng ${counter}`;
}
