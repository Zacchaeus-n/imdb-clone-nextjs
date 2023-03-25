"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

// this is for the purposes of dark mode
// because next-themes only works with client components
// but, when you wrap your pages with it in the layout
// your pages will still be rendered as server-side
// while the providers render as client-side
const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen">{children}</div>
    </ThemeProvider>
  )
}

export default Providers