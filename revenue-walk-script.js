// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {
  // Main Revenue Walk Chart (Waterfall style chart could be complex with Chart.js directly,
  // so we'll simulate it with stacked bars and a line for total)
  const revenueWalkCtx = document.getElementById('revenueWalkChart').getContext('2d');
  new Chart(revenueWalkCtx, {
    type: 'bar', // Using bar for components
    data: {
      labels: ['Q1 Start', 'New Business', 'Lost Business', 'Shrinkage', 'Organic Growth', 'Q1 End'],
      datasets: [
        {
          label: 'Revenue Change',
          data: [
            200000, // Q1 Start
            150000, // New Business
            -45000, // Lost Business
            -20000, // Shrinkage
            75000, // Organic Growth
            null, // Placeholder for Q1 End (calculated)
          ],
          backgroundColor: [
            'rgb(147, 197, 253)', // gray-400 for start
            'rgb(52, 211, 153)', // green-500 for new
            'rgb(239, 68, 68)', // red-500 for lost
            'rgb(249, 115, 22)', // orange-500 for shrinkage
            'rgb(59, 130, 246)', // blue-500 for organic
            'rgb(37, 99, 235)', // blue-600 for end
          ],
          borderColor: [
            'rgb(147, 197, 253)',
            'rgb(52, 211, 153)',
            'rgb(239, 68, 68)',
            'rgb(249, 115, 22)',
            'rgb(59, 130, 246)',
            'rgb(37, 99, 235)',
          ],
          borderWidth: 1,
        },
        // To show cumulative effect, we could add a line or another bar series
        // For simplicity, let's keep it as separate bars for now, representing components
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // We'll label directly on the bars
        },
        title: {
          display: false,
          text: 'Quarterly Revenue Walk',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                  context.parsed.y
                );
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: '#6B7280',
          },
        },
        y: {
          beginAtZero: false,
          grid: {
            color: '#E5E7EB',
          },
          ticks: {
            color: '#6B7280',
            callback: function (value) {
              return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(value);
            },
          },
        },
      },
    },
  });

  // New Business by Segment Chart (Example: Doughnut Chart)
  const newBusinessSegmentCtx = document.getElementById('newBusinessSegmentChart').getContext('2d');
  new Chart(newBusinessSegmentCtx, {
    type: 'doughnut',
    data: {
      labels: ['Enterprise', 'Mid-Market', 'SMB', 'Public Sector'],
      datasets: [
        {
          label: 'New Business',
          data: [70000, 40000, 25000, 15000], // Corresponds to $150k total
          backgroundColor: [
            'rgb(59, 130, 246)', // blue-500
            'rgb(16, 185, 129)', // emerald-500
            'rgb(245, 158, 11)', // amber-500
            'rgb(168, 85, 247)', // violet-500
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#4B5563', // gray-700
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                  context.parsed
                );
              }
              return label;
            },
          },
        },
      },
    },
  });
});