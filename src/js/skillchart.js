// Import necessary components from Chart.js
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";

// Register the components
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

// Define your custom plugin
const centerTextPlugin = {
  id: "centerTextPlugin",
  beforeDraw(chart) {
    if (chart.config.options.elements?.center) {
      // Get the drawing context
      const ctx = chart.ctx;

      // Get options from the center object in options
      const centerConfig = chart.config.options.elements.center;

      // Set font settings to draw it correctly
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

      // Draw text in center
      ctx.fillText(centerConfig.text, centerX, centerY);
    }
  },
};

// Register the plugin
Chart.register(centerTextPlugin);
Chart.defaults.font.family = "Montserrat, sans-serif";

// Define the chart options
const baseOptions = {
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
  cutout: "70%",
  responsive: true,
  maintainAspectRatio: true,
};

// Define your colors
const allbgcolors = [
  "#fd676095",
  "#ffa05995",
  "#ffc15795",
  "#ffd54e95",
  "#c7db3995",
  "#9ccc6495",
  "#66bb6a95",
  "#4db68995",
  "#15b49395",
  "#129d7595",
];
const bgcolor = Array(10).fill("#fff");

// Keep this in the order that they should show on the website
const skills = ["cpp", "python", "java", "bash", "linux", "matlab"];

const skillDetails = {
  cpp: {
    label: "C/C++",
    id: "skill-canvas-cpp",
    score: 8, // out of 10
  },
  python: {
    label: "Python",
    id: "skill-canvas-python",
    score: 8, // out of 10
  },
  java: {
    label: "Java",
    id: "skill-canvas-java",
    score: 7, // out of 10
  },
  bash: {
    label: "Bash",
    id: "skill-canvas-bash",
    score: 7, // out of 10
  },
  linux: {
    label: "Linux",
    id: "skill-canvas-linux",
    score: 7, // out of 10
  },
  matlab: {
    label: "Matlab",
    id: "skill-canvas-matlab",
    score: 5, // out of 10
  },
};

// Create the charts
skills.forEach((skill) => {
  const { label, id, score } = skillDetails[skill];
  const skillColors = allbgcolors.slice(0, score).concat(bgcolor.slice(score));

  const data = {
    datasets: [
      {
        label: label,
        data: [...Array(score).fill(1), 10 - score],
        backgroundColor: skillColors,
        borderWidth: 0,
        hoverBackgroundColor: skillColors,
        hoverBorderWidth: 0,
      },
    ],
  };

  // Get the canvas element
  const ctx = document.getElementById(id);

  // Create the chart
  new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
      ...baseOptions,
      elements: {
        center: {
          color: "#3c3c3c", // Default color
          sidePadding: 0, // Default side padding (as a percentage)
          text: label, // Center text
        },
      },
    },
  });
});
