// Hàm để tạo đối tượng với cấu trúc name, age, address
function createCustomer(name, age, address) {
  return { name, age, address };
}

// Hàm để xử lý mảng đầu vào và tạo ra mảng kết quả
function createCustomers(customers) {
  return customers
    .map((customer) => {
      // Tách họ và tên để tạo shortName
      const nameParts = customer.name.split(" ");
      const shortName = nameParts[0] + " " + nameParts[nameParts.length - 1];

      // Tạo đối tượng mới với shortName
      return {
        ...customer,
        shortName,
      };
    })
    .sort((a, b) => a.age - b.age); // Sắp xếp theo tuổi tăng dần
}

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);

console.log(result);
