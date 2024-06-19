import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAmount, incrementAsync} from './store/reducers/counterSlice'

function App() {
  const {value} = useSelector(state => state.counter)
  const dispatch = useDispatch()
   console.log(value)
  return (    
    <div className='m-auto container p-10 mt-5 bg-rose-200'>
          <h1 className='text-center text-3xl font-bold text-red-400'>
            Counter : {value}
          </h1>
          <div className='text-center flex items-center justify-center p-10 gap-4'>
            <button onClick={()=> dispatch(increment())} className='border-[3px] border-red-400 rounded bg-transparent text-red-400 py-1 px-2 font-semibold rounded-lg'>Increment</button>
            <button onClick={()=> dispatch(decrement())} className='border-[3px] border-red-400 rounded bg-transparent text-red-400 py-1 px-2 font-semibold rounded-lg'>Decrement</button>
            <button onClick={()=> dispatch(incrementAsync(5))} className='border-[3px] border-red-400 rounded bg-transparent text-red-400 py-1 px-2 font-semibold rounded-lg'>Increment by 5</button>

          </div>
    </div>
  )
}

export default App