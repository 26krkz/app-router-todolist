リストの取得 → サーバーコンポーネントで作ってレンダリングの遅延にチュートリアルのを使う。
リストの新規作成
リストから TODO の詳細を開く（Dinamic routing を使う）← 詳細ページは左側にリストの一覧、右にカードの詳細を表示（Layout を使う）
リストの編集 → ダイアログを開く → 編集後 DB も変更
リストの削除 → アラートダイアログを開く
Nextauth でログイン・ログアウトを作成 → ユーザーはテストのみ。
ユーザーの新規登録は作らない。

リストの構成
タイトル
編集・削除ボタン
チェックリスト

cording
Npx create-next-app@latest
Node 18.17.0
vercel で deploy
DB は後ほど vercel postgres を使う

レイアウトの作成

- 簡易的な TODO 画面を作る
- radix-ui を install。dialog, alertDialog を追加（use client じゃなきゃ使えない）
- Todos.ts, Type.ts TodoItem の追加
- title にリンクをつけて、ダイナミックルーティングで詳細ページを作成
- Todo リストと Form のスタイルを調整。
- Select の追加。
- dinamic routing のサイドバーを layout で作成。
- header を layout に移動して、detail 画面でも表示されるようにする。ヘッダーの文字をリンクにしてトップに戻れるようにする。
- Todo の項目にメモを追加（メモの input、詳細画面にメモを表示、モーダルにメモを表示）。合わせてスタイルを調整

supabase の設定

- table を作成（なぜか sqleditor じゃないと作れなかった）
- supabase login => supabase gen types typescript --project-id 実行 => database.types.ts を作成
- app/db/index.tsx に client を作成 => 環境変数を使う(NEXT_PUBLIC をつける)
- supabase に policy を追加する。
- fetch で DB から値を取得できるようにする。
