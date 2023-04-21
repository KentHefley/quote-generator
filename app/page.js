'use client'
import {useState} from 'react'
import { categoriesList } from './categories'
import Quote from './components/Quote'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const categories = categoriesList();
  const [category, setCategory] = useState('')
  const [quote, setQuote] = useState('')

  const handleSelect = (e) => {
    if(e.target.value === 'Select Category') {
      return null
    }

    setCategory(e.target.value)
  }

  const handleBtnClick =  async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY},
      contentType: 'application/json',
    })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    const data = await res.json()
    setQuote(data[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleBtnClick()
  }
  

  return (
    <main className={inter.className}>
      <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-black lg:text-5xl md:text-4xl  text-sky-50">Quote Generator V1</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5">
      <select value={category} onChange={handleSelect} className="bg-gray-50 border w-44 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3">
      <option>Select Category</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      </select>
      <button type='submit' className='mt-5 bg-violet-700 hover:bg-violet-600 text-white font-bold py-2 px-4 border-b-4 border-violet-800 hover:border-violet-900 rounded'>Get Quote</button>
      </form>
      <Suspense fallback={<h2>Loading quote...</h2>}>
      {quote && <Quote quote={quote}/>}
      </Suspense>
    </div>
    </main>
  )
}

