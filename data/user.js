axios({
  method: "GET",
  url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
})
  .then((res) => {
    loadDataToTable(res);
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

loadDataToTable = (res) => {
  var dataUser = res.data
    .map((user, index) => {
      let { maKhoaHoc, biDanh, tenKhoaHoc, moTa, luotXem } = user;

      if (index > 0 && index <= 5) {
        return `
        <tr>
                    <td scope="row">${index}</td>
                    <td scope="row"><p>${maKhoaHoc}</p></td>
                    <td scope="row"><p>${tenKhoaHoc}</p></td>
                    <td scope="row"><p>${tenKhoaHoc}</p></td>
                    <td scope="row"><p>${tenKhoaHoc}</p></td>
                    <td scope="row"><p>${tenKhoaHoc}</p></td>
                    <td scope="row"><p>${tenKhoaHoc}</p></td>
                    <td scope="row"><p>${tenKhoaHoc}</p></td>
                    <td>
                      <button type="button" class="btn btn-danger">Xóa</button>
                      <button type="button" class="btn btn-success">Sửa</button>
                    </td>
                  </tr>
        `;
      }
    })
    .join("");
  document.getElementById("tbodyUser").innerHTML = dataUser;
};
loadDataToTable();
