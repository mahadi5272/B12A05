  document.addEventListener("DOMContentLoaded", function () {
  // =====================
  // Heart Click Counter
  // =====================
  let count = 0;
  const countDisply = document.getElementById("counter");
  const hearts = document.getElementsByClassName("click-heart");

  for (let heart of hearts) {
    heart.addEventListener("click", function () {
      count++;
      countDisply.innerText = count;
    });
  }

  // =====================
  // Copy Counter
  // =====================
  let copyCount = 0;
  const displayCopy = document.getElementById("disply");
  const copyes = document.getElementsByClassName("copy-count");

  for (let copy of copyes) {
    copy.addEventListener("click", function () {
      copyCount++;
      displayCopy.innerText = copyCount;
    });
  }

  // =====================
  // Call System
  // =====================
  let coins = 100;
  const coinDisplay = document.getElementById("coins");
  const callButtons = document.querySelectorAll(".call");
  const copyButtons = document.querySelectorAll(".border"); // copy number buttons
  const historyContainer = document.getElementById("history-container"); // fixed
  const clearBtn = document.getElementById("clear-history"); // fixed

  // Call button functionality
  for (let btn of callButtons) {
    btn.addEventListener("click", function () {
      if (coins >= 20) {
        coins -= 20;
        coinDisplay.innerText = coins;

        const card = btn.closest(".bg-white"); // safer than parentElement
        const contentDiv = card.querySelector(".cards");

        const serviceName = contentDiv.querySelector("h1").innerText;
        const serviceDesc = contentDiv.querySelector(".sub-title").innerText;
        const serviceNum = contentDiv.querySelector(".service-Num").innerText;

        alert(serviceName + " | " + serviceDesc + " | " + serviceNum);

        // Call history entry
        const time = new Date().toLocaleTimeString();
        const entry = document.createElement("div");
        entry.classList.add("flex", "gap-2", "items-center");
        entry.innerHTML = `
          <img class="w-[24px] h-[24px]" src="../assets/phone-solid-full.svg" alt="">
          <span>${serviceName} (${serviceNum}) at ${time}</span>
        `;
        historyContainer.appendChild(entry);
      } else {
        alert("Not enough coins!");
      }
    });
  }

  // Copy button functionality (copy number + clipboard)
  for (let btn of copyButtons) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".bg-white");
      const contentDiv = card.querySelector(".cards");
      const serviceNum = contentDiv.querySelector(".service-Num").innerText;

      navigator.clipboard.writeText(serviceNum).then(() => {
        alert("Copied Service Number: " + serviceNum);
      }).catch(err => {
        alert("Copy failed!");
        console.log(err);
      });
    });
  }

  // Clear Call History
  clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
  });
});



