export const formatRupiah = (number) => {
  return number
    .toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })
    .split(",")[0];
};
