const days = 7;
const tasks = ["walk", "read", "meditate"];

function createDayOptions() {
  const select = document.getElementById("day");
  for (let i = 1; i <= days; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Dia ${i}`;
    select.appendChild(option);
  }
  select.value = localStorage.getItem("selectedDay") || 1;
  loadDay();
}

function loadDay() {
  const day = document.getElementById("day").value;
  localStorage.setItem("selectedDay", day);

  tasks.forEach(task => {
    const checkbox = document.getElementById(task);
    const saved = localStorage.getItem(`day${day}-${task}`);
    checkbox.checked = saved === "true";

    checkbox.onchange = () => {
      localStorage.setItem(`day${day}-${task}`, checkbox.checked);
    };
  });
}

function resetProgress() {
  if (confirm("Tem certeza que deseja resetar todo o progresso?")) {
    localStorage.clear();
    createDayOptions();
  }
}

window.onload = createDayOptions;
