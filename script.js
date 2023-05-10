/* Chart */

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Développer', 'Supprimer', 'Entreprendre', 'Concevoir', 'Communiquer'],
    datasets: [{
      data: [1, 2, 3, 2, 1], // Replace with data from your database
      backgroundColor: '#1eecb7',
      borderWidth: 0.5, 
      color: "#fff"
    }]
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 3
      }
    },
    plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltip: {
      mode: 'index'
    }

    }
  }
});

Chart.defaults.global.defaultFontColor = "#fff";

/* Project Galleries */

let galleryList = document.getElementById("galleryList");
let galleryIcons = document.getElementById("galleryIcons");

function listAppear() {
  let galleryList = document.getElementById("galleryList");
let galleryIcons = document.getElementById("galleryIcons");
  galleryList.style.display = "flex";
  galleryIcons.style.display = "none";
  
}

function iconsAppear() {
  let galleryList = document.getElementById("galleryList");
let galleryIcons = document.getElementById("galleryIcons");
  galleryList.style.display = "none";
  galleryIcons.style.display = "flex";
}

/* Text area */

const textarea = document.querySelector('#description');

textarea.addEventListener('click', function() {
  this.selectionStart = 0;
});


/* Traces */


function closeTraces(){
  let trace = document.getElementById('tracesShowcase');
  trace.classList.add('traceDisapear');
  trace.classList.remove('traceAppear');
}

function openTraces(){
  let trace = document.getElementById('tracesShowcase');
  trace.classList.add('traceAppear');
  trace.classList.remove('traceDisapear');
}