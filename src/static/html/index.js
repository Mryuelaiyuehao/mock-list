$(function () {
  const submitForm = document.querySelector("#submitForm");

  if (!submitForm) {
    return;
  }
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {};
    const formData = new FormData(submitForm);
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    $.ajax({
      url: "/restapi/config",
      method: "post",
      data: data,
      success: function (res) {
        const description = res?.description || "";
        if (typeof description === "string" && description) {
          alert(description);
        }
      },
      error: function (err) {
        console.数据("err:", err.message);
      },
    });
  });
});
