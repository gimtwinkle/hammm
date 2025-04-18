'use client';
import Image from 'next/image';
import ComboButton from '@/components/atoms/ComboButton/ComboButton';
import css from './page.module.css';
import { supabase } from '@/lib/supabaseClient';
const Login = () => {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('카카오 로그인 오류:', error.message);
    }
  };

  return (
    <div
      className={`${css['bg-gingham']} text-center px-15 py-15 w-full flex items-center h-screen`}
    >
      <div>
        <Image
          src="/logo.png"
          width={500}
          height={500}
          alt="모두의 (투명한) 돼지저금통"
          className="mb-20"
        ></Image>
        <ComboButton
          className="w-full mt-10 mb-5 bg-yellow-400 text-gray-800"
          label="KAKAO LOGIN"
          onClick={handleLogin}
        />
        <ComboButton
          className="w-full container bg-gray-100 text-gray-800"
          label="GOOGLE LOGIN"
        />
      </div>
    </div>
  );
};

export default Login;
