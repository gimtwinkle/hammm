// 'nanoid' 라이브러리 사용해 8자리 코드를 생성하는 util
import { customAlphabet } from "nanoid";

export function makeNanoId(): string {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return customAlphabet(alphabet, 8)();
}
