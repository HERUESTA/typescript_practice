import { connection } from "next/server"; // 追加
import { fetchImage } from "./fetch-image";

export default  async function Home() {
  await connection();
  const image = await fetchImage();
  console.log("Home: 画像情報を取得しました", image);
  return <div>猫画像予定地</div>;
} 
