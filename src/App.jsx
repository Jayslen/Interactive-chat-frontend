import { useContext } from 'react'
import { CommentsSection } from './components/CommentsSection'
import { commentsContext } from './context/CommnentsContext'

function App () {
  const { commentsData } = useContext(commentsContext)
  return (
    <>
      <main className='w-[600px] m-auto'>
        <CommentsSection data={commentsData} />
      </main>
    </>
  )
}

export default App
