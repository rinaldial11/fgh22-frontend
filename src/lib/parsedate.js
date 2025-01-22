// function convertDate(date) {
//   return date.split("T")[0].toString().split("-")[1] === "01"
//     ? `January ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "02"
//     ? `February ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "03"
//     ? `March ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "04"
//     ? `April ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "05"
//     ? `May ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "06"
//     ? `June ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "07"
//     ? `July ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "08"
//     ? `August ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "09"
//     ? `September ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "10"
//     ? `October ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "11"
//     ? `November ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "12"
//     ? `December ${date.split("T")[0].toString().split("-")[0]}`
//     : date.split("T")[0].toString().split("-")[1] === "13";
// }
function convertDate(date) {
  if (!date || typeof date !== "string" || !date.includes("T")) {
    console.error("Invalid date format:", date);
    return "Invalid date";
  }

  const [year, month] = date.split("T")[0].split("-");

  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return months[month] ? `${months[month]} ${year}` : "Invalid date";
}

// function convertDateDetails(date) {
//   return date.split("T")[0].toString().split("-")[1] === "01"
//     ? `January ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "02"
//     ? `February ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "03"
//     ? `March ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "04"
//     ? `April ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "05"
//     ? `May ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "06"
//     ? `June ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "07"
//     ? `July ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "08"
//     ? `August ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "09"
//     ? `September ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "10"
//     ? `October ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "11"
//     ? `November ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "12"
//     ? `December ${date.split("T")[0].toString().split("-")[2]}, ${
//         date.split("T")[0].toString().split("-")[0]
//       }`
//     : date.split("T")[0].toString().split("-")[1] === "13";
// }

function convertDateDetails(date) {
  if (!date || typeof date !== "string" || !date.includes("T")) {
    console.error("Invalid date format:", date);
    return "Invalid date";
  }

  const [year, month, day] = date.split("T")[0].split("-");

  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return months[month] ? `${months[month]} ${day}, ${year}` : "Invalid date";
}

function convertTime(time) {
  if (!time || typeof time !== "string" || !time.includes(":")) {
    console.error("Invalid time format:", time);
    return "Invalid time";
  }

  const [hours, minutes] = time.split(":").map(Number);

  const hourText =
    hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "";
  const minuteText =
    minutes > 0 ? `${minutes} ${minutes === 1 ? "minute" : "minutes"}` : "";

  // Gabungkan teks berdasarkan nilai hours dan minutes
  return `${hourText}${hourText && minuteText ? " " : ""}${minuteText}`.trim();
}

export { convertDate, convertDateDetails, convertTime };
