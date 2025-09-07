let count = 0;
let btnarray = [];

document
  .getElementById("button-container")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const btnId = e.target.id;
      handleButtonClick(btnId);
    }
  });

function handleButtonClick(id) {
  if (!btnarray.includes(id)) {
    if (btnarray.length < 4) {
      btnarray.push(id);
      handleNotExist(id);
    }
  } else {
    btnarray = btnarray.filter((item) => item !== id);
    handleExist(id);
  }

  if (btnarray.length === 4) {
    handleCouponSection();
  } else {
    const couponSection = document.getElementById("coupon-section");
    couponSection.classList.add("hidden");

    const discount = document.getElementById("discount-id");
    discount.classList.add("hidden");

    const couponInput = document.getElementById("coupon-input");
    couponInput.value = "";
  }
}

function handleExist(id) {
  const button = document.getElementById(id);

  button.classList.remove("bg-[#1DD100]");
  button.classList.remove("text-white");
  button.classList.add("bg-[#F7F8F8]");
  button.classList.add("text-[rgba(3,7,18,0.50)]");

  const table = document.querySelectorAll("#table-container tr");

  for (const tb of table) {
    if (tb.querySelector("td") && tb.querySelector("td").innerText === id) {
      tb.remove();
    }
  }

  const price = document.getElementById("total-price");
  price.innerText = (550 * btnarray.length).toString();

  const grandTotal = document.getElementById("grand-total");
  grandTotal.innerText = (550 * btnarray.length).toString();
}

function handleNotExist(id) {
  const button = document.getElementById(id);
  button.classList.remove("bg-[#F7F8F8]");
  button.classList.remove("text-[rgba(3,7,18,0.50)]");
  button.classList.add("bg-[#1DD100]");
  button.classList.add("text-white");

  const table = document.getElementById("table-container");

  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.innerText = id;
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  td2.innerText = "Economy";
  tr.appendChild(td2);

  const td3 = document.createElement("td");
  td3.innerText = "550";
  tr.appendChild(td3);

  table.appendChild(tr);

  const price = document.getElementById("total-price");
  price.innerText = (550 * btnarray.length).toString();

  const grandTotal = document.getElementById("grand-total");
  grandTotal.innerText = (550 * btnarray.length).toString();
}

function handleCouponSection() {
  const couponSection = document.getElementById("coupon-section");
  couponSection.classList.remove("hidden");
}

function applyCoupon() {
  const couponInput = document.getElementById("coupon-input");

  if (couponInput.value === "NEW15") {
    const discountedPrice = (0.15 * (550 * btnarray.length)).toString();

    const discount = document.getElementById("discount-id");
    discount.classList.remove("hidden");

    const discountValue = document.getElementById("discount-value");
    discountValue.innerText = discountedPrice;

    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = (550 * btnarray.length - discountedPrice).toString();
  } else if (couponInput.value === "Couple20") {
    const discountedPrice = (0.20 * (550 * btnarray.length)).toString();

    const discount = document.getElementById("discount-id");
    discount.classList.remove("hidden");

    const discountValue = document.getElementById("discount-value");
    discountValue.innerText = discountedPrice;

    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = (550 * btnarray.length - discountedPrice).toString();
  }
  else{
    alert("Wrong Coupon Code Entered");
  }
}
