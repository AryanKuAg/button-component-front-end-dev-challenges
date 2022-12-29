import React from 'react'

function ButtonBox(props) {
    
  return (
    <div className='min-w-[250px] mr-8 mb-12 '>
        <p className='mb-2 text-gray-600 font-medium' style={!props.attribute? {marginBottom: '32px'}: {}}>{props.attribute}</p>
        <button style={{...props, }} className="font-medium ">{props.text}</button>
    </div>
  )
}

export default ButtonBox