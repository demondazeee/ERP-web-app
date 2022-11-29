import 'chart.js/auto';
import { Chart, } from 'react-chartjs-2';
import {ChartData, ChartType, ChartOptions} from 'chart.js'
import { ChartDataProp } from '../../utils/ChartTypes';



const Charts = ({type, data, options}: ChartDataProp) =>{

    return (
        <>
            <Chart type={type} data={data} options={{
                maintainAspectRatio : false,
                responsive: true
            }}/>
        </>
    )
}

export default Charts