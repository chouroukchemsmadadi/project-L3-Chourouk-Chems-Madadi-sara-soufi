import axios from 'axios';

// إنشاء مثيل من axios مع الإعدادات الأساسية
const api = axios.create({
  baseURL: 'http://localhost:8000',  // رابط API الخاص بك
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,

  },
});

export default api;
