import '@/styles/globals.css'
import { store } from '../store'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import CometChatSSR from '@/components/CometChatNoSSR'

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, [])
  if (!showChild || typeof window === 'undefined') {
    return null
  } else {
    <Provider store={store}>
      <CometChatSSR />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  }
}
