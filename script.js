// Function to navigate to different pages
function navigateTo(url) {
  window.location.href = url;
}

// Chart.js initialization for Revenue Walk
document.addEventListener('DOMContentLoaded', function () {
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Revenue ($)',
          data: [12000, 15000, 13000, 18000, 16000, 20000],
          borderColor: 'rgb(59, 130, 246)', // Tailwind blue-500
          backgroundColor: 'rgba(59, 130, 246, 0.2)', // Light blue fill
          tension: 0.3,
          fill: true,
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(59, 130, 246)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: '#6B7280', // gray-500
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: '#E5E7EB', // gray-200
          },
          ticks: {
            color: '#6B7280', // gray-500
          },
        },
      },
    },
  });

  // Chart.js initialization for Sales by Region (New Chart)
  const salesByRegionCtx = document.getElementById('salesByRegionChart').getContext('2d');
  new Chart(salesByRegionCtx, {
    type: 'bar',
    data: {
      labels: ['Coast', 'Western', 'IMDB', 'Life'],
      datasets: [
        {
          label: 'Sales ($)',
          data: [8500, 11200, 9800, 7500],
          backgroundColor: [
            'rgba(59, 130, 246, 0.7)', // blue-500
            'rgba(16, 185, 129, 0.7)', // emerald-500
            'rgba(245, 158, 11, 0.7)', // amber-500
            'rgba(239, 68, 68, 0.7)', // red-500
          ],
          borderColor: [
            'rgb(59, 130, 246)',
            'rgb(16, 185, 129)',
            'rgb(245, 158, 11)',
            'rgb(239, 68, 68)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
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
          beginAtZero: true,
          grid: {
            color: '#E5E7EB',
          },
          ticks: {
            color: '#6B7280',
          },
        },
      },
    },
  });
});