import { CommentsSection } from './components/CommentsSection'
import { Footer } from './components/Footer'
import { useCreateComment } from './hooks/useCreateComments'

function App () {
  const { handleSubmit } = useCreateComment()

  return (
    <>
      <main className='w-[600px] m-auto font-Rubik'>
        <CommentsSection />
        <Footer method={handleSubmit}/>
      </main>
    </>
  )
}

export default App
