const Parraf = ({ n, time }) => {
  return (
    <p className='font-[800] italic text-6xl mt-2 sm:text-[90px]'>
      <span className='text-purple'>{n ? n : '- -'}</span> {time}
    </p>
  )
}

export default Parraf
