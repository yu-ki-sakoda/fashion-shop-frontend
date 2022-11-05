import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="container">
      <h1>404 - お探しのページは見つかりませんでした</h1>
      <p>
        こちらからサイトのトップに戻ってみてください<br />
        <Link href="/"><a>サイトトップに戻る</a></Link>
      </p>
    </div>
  )
}