# シェアハウス のどか - 公式ウェブサイト

のんびりスローライフの中に情熱を持って全力で人生を生きる人たちが集まる場所「シェアハウスのどか」の公式ウェブサイトです。

## 🏠 プロジェクト概要

このプロジェクトは、シェアハウスのどかの入居者募集を目的としたウェブサイトです。入居者にワクワクしてもらい、最高の生活と出会いを提供できる場所であることを伝えることを重視しています。

## ✨ 主な機能

### 📱 ページ構成
- **トップページ**: ヒーローセクション、特徴紹介、ギャラリー、入居案内、入居者様の声、アクセス情報
- **入居案内ページ**: 6ステップの入居フローと詳細説明
- **FAQページ**: よくある質問と回答
- **コンタクトページ**: 電話、LINE、メール、Instagramでのお問い合わせ
- **SNSページ**: Instagram投稿の表示
- **アルバム&記事ページ**: 管理者が投稿した記事の表示
- **管理者画面**: パスワード保護された記事管理機能

### 🎨 デザイン特徴
- **テーマカラー**: オレンジ（#FF6B35）と白を基調とした明るいデザイン
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **アニメーション**: Framer Motionを使用した滑らかなアニメーション
- **モダンUI**: Tailwind CSSを使用したクリーンで現代的なデザイン

### 🔧 技術仕様
- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: React Icons
- **地図**: Google Maps JavaScript API

## 🚀 セットアップ

### 必要な環境
- Node.js 18.0.0以上
- npm または yarn

### インストール手順

1. リポジトリをクローン
```bash
git clone [repository-url]
cd NodokaSharehouse
```

2. 依存関係をインストール
```bash
npm install
```

3. 環境変数の設定
```bash
# .env.local ファイルを作成
touch .env.local
```

`.env.local` ファイルに以下を追加：
```env
# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**Google Maps API キーの取得方法：**
1. [Google Cloud Console](https://console.cloud.google.com/) にアクセス
2. 新しいプロジェクトを作成または既存のプロジェクトを選択
3. 「APIs & Services」→「Credentials」に移動
4. 「Create Credentials」→「API Key」を選択
5. 生成されたAPIキーをコピーして `.env.local` に設定
6. 「APIs & Services」→「Library」で「Maps JavaScript API」を有効化

4. 開発サーバーを起動
```bash
npm run dev
```

5. ブラウザで http://localhost:3000 を開く

### ビルドとデプロイ

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーを起動
npm start
```

## 🔐 管理者機能

### 管理者画面へのアクセス
- URL: `/admin`
- パスワード: `Nodoka!2510`

### 管理者機能
- 記事の追加、編集、削除
- カテゴリー管理
- 画像URLの設定

## 📁 プロジェクト構造

```
NodokaSharehouse/
├── app/                    # Next.js App Router
│   ├── admin/             # 管理者画面
│   ├── album/             # アルバム&記事ページ
│   ├── contact/           # コンタクトページ
│   ├── faq/               # FAQページ
│   ├── movein-guide/      # 入居案内ページ
│   ├── sns/               # SNSページ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # トップページ
├── components/            # 再利用可能なコンポーネント
│   ├── admin/            # 管理者関連コンポーネント
│   ├── album/            # アルバム関連コンポーネント
│   ├── contact/          # コンタクト関連コンポーネント
│   ├── faq/              # FAQ関連コンポーネント
│   ├── movein-guide/     # 入居案内関連コンポーネント
│   ├── sections/         # トップページセクション
│   ├── sns/              # SNS関連コンポーネント
│   ├── Footer.tsx        # フッターコンポーネント
│   └── Header.tsx        # ヘッダーコンポーネント
├── public/               # 静的ファイル
│   └── images/          # 画像ファイル
├── package.json         # 依存関係とスクリプト
├── tailwind.config.js   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── next.config.js       # Next.js設定
```

## 🎯 今後の拡張予定

### フェーズ1（現在）
- [x] 基本的なページ構成
- [x] レスポンシブデザイン
- [x] 管理者機能（基本）

### フェーズ2
- [x] Google Maps埋め込み
- [ ] Instagram API連携
- [ ] お問い合わせフォーム
- [ ] SEO最適化

### フェーズ3
- [ ] データベース連携
- [ ] ユーザー認証
- [ ] コメント機能
- [ ] 検索機能

## 🖼️ 画像について

現在、プレースホルダー画像を使用しています。実際の画像は以下の場所に配置してください：

```
public/images/
├── hero-bg.jpg          # ヒーロー背景画像
├── movein-hero-bg.jpg   # 入居案内ヒーロー背景
├── room1.jpg ~ room6.jpg # 部屋紹介画像
├── article1.jpg ~ article6.jpg # 記事画像
├── instagram1.jpg ~ instagram6.jpg # Instagram投稿画像
└── map.jpg              # 地図画像
```

## 📞 お問い合わせ

- **住所**: 〒654-0001 兵庫県神戸市須磨区禅昌寺町1丁目27-5
- **アクセス**: 板宿駅（神戸市営地下鉄・阪神電鉄）から徒歩15分
- **電話**: 078-381-8061
- **メール**: info@nodoka-sharehouse.com
- **LINE**: @nodoka-sharehouse
- **Instagram**: @sharehouse_nodoka

## 📄 ライセンス

このプロジェクトは「シェアハウスのどか」専用のウェブサイトです。

---

**シェアハウスのどか** - のんびりスローライフで情熱的に生きる
# Trigger workflow
