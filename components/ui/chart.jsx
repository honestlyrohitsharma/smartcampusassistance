export const Chart = ({ children }) => {
  return <div className="chart">{children}</div>
}

export const ChartContainer = ({ children }) => {
  return <div className="chart-container">{children}</div>
}

export const ChartTitle = ({ children }) => {
  return <div className="chart-title">{children}</div>
}

export const ChartXAxis = ({ dataKey }) => {
  return <div className="chart-x-axis" data-key={dataKey}></div>
}

export const ChartYAxis = () => {
  return <div className="chart-y-axis"></div>
}

export const ChartBar = ({ data, xAxis, yAxis, dataKey, barSize, fill }) => {
  return <div className="chart-bar" data={JSON.stringify(data)} data-key={dataKey} bar-size={barSize} fill={fill}></div>
}

export const ChartLine = ({ data, xAxis, yAxis, dataKey, stroke, strokeWidth }) => {
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
