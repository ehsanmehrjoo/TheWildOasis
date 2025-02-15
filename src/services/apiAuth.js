import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";


export async function Signup({ fullName, email, password, role = "employee" }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        role, // User role (e.g., "user" or "admin")
      },
    },
  });

  if (error) {
    throw new Error(error.message || "An error occurred during sign-up.");
  }

  return data;
}

export async function Login({email , password}){
    
const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
    throw new Error(error.message)
  }
  const { user } = data;

  return {
    user,
    session: data.session,
  };
}

// export async function getCurrentUser(){
//   const {data : session} =  await supabase.auth.getSession()
//   if(!session.session) return null
//   const {data , error} = await supabase.auth.getUser()
//   console.log(data);
//   if (error) {
//     throw new Error(error.message)
//   }

//   return data?.user
// }
 

export async function getCurrentUser() {
  // دریافت session کاربر فعلی
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

  // بررسی خطا یا نبود session
  if (sessionError || !sessionData.session) {
    return null; // کاربر وارد نشده
  }

  // استخراج اطلاعات کاربر از session
  const user = sessionData.session.user;

  // چک کردن نقش کاربر
  if (user?.user_metadata?.role !== "employee") {
    toast.error("Access denied: Only employees are allowed to log in.");
    return null; // دسترسی رد شد
  }

  // گرفتن اطلاعات دقیق کاربر
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }

  return userData?.user; // بازگرداندن کاربر
}

export async function Logout(){
  
const { error } = await supabase.auth.signOut()
if (error) {
  throw new Error(error.message)
}
}

 

export async function UpdateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData = {};  // مقدار اولیه به‌عنوان یک آبجکت خالی

  if (password) updateData.password = password;
  if (fullName) updateData.data = { fullName };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    throw new Error(error.message);
  }

  if (!avatar) return data;

  // 2. Update the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar);

  if (storageError) {
    throw new Error(storageError.message);
  }

  // 3.  Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
    },
  });

  if (error2) {
    throw new Error(error2.message);
  }

  return updatedUser;
}
