function digital() {
  const NewDate = new Date();
  let h = NewDate.getHours();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12; // Convert to 12-hour format
  h = h.toString().padStart(2, 0);
  const m = NewDate.getMinutes().toString().padStart(2, 0);
  const s = NewDate.getSeconds().toString().padStart(2, 0);

  const timestring = `${h}:${m}:${s} ${ampm}`;
  document.getElementById("clock").textContent = timestring;
}
digital();
setInterval(digital, 1000);
