import ProgressBar from 'react-bootstrap/ProgressBar';
export function CreateChart(list) {
  //get max value from list

  const maxValue = Math.max(...list.map((item) => item));

  const maxValueClosest = Math.ceil(maxValue / 10) * 10;

  const progressBarList = list.map((item, index) => {
    return (
  
        <ProgressBar
          variant="warning"
          key={index}
          max={maxValueClosest}
          now={item}
          label={<p style={{
            color: '#121f45',
            fontSize: '12px',
            fontWeight: '800',
            margin:'0px',
            padding: '0',
          }}>{item}</p>}
        />

    );
  });
  return progressBarList;
}
