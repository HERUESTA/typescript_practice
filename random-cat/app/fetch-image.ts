"use server";
import { CAT_API_KEY }  from "./env";

// 画像情報の型定義
type Image = {
  url: string;
};


// APIから画像を取得する関数
export async function fetchImage(): Promise<Image> {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
  headers: { "x-api-key": CAT_API_KEY },
  });
  const images: unknown = await res.json();
  console.log("fetchImage:画像を取得しました", images);
  if (!isImageArray(images)) {
    throw new Error("取得したデータが正しくありません");
  }
  if (!images[0]) {
    throw new Error("取得したデータが正しくありません")
  }
  if (!images[0]) {
    throw new Error("取得したデータが空です")
  }
  return images[0]; // 画像情報から最初の要素を返す
}

// Images型の配列であるかチェックする関数
function isImageArray(value: unknown): value is Image[] {
  // valueが配列であること
  if (!Array.isArray(value)) {
    return false;
  }
  // 配列が空でないこと
  if (value.length === 0) {
    return false;
  }
  // 配列の各要素がImage型であること
  return value.every((item) => {
    if (typeof item !== "object" || item === null) {
      return false;
    }
    if (!("url" in item)) {
      return false;
    }
    if (typeof item.url !== "string") {
      return false;
    }
    return true;
  });
}
