// import React from 'react';
// import Chart from 'react-google-charts';

// const pieData = [
//   ['Task', 'Hours per Day'],
//   ['Work', 11],
//   ['Eat', 2],
//   ['Commute', 2],
//   ['Watch TV', 2],
//   ['Sleep', 4],
// ];

// const pieOptions = {
//   title: 'My Daily Activities',
//   pieHole: 0.4,
// };

// const PieChart = () => {
//   return (
//     <div className="container mt-5">
//       <h2>React Donut Chart Example</h2>
//       <Chart
//         width={'600px'}
//         height={'320px'}
//         chartType="PieChart"
//         loader={<div>Loading Chart</div>}
//         data={pieData}
//         options={pieOptions}
//         rootProps={{ 'data-testid': '3' }}
//       />
//     </div>
//   );
// };

// export default PieChart;
import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios'; 
const PieChart = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      // axios.get('https://czraohk3e3.execute-api.us-east-1.amazonaws.com/getstage/get')
      axios.get('https://9bbqe612vh.execute-api.us-east-1.amazonaws.com/getstage/get')
        .then(response => {
          console.log(response.status); // Check the status code
          if (response.status === 200) {
            return response.data; // If status is 200, return the data
          } else {
            throw new Error('Failed to fetch data');
          }
        })
        .then(responseData => {
          const pieDataFromResponse = Object.entries(responseData.body).map(([key, value]) => [key, value]);
          setChartData(pieDataFromResponse);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
  
    fetchData();
  }, []);
  
  const pieOptions = {
    // title: 'Voting Results',
    pieHole: 0.4,
    // colors: ['#FF5733', '#3357FF', '#faeb47',]
  };

  return (
    <div className="container mt-4 mx-1">
      <h2>Voting Dashboard</h2>
      <Chart
        width={'600px'}
        height={'320px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[['Task', 'Hours per Day'], ...chartData]} // Update data with fetched data
        options={pieOptions}
        rootProps={{ 'data-testid': '3' }}
      />
    </div>
  );
};

export default PieChart;
