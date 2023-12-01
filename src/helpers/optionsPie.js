import { useTheme } from 'styled-components'

function useOptionsPie () {
  const theme = useTheme()
  return {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 10,
          color: theme.text,
          font: {
            size: 12,
            weight: 'bold'
          },
          padding: 15,
          pointStyle: 'rectRounded',
          usePointStyle: true
        }
      }
    }
  }
}

export default useOptionsPie
