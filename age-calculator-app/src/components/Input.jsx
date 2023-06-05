const Input = ({ tag, ph, dateBirth, handleChange }) => {
  return (
    <div className='grid grid-cols-1'>
      <label
        className='text-smokeGrey font-[400] text-sm tracking-[0.25em] mb-1 hover:bg-lightGrey'
        htmlFor={tag}
      >
        {tag.toUpperCase()}
      </label>
      <input
        className='border text-[32px] rounded-lg border-lightGrey p-2 focus:border-custom-active focus:outline-none'
        placeholder={ph}
        onChange={handleChange}
        value={dateBirth.tag}
        type='number'
        name={tag}
        id={tag}
      />
    </div>
  )
}

export default Input
