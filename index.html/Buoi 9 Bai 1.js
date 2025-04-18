function validateForm() {
    let ho = document.getElementById('ho').value.trim();
    let ten = document.getElementById('ten').value.trim();
    let sdt = document.getElementById('sdt').value.trim();
  
    if (ho === '' || ten === '' || sdt === '') {
      alert('Vui lòng nhập đầy đủ Họ, Tên và Số điện thoại.');
      return false;
    }
  
    if (!/^\d{10}$/.test(sdt)) {
      alert('Số điện thoại phải là 1 số có đúng 10 chữ số.');
      return false;
    }
  
    return true;
  }
  
  window.onload = function () {
    // Tự động sinh ngày
    let selectNgay = document.getElementById('ngay');
    for (let i = 1; i <= 31; i++) {
      let opt = document.createElement('option');
      opt.value = opt.text = i;
      selectNgay.appendChild(opt);
    }
  
    // Tự động sinh tháng
    let selectThang = document.getElementById('thang');
    for (let i = 1; i <= 12; i++) {
      let opt = document.createElement('option');
      opt.value = opt.text = i;
      selectThang.appendChild(opt);
    }
  
    // Tự động sinh năm
    let selectNam = document.getElementById('nam');
    for (let i = 1900; i <= 2025; i++) {
      let opt = document.createElement('option');
      opt.value = opt.text = i;
      selectNam.appendChild(opt);
    }
  };
  