import Image from "next/image";
import hamm from "@/resources/images/hammm.jpg";
import { supabase } from "@/lib/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";

type Board = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

export default async function Home() {
  const {
    data: boards,
    error,
  }: { data: Board[] | null; error: PostgrestError | null } = await supabase
    .from("board")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>모두의 (투명한) 돼지저금통</h1>
      <Image
        style={{
          margin: "50px auto 0",
        }}
        src={hamm}
        width={500}
        height={500}
        alt="모두의 (투명한) 돼지저금통"
      ></Image>
      <div
        style={{
          margin: "50px auto 0",
        }}
      >
        <h2>Data 출력 테스트</h2>
        {error && (
          <p style={{ color: "red" }}>
            게시글을 불러오는 중 오류가 발생했습니다.
          </p>
        )}
        {!error && boards && (
          <ul>
            {boards.map((board) => (
              <li key={board.id}>
                <h2>{board.title}</h2>
                <p>{board.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
