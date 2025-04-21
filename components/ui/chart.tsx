import type * as React from "react"

export const Chart = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart">{children}</div>
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-container">{children}</div>
}

export const ChartTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-title">{children}</div>
}

export const ChartXAxis = ({ dataKey }: { dataKey: string }) => {
  return <div className="chart-x-axis" data-key={dataKey}></div>
}

export const ChartYAxis = () => {
  return <div className="chart-y-axis"></div>
}

export const ChartBar = ({
  data,
  xAxis,
  yAxis,
  dataKey,
  barSize,
  fill,
}: { data: any[]; xAxis: React.ReactNode; yAxis: React.ReactNode; dataKey: string; barSize: number; fill: string }) => {
  return <div className="chart-bar" data={JSON.stringify(data)} data-key={dataKey} bar-size={barSize} fill={fill}></div>
}

export const ChartLine = ({
  data,
  xAxis,
  yAxis,
  dataKey,
  stroke,
  strokeWidth,
}: {
  data: any[]
  xAxis: React.ReactNode
  yAxis: React.ReactNode
  dataKey: string
  stroke: string
  strokeWidth: number
}) => {
  return (
    <div
      className="chart-line"
      data={JSON.stringify(data)}
      data-key={dataKey}
      stroke={stroke}
      strokeWidth={strokeWidth}
    ></div>
  )
}

export const ChartLegend = () => {
  return <div className="chart-legend"></div>
}

export const ChartTooltip = () => {
  return <div className="chart-tooltip"></div>
}
