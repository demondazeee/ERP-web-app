import {ChartData, ChartType, ChartOptions} from 'chart.js'

export interface ChartDataProp{
    data: ChartData
    type: ChartType,
    options?: ChartOptions
}