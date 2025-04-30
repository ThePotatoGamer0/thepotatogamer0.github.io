const statusBox = document.getElementById("status-box");

async function checkServerStatus() {
  const ip = document.getElementById("ip-input").value.trim();
  if (!ip) {
    statusBox.style.backgroundColor = "gray";
    statusBox.textContent = "Please enter a valid IP.";
    return;
  }

  statusBox.style.backgroundColor = "gray";
  statusBox.textContent = "Checking...";

  try {
    const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
    const data = await response.json();

    if (data.online) {
      statusBox.style.backgroundColor = "green";
      statusBox.textContent = "Server is ONLINE";
    } else {
      statusBox.style.backgroundColor = "red";
      statusBox.textContent = "Server is OFFLINE";
    }
  } catch (error) {
    statusBox.style.backgroundColor = "darkred";
    statusBox.textContent = "Error checking server.";
  }
}