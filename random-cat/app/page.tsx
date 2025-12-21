import { connection } from "next/server"; // 追加
import { CatImage } from "./cat-image"; // 追加
import { fetchImage } from "./fetch-image";

export default  async function Home() {
  await connection();
  const image = await fetchImage();
  // 画像のURLを渡す
  return <CatImage url={image.url} />;
} 
