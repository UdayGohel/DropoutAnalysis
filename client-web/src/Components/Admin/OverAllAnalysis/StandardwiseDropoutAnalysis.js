import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ip } from "../../../Config/ip";

const StandardwiseDropoutAnalysis = ({
  selectedCity,
  selectedTaluka,
  selectedDistrict,
  selectedState,
}) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Capacity",
        data: [30, 40, 35, 50],
      },
      {
        name: "Enroll Athelte",
        data: [49, 60, 10, 12],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -10,
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          colors: ["#000"],
        },
        formatter: function (val) {
          return val + "%"; // Append "%" to the label
        },
      },
      xaxis: {
        categories: ["Cricket", "Basket Ball", "Volly Ball", "Tennis"],
      },
      yaxis: {
        title: {
          text: "Percentage of Dropout students",
          style: {
            fontSize: "12px",
            // fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          }, // Your Y-axis title
        },
      },
      colors: ["#3498db", "#2980b9"],
      title: {
        text: "Standard wise Dropout Analysis",
        align: "center",
        margin: 50,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },
      fill: {
        opacity: 1,
      },
    },
  });

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${ip}/FilterStudentinGroup/Standard?state=${selectedState}&district=${selectedDistrict}&city=${selectedCity}&taluka=${selectedTaluka}&school`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let datas = result.data;
        console.log(datas);
        const categories = datas.StudentsData.map(
          (s) => "Standard " + s.Standard
        ).sort((a, b) => {
          // Assuming 'Standard' is a numerical value, adjust the comparison accordingly
          const standardA = parseInt(a.replace("Standard ", ""));
          const standardB = parseInt(b.replace("Standard ", ""));

          return standardA - standardB;
        });

        const percentages = datas.StudentsData.map((student, index) => {
          const standard = student.Standard;

          const totalStudent = datas.total.find(
            (total) => total.Standard === standard
          );

          if (totalStudent) {
            const percentage = parseFloat(
              (
                (student.numOfStudent / totalStudent.numOfStudent) *
                100
              ).toFixed(2)
            );
            return percentage;
          } else {
            return 0;
          }
        });
        // console.log(percentages);

        setChartData({
          ...chartData,
          series: [
            {
              name: "Standard",
              data: percentages,
            },
          ],
          options: {
            ...chartData.options,
            xaxis: {
              ...chartData.options.xaxis,
              categories: categories,
            },
          },
        });
      })
      .catch((error) => console.log("error", error));
  }, [selectedCity, selectedDistrict, selectedState, selectedTaluka]);

  return (
    <div className="chart m-8">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={chartData.options.chart.height}
      />
    </div>
  );
};

export default StandardwiseDropoutAnalysis;
