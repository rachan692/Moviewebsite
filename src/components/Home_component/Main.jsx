import React from 'react'
import { DiAndroid, DiAngularSimple, DiAppcelerator, DiApple, DiAtom, DiCisco, DiHtml5, DiReact } from 'react-icons/di'

const Main = () => {
  return (
    <div className='mt-2'>
<h1 className='text-center text-5xl'>Technologies that I use</h1>
    <div className='grid grid-cols-4 center'>

<DiAndroid size={200}/>     
<DiCisco size={200}/>
<DiApple size={200}/>
<DiAngularSimple size={200}/>
<DiAtom size={200}/>
<DiReact size={200}/>
<DiAppcelerator size={200}/>
<DiHtml5 size={200}/>
    </div>
    </div>
  )
}

export default Main