import Image from "next/image";
import hamm from "@/resources/images/hammm.jpg";

export default function Home() {
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
    </div>
  );
}
