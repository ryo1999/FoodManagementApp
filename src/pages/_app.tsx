import "@/style/App.css"
import type { AppProps } from 'next/app'
import React from 'react'
// import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
    //   <RecoilRoot>
         <Component {...pageProps} />
    //   </RecoilRoot>
   )
}

export default MyApp