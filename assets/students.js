let students = [
  {
      id: 1,
      name: "Atakan",
      lastname: "Arıkan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 2,
      name: "Busenur",
      lastname: "Savaş",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 3,
      name: "Ece",
      lastname: "Kubilay",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 4,
      name: "Elif Yağmur",
      lastname: "Şahin",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 5,
      name: "Gaye",
      lastname: "Dinç",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 6,
      name: "Gökdeniz",
      lastname: "Keleş",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 7,
      name: "Hilal",
      lastname: "Baran",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 8,
      name: "Mehmet Akif",
      lastname: "Küçükyılmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 9,
      name: "Merve",
      lastname: "Özel",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 10,
      name: "Muhammet Ali",
      lastname: "Şafak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 11,
      name: "Ömer",
      lastname: "Kuluç",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  }
];

let totalCount = 0;
let maleCount = 0;
let femaleCount = 0;

function list () {
    students.forEach(function(student) {
        studentList.innerHTML += `<li>${student.name} ${student.lastname} - ${student.gender} - ${student.section} - ${student.role}</li>`;
        totalCount++;
        totalC.innerText = totalCount;
    
        if (student.gender === "Erkek") {
            studentMale.innerHTML += `<li>${student.name} ${student.lastname} - ${student.gender} - ${student.section} - ${student.role}</li>`;
            maleCount++;
            maleC.innerText = maleCount; 

        } else if (student.gender === "Kadın") {
            studentFemale.innerHTML += `<li>${student.name} ${student.lastname} - ${student.gender} - ${student.section} - ${student.role}</li>`;
            femaleCount++;
            femaleC.innerText = femaleCount; 
        }
    });
}

list();

