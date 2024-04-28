import { useEffect, useState } from "react"

const useDimention = () => {
  const [dimention, setDimention] = useState({width: 0, height: 0})

  const updateDimention = () => {
    const {innerWidth, innerHeight} = window
    setDimention({width: innerWidth, height: innerHeight})
  }
  
  useEffect(() => {
    updateDimention()
    window.addEventListener("resize", updateDimention)
  }, [])

  return dimention
}

export default useDimention