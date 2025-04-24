// src/admin/dataProvider.js
import { createClient } from "@supabase/supabase-js";
// Thay đổi import từ 'react-admin-supabase' sang 'ra-supabase'
import { supabaseDataProvider } from "ra-supabase-core";

// Thay thế bằng thông tin Supabase của bạn
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Sử dụng import.meta.env cho Vite
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Sử dụng import.meta.env cho Vite

const supabase = createClient(supabaseUrl, supabaseKey);

// Tạo Supabase Data Provider từ gói 'ra-supabase'
const dataProvider = supabaseDataProvider({
  instanceUrl: supabaseUrl,
  apiKey: supabaseKey,
  // Bạn có thể truyền instance client đã tạo nếu muốn, hoặc để provider tự tạo
  supabaseClient: supabase,
  primaryKeys: new Map([
    ["accounts", ["username"]],
    ["books", ["book_id"]],
  ]),
  // Các cấu hình khác nếu cần, ví dụ:
  // defaultPagination: { page: 1, perPage: 25 },
  // defaultSort: { field: 'id', order: 'DESC' },
});

export default dataProvider;

// Gói ra-supabase cũng cung cấp Auth Provider, bạn sẽ cần nó cho phần xác thực admin sau này
// import { createSupabaseAuthProvider } from 'ra-supabase';
// export const authProvider = createSupabaseAuthProvider(supabase);
