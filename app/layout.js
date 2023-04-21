import './globals.css'


export const metadata = {
  title: 'Quote Generator V1',
  description: 'Online app to generate random quotes or by category',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-sky-950">
        {children}
        </body>
    </html>
  )
}
