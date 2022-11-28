import 'chart.js/auto';
import { Chart, } from 'react-chartjs-2';
import {ChartData, ChartType} from 'chart.js'

interface ChartDataProp{
    data: ChartData
    type: ChartType
}

const Charts = ({type, data}: ChartDataProp) =>{

    return (
        <>
            <Chart type={type} data={data} options={{
                maintainAspectRatio: false
            }}/>
        </>
    )
}

export default Charts