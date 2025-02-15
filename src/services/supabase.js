
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://iljrwbhnejndlaaifxnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsanJ3YmhuZWpuZGxhYWlmeG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODE4NDQsImV4cCI6MjA0ODU1Nzg0NH0.0ru0MWqvAcKwmhl-j1SIrWY40G9ZLqlgHDCVR_H1yiE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

// تغییر تابع ثبت‌نام و ارسال درخواست
const Signup = async () => {
    const response = await fetch("https://iljrwbhnejndlaaifxnp.supabase.co/auth/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "hacker@example.com",
        password: "password123",
        options: {
          data: {
            fullName: "Hacker",
            role: "employee", // نقش تغییر یافته
          },
        },
      }),
    });
  
    const data = await response.json();
    console.log(data); // بررسی نتیجه درخواست
  };
  
  Signup();
  