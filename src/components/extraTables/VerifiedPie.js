import React from 'react'
import { getActivityCreactionDate } from '../../helpers/getActivityCreactionDate'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';
import { PieChartContainer } from '../../styles/styledComponents/PieContainerStyled';

ChartJS.register(ArcElement, Tooltip, Legend);

const VerifiedPie = () => {
  let answer = getActivityCreactionDate()
  console.log('answer', answer)
  let data 
  if(answer.length > 0){
    data = answer.map(item => item.isVerified)
    let [verified, notVerified] = getVerifiedPieData(answer)
    data = [
      verified, notVerified
    ]
  }
  console.log('data', data)
  let dataChart = {
    labels: ['Verificados', 'No verificados'],
    datasets: [
      {
        data: data,
        backgroundColor: ['#00b300', '#ff000f'],
      },
    ]
    
  }

  return (
    <Pie 
      data={dataChart}
      options={{
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 10,
              font: {
                size: 20,
                weight: 'bold'

              },
              padding: 15,
              pointStyle: 'rectRounded',
              usePointStyle: true,

              
          }
        }
      } }

    }
    
    />
  )
}

export default VerifiedPie


function getVerifiedPieData(data){
  let verified = []
  let notVerified = []
  data.forEach(item => {
    if(item.isVerified === 'si'){
      verified.push(item)
    }else{
      notVerified.push(item)
    }
  }
  )
  return [
    verified.length,
    notVerified.length
  ]
}