// ============================================================
// 設定ファイル:リンク・計測IDはすべてここだけで管理する
// ============================================================

// GA4の測定ID(例: "G-XXXXXXXXXX")。取得したらここに入れるだけでクリック計測が動く
export const GA_MEASUREMENT_ID = "";

// デプロイ後に実際のURLへ差し替える(OGP画像の絶対URL生成に使用)
export const SITE_URL = "https://ai-shukatsu-lp.vercel.app";

export const SITE_TITLE =
  "出遅れ28卒のための「待つだけ就活」の始め方|逆求人サイト3社比較";
export const SITE_DESCRIPTION =
  "課題・バイト・単位回収で就活に出遅れた28卒へ。プロフィールを一度書けば企業からオファーが届く逆求人サイトを、現役の建築学生が実際に登録して比較しました。すべて無料で始められます。";

// アフィリエイトリンク:ASP承認後に href をアフィリエイトURLへ差し替える
// (今は公式サイトへの直リンク。これでもLPとして完全に機能する)
export const SERVICES = {
  offerbox: {
    name: "OfferBox(オファーボックス)",
    short: "OfferBox",
    href: "https://offerbox.jp/",
  },
  kimisuka: {
    name: "キミスカ",
    short: "キミスカ",
    href: "https://kimisuka.com/",
  },
  dodacampus: {
    name: "dodaキャンパス",
    short: "dodaキャンパス",
    href: "https://campus.doda.jp/",
  },
} as const;
