import Image from "next/image"

const Quote = ({quote}) => {
  return (
    <div className='rounded flex flex-col items-center mt-8 bg-sky-50 text-gray-800 max-w-sm px-6 pt-4 pb-4'>
      <Image src="/images/quote.png" width={81} height={59} className="mb-2"/>
      <p>{quote.quote}</p>
      <small className="font-bold mt-1 text-violet-700">{`-${quote.author}`}</small>
    </div>
  )
}

export default Quote
