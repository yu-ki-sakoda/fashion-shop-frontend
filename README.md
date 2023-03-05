# fashion-shop
 
 ## URL
 
 web-app<br>
 https://fashionshop-frontend.vercel.app/<br>
 github:frontend<br>
 https://github.com/yu-ki-sakoda/fashion-shop-frontend<br>
 github:backend<br>
 https://github.com/yu-ki-sakoda/fashion-shop-backend<br>

 
 ## テスト用アカウント
 
ユーザーネーム：user1<br>
メールアドレス：user1@gmail.com<br>
パスワード：user1<br>
※デモアプリのためアカウントの追加はお控えください。<br>


## 使用技術

javascript<br>
react<br>
Next.js<br>
CSS in JS<br>
reactstrap<br>
strapi<br>
graphQL<br>
stripe<br>

デプロイ環境<br>
フロントエンド:vercel<br>
バックエンド:fly.io<br>


## 使用方法

### ユーザー新規登録

<img width="600" alt="新規登録画面" src="https://user-images.githubusercontent.com/117453738/221365284-64d75b1e-7464-4660-9d9a-766ad2c2d68f.gif">

右上にある登録ボタンから新規登録画面に遷移します。<br>
上記のユーザー名,メールアドレス,パスワードを入力し新規登録を行います。<br>


### ログイン

<img width="600" alt="ログイン" src="https://user-images.githubusercontent.com/117453738/221365964-9be49470-d80c-46a7-b650-05d253f5a560.gif">

新規登録後ログイン状態でない場合は右上にあるログインボタンからログイン画面に遷移します。上記のメールアドレス,パスワードを入力します。


### 商品の閲覧

<img width="600" alt="商品閲覧" src="https://user-images.githubusercontent.com/117453738/221366269-536dea9f-a318-4ef3-8536-fd68415f17d3.gif">

商品はジャンルごとに分けられているため気になるページに遷移し商品を閲覧します。


### 商品の検索

<img width="600" alt="商品検索" src="https://user-images.githubusercontent.com/117453738/221366664-6c580425-81eb-4c42-85f9-2c1fa7b2a8c2.gif">

商品のジャンル検索を行います。ジャンル名をアルファベットで入力し該当する文字があるジャンルのみ表示されます。該当する文字がどのジャンルにもない場合は非表示となります。


### ショッピングカートに追加

<img width="600" alt="カート追加" src="https://user-images.githubusercontent.com/117453738/221368478-d1282422-9fc1-4c00-8d35-1954022e920b.gif">

1. ジャンルをクリックし商品ページに遷移。
1. 希望する商品をカートに入れる。
1. 同商品を1つ増やしたい場合は+1ボタンを押す。
1. 同商品を1つ減らしたい場合は-1ボタンを押す。


### 決済

<img width="600" alt="カート追加" src="https://user-images.githubusercontent.com/117453738/221388690-aeef32c6-185d-45bc-9594-01b248024f6c.gif">

1. ショッピングカートに追加後注文確定ボタンを押す。
1. 決済ページにて住所,カード情報を入力後注文確定とする。<br>
   ※デモアプリのため仮情報を入力
1. 正常に決済された場合注文完了ページに遷移する。

