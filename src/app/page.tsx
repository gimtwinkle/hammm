import Image from "next/image";
import hamm from "@/resources/images/hammm.jpg";

async function getBoards() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/board`, {
    cache: "no-store", // SSR을 위한 설정
  });

  if (!res.ok) {
    throw new Error("Failed to fetch boards");
  }

  return res.json();
}

export default async function Home() {
  const board = await getBoards();

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
        {board.error && (
          <p style={{ color: "red" }}>
            게시글을 불러오는 중 오류가 발생했습니다.
          </p>
        )}
        {!board.error && board && (
          <ul>
            {board.map((board: any) => (
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
