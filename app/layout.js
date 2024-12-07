import './globals.css'

export const metadata = {
  title: 'Jimmy Alves Da Silva - Web Developer - Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang='en'>    
      <body className="bg-[#f6fafc] text-[#16130E] font-noto-sans-tamil dark:bg-[#16130E] dark:text-[#F5F5F5]">{children}</body>
    </html>
  )
}
