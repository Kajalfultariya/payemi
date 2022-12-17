export var headers = localStorage.getItem("access_token")
  ? {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      // "Content-Type": "application/json",
    }
  : { "Content-Type": "application/json" };
