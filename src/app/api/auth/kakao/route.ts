import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      console.log(data);

      if (error) {
        return NextResponse.redirect(
          `${requestUrl.origin}/login?error=${error.message}`
        );
      }

      return NextResponse.redirect(requestUrl.origin);
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(
        `${requestUrl.origin}/login?error=Authentication failed`
      );
    }
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/login?error=No code provided`
  );
}
