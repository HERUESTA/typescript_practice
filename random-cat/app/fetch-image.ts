// APIから画像を取得する関数
export async function fetchImage() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log("fetchImage:画像を取得しました", images);
  return images[0]; // 画像情報から最初の要素を返す
}
