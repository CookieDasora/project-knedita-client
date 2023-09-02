export default function SidebarPostButton() {
  return (
    <div className='flex items-center justify-center py-2'>
      <button
        className='mb-0 mt-4 rounded-md bg-violet-500 px-4 py-2
              text-base font-semibold leading-relaxed tracking-normal 
              text-white transition duration-300 hover:bg-violet-600'
      >
        Post something!
      </button>
    </div>
  )
}
