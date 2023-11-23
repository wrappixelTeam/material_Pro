// =====================================
  // Current-Month Chart
  // =====================================
  var projects = {
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 22, 36, 19, 54]
      }],
        chart: {
        type: 'bar',
        width: 65,
        height: 45,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '45%'
        }
      },
      colors: ["#1E88E5"],
    
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
  };

  var chart_column_basic = new ApexCharts(
    document.querySelector("#current_month_chart"),
    projects
  );
  chart_column_basic.render();

// =====================================
  // Last-Month Chart
  // =====================================
  var projects = {
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 34, 36, 29, 54]
      }],
        chart: {
        type: 'bar',
        width: 65,
        height: 45,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '45%'
        }
      },
      colors: ["#6352CE"],
    
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
  };

  var chart_column_basic = new ApexCharts(
    document.querySelector("#last_month_chart"),
    projects
  );
  chart_column_basic.render();

  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355] },
      { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280] },
    ],

    chart: {
      type: "bar",
      height: 285,
      offsetX: -15,
      toolbar: { show: false },
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },


    colors: ["#1E88E5", "#26C6DA"],


    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [0],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: false,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#sales-chart"), chart);
  chart.render();

    // =====================================
  // Visitors
  // =====================================
  var chart = {
    color: "#adb5bd",
    series: [15, 45, 35 , 20],
    labels: ["Desktop", "Mobile", "tablet", "other" ],
    chart: {
      height: 240,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '80%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#6352CE", "#1E88E5", "#26C6DA", "#EBEEF0"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            height: 190,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#visitors-chart"), chart);
  chart.render();

//   =========================
//    Newsletter
//  ==========================
var chart = {
    series: [
        {
            name: "Open Rate",
            data: [10,1600, 1800, 1000, 3500, 800, 2600],
        },
        {
            name: "Recurring payments",
            data: [10, 4700,2800, 2900, 4500, 4700, 4200],
        },

    ],
    chart: {
        toolbar: {
            show: false,
        },
        type: "line",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
        height: 200,
    },
    colors: ["#1E88E5", "#26C6DA"],
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: [5, 5]
      },
    legend: {
        show: false,
    },
    stroke: {
        curve: "smooth",
        width: 3,
    },
    grid: {
        borderColor: "rgba(0,0,0,0.4)",
        strokeDashArray: 8,
        xaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    xaxis: {
        categories: [
            "16/08",
            "17/08",
            "18/08",
            "19/08",
            "20/08",
            "21/08",
        ],
    },
    yaxis: {
        tickAmount: 4,
    },
    tooltip: {
        theme: "dark",
    },
};

var chart = new ApexCharts(document.querySelector("#newsletter"), chart);
chart.render();

  // =====================================
  // Bandwidth
  // =====================================
  var options2 = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    height: 74,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: "smooth",
    width: 3
  },
  colors: ["#FFFFFF"],
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };

  var chart2 = new ApexCharts(document.querySelector("#bandwidth-chart"), options2);
  chart2.render();

  // =====================================
  // Download
  // =====================================

  var options5 = {
    series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 22, 36, 19, 54]
  }],
    chart: {
    type: 'bar',
    width: 124,
    height: 45,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '30%'
    }
  },
  colors: ["#7EF1FF"],

  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };

  var chart5 = new ApexCharts(document.querySelector("#download-chart"), options5);
  chart5.render();