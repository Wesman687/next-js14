import React from 'react'

function RootLayout({children}) {
  return (
    <div>
        <h1 className='font-bold text-4xl text-center'>Posts</h1>
      {children}
    </div>
  )
}

export default RootLayout
