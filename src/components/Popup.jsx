export function Popup({removeMethod}) {
    return (
        <div className='fixed top-0 left-0 bg-black bg-opacity-30 w-screen h-screen grid place-content-center'>
            <div className='bg-white w-80 rounded-md p-6 flex flex-col gap-2 text-[hsl(211,10%,45%)]'>
                <h3 className='text-2xl font-bold text-black'>Delete Comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className='grid grid-cols-2 gap-4'>
                    <button className='bg-[hsl(211,10%,45%)] py-2 rounded-md text-gray-100'>No, Cancel</button>
                    <button className='bg-[hsl(358,79%,66%)] py-2 rounded-md text-gray-100' onClick={removeMethod}>Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}