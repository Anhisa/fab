import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ComparativePerPeriod from '../components/ComparativePerPeriod'
import { CompCategoryCb } from '../components/CompCategoryCb'
import { CompPeriodSlider } from '../components/CompPeriodSlider'
import { ComparativePeriodStyled } from '../styles/styledComponents/ComparativeStyled'

const SelectorComparative = ({setDataComparing}) => {
  const [periodComparison, setPeriodComparison] = useState({
    periodA: '',
    periodB: '',
  })
  const [categories, setCategories] = useState({
    mostRetweeted: true,
    mostHashtags: true,
    mostMentioned: true,
    mostReplied: true,
    monthlyTweets: true,
  })

  
  const handleComparison = () => {
   console.log('handling comparison')
    setDataComparing((prev) => {
      return {
        ...prev,
        periodComparison,
        accounts:{
          accountIdA: '',
    accountIdB: '',
        },
        categories,
        isPeriodComparisonActive: true,       
      }
    })   

    
  }
  return (
    <ComparativePeriodStyled>
      <ComparativePerPeriod setDataComparing={setPeriodComparison}/>
      <CompCategoryCb setCategories={setCategories} />
        {/* <CompPeriodSlider setPeriod={setPeriod} /> */}
        <div className='btnContainer'>
        <Button variant="contained" onClick={handleComparison} className='btn'>COMPARAR</Button>
        </div>
      </ComparativePeriodStyled>
  )
}

export default SelectorComparative