import { useState } from 'react'
import IconArrow from './components/IconArrow'
import Input from './components/Input'
import Parraf from './components/Parraf'

const Home = () => {
  // Guardamos fecha de nacimiento indicada en los inputs
  const [dateBirth, setDateBirth] = useState({
    day: '',
    month: '',
    year: ''
  })

  // Creamos dos instancias de Date, una para la fecha de nacimiento y otra para la fecha actual
  const dateBirthInit = new Date(dateBirth.year, dateBirth.month, dateBirth.day)
  const dateDiff = new Date(Date.now() - dateBirthInit.getTime())

  // Guardamos los resultados de la diferencia entre las dos fechas
  const [result, setResult] = useState({
    years: 0,
    months: 0,
    days: 0
  })

  // Función para guardar los valores de los inputs en el estado
  const handleChange = (e) => {
    setDateBirth({ ...dateBirth, [e.target.name]: e.target.value })
  }

  const [errors, setErrors] = useState({
    empty: false,
    invalid: false
  })

  // Función para calcular los resultados de la diferencia entre las dos fechas, se ejecuta cuando se hace click en la imagen
  const handleResult = () => {
    if (dateBirth.day === '' || dateBirth.month === '' || dateBirth.year === '')
      return setErrors({ ...errors, empty: true })

    if (
      dateBirth.day.length > 2 ||
      dateBirth.month.length > 2 ||
      dateBirth.year.length > 4
    )
      return setErrors({ ...errors, invalid: true })
    if (
      dateBirth.day.length < 2 ||
      dateBirth.month.length < 2 ||
      dateBirth.year.length < 4
    )
      return setErrors({ ...errors, invalid: true })
    if (dateBirth.day < 1 || dateBirth.month < 1 || dateBirth.year < 1970)
      return setErrors({ ...errors, invalid: true })
    if (
      dateBirth.day > 31 ||
      dateBirth.month > 12 ||
      dateBirth.year > new Date().getFullYear()
    )
      return setErrors({ ...errors, invalid: true })
    if (dateBirth.day === '00' || dateBirth.month === '00' || dateBirth.year === '0000')
      return setErrors({ ...errors, invalid: true })

    setResult({
      ...result,
      days: dateDiff.getDate() - 1,
      months: dateDiff.getMonth() + 1,
      years: dateDiff.getFullYear() - 1970
    })

    setErrors({ ...errors, empty: false, invalid: false })
  }

  return (
    <div className='bg-offWhite h-screen pt-20'>
      <div className='bg-white rounded-2xl rounded-br-[25%] w-[92%] mx-auto pt-14 pb-16 shadow-sm sm:max-w-3xl sm:h-[90%]'>
        <form className='grid grid-cols-3 justify-center mx-auto px-6 gap-3 sm:w-[70%] sm:mx-6'>
          <Input tag='day' ph='DD' dateBirth={dateBirth} handleChange={handleChange} />
          <Input tag='month' ph='MM' dateBirth={dateBirth} handleChange={handleChange} />
          <Input tag='year' ph='YYYY' dateBirth={dateBirth} handleChange={handleChange} />
        </form>

        {errors.empty & errors.invalid ? (
          <p className='text-[12px] text-[red] italic mt-2 px-6 absolute sm:px-12 '>
            Please enter a valid date and fill all fields
          </p>
        ) : (
          ''
        )}

        {errors.empty & !errors.invalid ? (
          <p className='text-[12px] text-[red] italic mt-2 px-6 absolute sm:px-12 '>
            Please fill all fields
          </p>
        ) : (
          ''
        )}

        {errors.invalid & !errors.empty ? (
          <p className='text-[12px] text-[red] italic mt-2 px-6 absolute sm:px-12 '>
            Please enter a valid date
          </p>
        ) : (
          ''
        )}

        <div className='inline-flex items-center justify-center w-full mt-8'>
          <hr className='w-[88%] h-[2px] my-8 bg-lightGrey border-0' />
          <span
            className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 bg-purple rounded-full p-3 sm:translate-x-72 active:bg-offBlack'
            onClick={handleResult}
          >
            <IconArrow />
          </span>
        </div>

        <div className='grid justify-center mt-6'>
          <Parraf n={result.years} time='years' />
          <Parraf n={result.months} time='months' />
          <Parraf n={result.days} time='days' />
        </div>
      </div>
      <footer className='bg-offWhite w-full h-[10%] flex items-center justify-center'>
        <p className='text-center text-[12px] text-[#666666] mt-4'>
          Make with ♥ by Diloes
        </p>
      </footer>
    </div>
  )
}

export default Home
