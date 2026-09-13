const form = document.getElementById("taxForm");
const result = document.getElementById("result");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "";

  const income = Number(document.getElementById("income").value);

  try {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ income })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to calculate tax.");
    }

    document.getElementById("incomeResult").textContent = formatMoney(data.income);
    document.getElementById("taxResult").textContent = formatMoney(data.tax);
    document.getElementById("netResult").textContent = formatMoney(data.netIncome);
    document.getElementById("rateResult").textContent = `${data.effectiveRate}%`;

    document.getElementById("breakdown").innerHTML = data.breakdown.map(item => {
      const upper = item.to === null ? "above" : item.to;
      return `<div class="bracket">${item.rate * 100}%: ${item.taxable} taxable → ${item.tax} tax</div>`;
    }).join("");

    result.classList.remove("hidden");
  } catch (error) {
    result.classList.add("hidden");
    message.textContent = error.message;
  }
});

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}