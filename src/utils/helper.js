export const statusCanBe = [
  { id: 1, status: "pending", bg: "#eab308" },
  { id: 2, status: "in-progress", bg: "#3b82f6" },
  { id: 3, status: "completed", bg: "#10b981" },
  { id: 4, status: "rejected", bg: "#f43f5e" },
];

export const checkStatus = (val) =>
  statusCanBe[statusCanBe.findIndex((item) => item.status == val)].bg;



  export const getCorrectDate = (date) =>{

    return date

  }