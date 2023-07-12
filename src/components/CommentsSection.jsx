import { Comment } from './Comment'

export function CommentsSection ({ data }) {
  return (
    <>
      {data.map((data) => {
        return <Comment data={data} key={data.id} />
      })}
    </>
  )
}
