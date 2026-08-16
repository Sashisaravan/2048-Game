import { useState } from 'react'
import { MainGrid } from './components/2048_MainGrid'

function MainGameApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainGrid />
      <footer className="footer">
        Developed by <strong>Sashi Saravan</strong>
      </footer>

    </>
  )
}

export default MainGameApp
