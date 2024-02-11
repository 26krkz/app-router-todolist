~~リストの取得 → サーバーコンポーネントで作ってレンダリングの遅延にチュートリアルのを使う。~~
~~リストの新規作成~~
~~リストから TODO の詳細を開く（Dinamic routing を使う）← 詳細ページは左側にリストの一覧、右にカードの詳細を表示（Layout を使う）~~
~~リストの編集 → ダイアログを開く → 編集後 DB も変更~~
~~リストの削除 → アラートダイアログを開く~~
~~usePathname を使って、詳細画面のサイドバーのリンクを同ページの場合押されている感じ、異なるページの場合押せる感じにする。~~
Nextauth でログイン・ログアウトを作成 → ユーザーはテストのみ。
ユーザーの新規登録は作らない。
Todo の追加後、画面をリロードしなくても Todo が追加されているように state で管理。
todo の取得を遅らせて、susupend の状態を表示する。（loading.js を使う）
error.js でエラーハンドリングする。
詳細画面で Todo を更新できるようにする。→ post 後 server actions で redirect()を使う？
詳細画面で Todo の削除をできるようにする。→ 削除後は該当画面の Todo がなくなるので、permanent redirect を使う。
ダブルクリックで POST できないようにする。
新規追加後 useRef でリセットする。

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
- next_public だとクライアントに公開されてしまうため外した。→ サーバーで環境変数を扱えるように server action に変更。
- id:number が扱いづらいから、新規で todoId: string を作成 nanoid()で値を生成。

API の作成

- serverAcrion の formData を使うときは input タグに name を必ずつける。
- fetchTodos の作成。noStore()にすることで毎回最新の情報を取得できているが、fetchTodos を複数箇所で呼んでいるのでリファクタが必要かも。
- createTodos の作成。serverAcrions を使用。form データは引数 FormData で受け取るように実装。
- editTodos の作成。bind を使うことで formData に含まれない値を含める。
- deleteTodos の作成。form じゃなくても client コンポーネントの onclick で serverAcrionts は使えるみたい。
