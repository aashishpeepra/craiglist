import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { title, subTitle, product } = router.query

  return (
    <>
      <h1>Post: {title}</h1>
      <h1>Comment: {subTitle}</h1>
      <h1>Comment: {product}</h1>
    </>
  )
}

export default Comment