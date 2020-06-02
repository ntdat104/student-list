let students = [
  {
    maSV: 20187302,
    firstName: "Đạt",
    middleName: "Tiến",
    lastName: "Nguyễn",
    dateOfBirth: "2000-04-10",
    className: "IT-VUW17",
  },
  {
    maSV: 20187302,
    firstName: "Đạt",
    middleName: "Tiến",
    lastName: "Nguyễn",
    dateOfBirth: "2000-04-10",
    className: "IT-VUW17",
  },
];

const Show = () => {
  let id = 0;
  for (let student of students) {
    let maSV = student.maSV;
    let firstName = student.firstName;
    let middleName = student.middleName;
    let lastName = student.lastName;
    let dateOfBirth = student.dateOfBirth;
    let className = student.className;
    console.log(
      `${id}. Mã SV: ${maSV} | Họ và tên: ${lastName} ${middleName} ${firstName} | Ngày sinh: ${dateOfBirth} | Tên Lớp: ${className}.`
    );
    id++;
  }
};

const Create = () => {
  let maSV = document.querySelector(".maSV").value;
  let firstName = document.querySelector(".firstName").value;
  let middleName = document.querySelector(".middleName").value;
  let lastName = document.querySelector(".lastName").value;
  let dateOfBirth = document.querySelector(".dateOfBirth").value;
  let className = document.querySelector(".className").value;
  let student = {
    maSV: maSV,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    className: className,
  };
  students.push(student);
};
