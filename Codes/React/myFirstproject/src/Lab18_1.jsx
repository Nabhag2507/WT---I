function MapDemo(){
    let faculty = [
  {
    rollno: "3314",
    avatar: "https://avatars.githubusercontent.com/u/9999838",
    city: "O'Keefeland",
    name: "Pacocha - Harvey",
    id: "1"
  },
  {
    rollno: "5377",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
    city: "Lake Kaela",
    name: "Carroll, Hickle and Schaefer",
    id: "2"
  },
  {
    rollno: "7078",
    avatar: "https://avatars.githubusercontent.com/u/8684813",
    city: "Sydneehaven",
    name: "Hartmann and Sons",
    id: "3"
  },
  {
    rollno: "70495",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/14.jpg",
    city: "Hellerstead",
    name: "Wisoky LLC",
    id: "4"
  },
  {
    rollno: "8620",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/16.jpg",
    city: "Fort Casimir",
    name: "Schamberger, Ferry and Gerlach",
    id: "5"
  },
  {
    rollno: "987",
    avatar: "https://avatars.githubusercontent.com/u/85767662",
    city: "Mrazburgh",
    name: "Skiles, Wuckert and Aufderhar",
    id: "6"
  },
  {
    rollno: "2332",
    avatar: "https://avatars.githubusercontent.com/u/12824448",
    city: "Riverside",
    name: "Hane - Goyette",
    id: "7"
  },
  {
    rollno: "390",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/60.jpg",
    city: "Herzogmouth",
    name: "Goyette, Auer and Blick",
    id: "8"
  },
  {
    rollno: "64265",
    avatar: "https://avatars.githubusercontent.com/u/55324854",
    city: "Port Franco",
    name: "Rutherford LLC",
    id: "9"
  },
  {
    rollno: "3163",
    avatar: "https://avatars.githubusercontent.com/u/32370594",
    city: "Fort Destineehaven",
    name: "Abernathy Group",
    id: "10"
  },
  {
    rollno: "9070",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/32.jpg",
    city: "Dominicborough",
    name: "Grant - Hand",
    id: "11"
  },
  {
    rollno: "6945",
    avatar: "https://avatars.githubusercontent.com/u/18252566",
    city: "Ritchieworth",
    name: "Willms LLC",
    id: "12"
  },
  {
    rollno: "3668",
    avatar: "https://avatars.githubusercontent.com/u/14177736",
    city: "Leomouth",
    name: "Hettinger and Sons",
    id: "13"
  },
  {
    rollno: "3694",
    avatar: "https://avatars.githubusercontent.com/u/94770402",
    city: "Bakersfield",
    name: "Reichert, Koepp and White",
    id: "14"
  },
  {
    rollno: "67915",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/70.jpg",
    city: "Alfonsochester",
    name: "Nitzsche, Keeling and Bogisich",
    id: "15"
  },
  {
    rollno: "65830",
    avatar: "https://avatars.githubusercontent.com/u/75264773",
    city: "Dickinsonport",
    name: "Okuneva - Champlin",
    id: "16"
  },
  {
    rollno: "40227",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/60.jpg",
    city: "St. Clair Shores",
    name: "Rosenbaum, Roberts and Mills",
    id: "17"
  },
  {
    rollno: "2728",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/16.jpg",
    city: "West Levihaven",
    name: "Hilpert - Leuschke",
    id: "18"
  },
  {
    rollno: "794",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/89.jpg",
    city: "Jacksonville",
    name: "Cruickshank, Franecki and Torphy",
    id: "19"
  },
  {
    rollno: "383",
    avatar: "https://avatars.githubusercontent.com/u/35793469",
    city: "Mertzcester",
    name: "Skiles, Kutch and Spinka",
    id: "20"
  },
  {
    rollno: "83079",
    avatar: "https://avatars.githubusercontent.com/u/37245184",
    city: "Maudfurt",
    name: "Ortiz, Harber and Durgan",
    id: "21"
  },
  {
    rollno: "22104",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/46.jpg",
    city: "Port Halieside",
    name: "Weimann - Medhurst",
    id: "22"
  },
  {
    rollno: "31739",
    avatar: "https://avatars.githubusercontent.com/u/89577199",
    city: "Bergechester",
    name: "Hodkiewicz - Fisher",
    id: "23"
  },
  {
    rollno: "89320",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/77.jpg",
    city: "Whiteland",
    name: "Collins Group",
    id: "24"
  },
  {
    rollno: "1201",
    avatar: "https://avatars.githubusercontent.com/u/28555011",
    city: "Rancho Palos Verdes",
    name: "Bechtelar - Ritchie",
    id: "25"
  },
  {
    rollno: "398",
    avatar: "https://avatars.githubusercontent.com/u/5221056",
    city: "Reyesland",
    name: "DuBuque - Bode",
    id: "26"
  },
  {
    rollno: "67370",
    avatar: "https://avatars.githubusercontent.com/u/87104773",
    city: "Wandaland",
    name: "Dietrich - Nader",
    id: "27"
  },
  {
    rollno: "10712",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/8.jpg",
    city: "Irving",
    name: "Abshire - Littel",
    id: "28"
  },
  {
    rollno: "4971",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/19.jpg",
    city: "Texas City",
    name: "Dicki and Sons",
    id: "29"
  },
  {
    rollno: "654",
    avatar: "https://avatars.githubusercontent.com/u/60238579",
    city: "Ankundingfurt",
    name: "Pagac, Larson and Fahey",
    id: "30"
  },
  {
    rollno: "3583",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/49.jpg",
    city: "Linwoodberg",
    name: "Schiller, Bradtke and Mertz",
    id: "31"
  },
  {
    rollno: "2274",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/50.jpg",
    city: "Camillefurt",
    name: "Mann and Sons",
    id: "32"
  },
  {
    rollno: "9611",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/15.jpg",
    city: "North Brandyberg",
    name: "Kihn, Kunde and Towne",
    id: "33"
  },
  {
    rollno: "92474",
    avatar: "https://avatars.githubusercontent.com/u/29081848",
    city: "Passaic",
    name: "Balistreri LLC",
    id: "34"
  },
  {
    rollno: "179",
    avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/87.jpg",
    city: "Gottliebville",
    name: "Kub LLC",
    id: "35"
  }
];

    return (
  <>
    <div className="d-flex flex-wrap gap-3 p-3">
      {faculty.map((facs) => (
        <div className="card" style={{ width: "18rem" }} key={facs.name}>
          <img src={facs.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{facs.name}</h5>
            <p className="card-text">{facs.city}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))}
    </div>
  </>
);

}

export default MapDemo;