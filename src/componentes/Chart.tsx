import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TaskChart = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  const groupedTasks = tasks.reduce((acc: Record<string, number>, task) => {
    if (task.status) {
      acc[task.status] = (acc[task.status] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = Object.entries(groupedTasks).map(([status, count]) => ({
    name: status,
    y: count,
  }));

  const options = {
    chart: {
      type: "pie",
      backgroundColor: null, // پس‌زمینه شفاف
      plotBackgroundColor: null, // پس‌زمینه چارت نیز شفاف
      plotBorderWidth: 0, // حذف مرز
      plotShadow: false,
    },
    title: {
      text: "TodoList<br>Status<br>",
      align: "center",
      verticalAlign: "middle",
      y: 60,
      style: {
        fontSize: "1.1em",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Tasks",
        innerSize: "50%",
        colorByPoint: true,
        data: chartData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TaskChart;
