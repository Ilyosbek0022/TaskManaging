
// design,code and etx of the tracker and dashboard was taken from CODEPEN
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboardl() {

  useEffect(() => {

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
    }

    themeToggle?.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);

      themeToggle.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
      }, 300);
    });


    function animateProgressBars() {
      const progressBars = document.querySelectorAll('.progress-fill');

      progressBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
          bar.style.width = progress + '%';
        }, index * 150);
      });
    }


    function animateBarChart() {
      const chartBars = document.querySelectorAll('.bar-fill');

      chartBars.forEach((bar, index) => {
        const parentBar = bar.parentElement;
        const height = parentBar.getAttribute('data-height');

        setTimeout(() => {
          bar.style.height = height + '%';
        }, 800 + (index * 100));
      });
    }


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          if (entry.target.classList.contains('metrics-grid')) {
            animateProgressBars();
          }

          if (entry.target.classList.contains('bar-chart')) {
            animateBarChart();
          }

          observer.unobserve(entry.target);
        }
      });
    });

    const metricsGrid = document.querySelector('.metrics-grid');
    const barChart = document.querySelector('.bar-chart');

    if (metricsGrid) observer.observe(metricsGrid);
    if (barChart) observer.observe(barChart);

  }, []);



  return (

<div>

{/* THEME BUTTON */}

<div className="theme-toggle" id="themeToggle">

<svg className="icon-sun" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
<circle cx="12" cy="12" r="5"/>
<line x1="12" y1="1" x2="12" y2="3"/>
<line x1="12" y1="21" x2="12" y2="23"/>
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
<line x1="1" y1="12" x2="3" y2="12"/>
<line x1="21" y1="12" x2="23" y2="12"/>
<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>

<svg className="icon-moon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>

</div>


<div className="dashboard-container">

<div className="dashboard-header">

<div className="header-content">

<div className="brand-info">
<h1 className="dashboard-title">Analytics Dashboard</h1>
<p className="dashboard-subtitle">Choose our app over others</p>
</div>

<div className="time-range">
<span>Last 30 Days</span>
</div>

</div>
</div>



{/* METRICS */}
<div className="text"><h1 > Why we?</h1></div>
<div className="metrics-grid">

<div className="metric-card revenue-card">



<div className="metric-content">
<h3 className="metric-value">100k+</h3>
<p className="metric-label">users totally</p>
</div>

<div className="progress-bar">
<div className="progress-fill revenue-progress" data-progress="100"></div>
</div>

</div>



<div className="metric-card users-card">



<div className="metric-content">
<h3 className="metric-value">90k</h3>
<p className="metric-label">Active users</p>
</div>

<div className="progress-bar">
<div className="progress-fill users-progress" data-progress="90"></div>
</div>

</div>



<div className="metric-card conversion-card">

<div className="metric-content">
<h3 className="metric-value">2%</h3>
<p className="metric-label">lowly ranked by users</p>
</div>

<div className="progress-bar">
<div className="progress-fill conversion-progress" data-progress="2"></div>
</div>

</div>



<div className="metric-card orders-card">

<div className="metric-content">
<h3 className="metric-value">70%</h3>
<p className="metric-label">users who have already purchased the premium version</p>
</div>

<div className="progress-bar">
<div className="progress-fill orders-progress" data-progress="70"></div>
</div>

</div>

<div className="metric-card conversion-card">

<div className="metric-content">
<h3 className="metric-value">95%</h3>
<p className="metric-label">gighly reccomended by companies</p>
</div>

<div className="progress-bar">
<div className="progress-fill conversion-progress" data-progress="95"></div>
</div>

</div>
</div>



{/* CHART */}

<div className="chart-section">

<div className="chart-card">

<h3 className="chart-title">Weekly Performance</h3>

<div className="bar-chart">

<div className="chart-bar" data-height="60">
<div className="bar-fill"></div>
<span className="bar-label">Mon</span>
</div>

<div className="chart-bar" data-height="75">
<div className="bar-fill"></div>
<span className="bar-label">Tue</span>
</div>

<div className="chart-bar" data-height="45">
<div className="bar-fill"></div>
<span className="bar-label">Wed</span>
</div>

<div className="chart-bar" data-height="85">
<div className="bar-fill"></div>
<span className="bar-label">Thu</span>
</div>

<div className="chart-bar" data-height="70">
<div className="bar-fill"></div>
<span className="bar-label">Fri</span>
</div>

<div className="chart-bar" data-height="90">
<div className="bar-fill"></div>
<span className="bar-label">Sat</span>
</div>

<div className="chart-bar" data-height="55">
<div className="bar-fill"></div>
<span className="bar-label">Sun</span>
</div>

</div>

</div>



{/* STATS */}

<div className="stats-card">

<h3 className="stats-title">Versions/packs</h3>

<div className="stats-list">

<div className="stat-row">
<span className="stat-name">Premium pro+</span>
<span className="stat-value">$150 p/m</span>
</div>

<div className="stat-row">
<span className="stat-name">Premium+</span>
<span className="stat-value">$100 p/m</span>
</div>

<div className="stat-row">
<span className="stat-name">pro</span>
<span className="stat-value">$60 p/m</span>
</div>

<div className="stat-row">
<span className="stat-name">normal</span>
<span className="stat-value">$30 p/m</span>
</div>
<div className="stat-row">
<span className="stat-name">free</span>
<span className="stat-value">$0 p/m</span>
</div>
<Link to="/Premium">
<div className="stat-row">
<span className="stat-name">See more</span>
<span className="stat-value text-center"></span>
</div></Link>

</div>

</div>

</div>

</div>

</div>

  )
}