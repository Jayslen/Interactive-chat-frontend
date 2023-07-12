import { PlusIcon, MinusIcon } from './icons'

function Button ({ children, rounded, update }) {
  return (
    <button
      className={`bg-[#f5f6fa] h-full grid place-content-center transition-all rounded-${rounded}-md group`}
      onClick={update}
    >
      {children}
    </button>
  )
}

export function CommentScore ({ score, method }) {
  const increseScore = () => {
    method[0]()
  }

  const decreseScore = () => {
    method[1]()
  }

  return (
    <div className='grid grid-cols-1 grid-rows-3 w-9 h-24'>
      <Button rounded='t' update={increseScore}>
        <PlusIcon />
      </Button>
      <span className='bg-[#f5f6fa] grid place-content-center py-1 text-sm font-semibold text-[hsl(238,40%,52%)]'>
        {score}
      </span>
      <Button rounded='b' update={decreseScore}>
        <MinusIcon />
      </Button>
    </div>
  )
}
