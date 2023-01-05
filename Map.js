var modal = document.getElementById("myModal");
var mapDetailInfo = document.getElementById("mapDetailInfo");
var mapDetailInfoTittle = document.getElementById("mapDetailInfoTittle");

// Get the button that opens the modal
var btn = document.getElementById("mapBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Adding actions to each state
/*
var WA = document.getElementById("WA");
WA.addEventListener("click", ()=>{
  mapDetailInfoTittle.innerHTML ="U.S MAP - Washington"
  mapDetailInfo.innerHTML = "PRUEBA";

})
*/


const states = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    region: 'Southeast'
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    region: 'Northwest'
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    region: 'Southwest'
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    region: 'Southeast'
  },
  {
    name: 'California',
    abbreviation: 'CA',
    region: 'West'
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    region: 'West'
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
    region: 'Northeast'
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
    region: 'Northeast'
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    region: 'Southeast'
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    region: 'Southeast'
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
    region: 'Pacific'
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
    region: 'West'
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
    region: 'Midwest'
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
    region: 'Midwest'
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
    region: 'Midwest'
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
    region: 'Midwest'
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
    region: 'Southeast'
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
    region: 'Southeast'
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
    region: 'Northeast'
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
    region: 'Mid-Atlantic'
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    region: 'Northeast'
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
    region: 'Midwest'
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
    region: 'Midwest'
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
    region: 'Southeast'
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
    region: 'Midwest'
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
    region: 'West'
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
    region: 'Midwest'
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
    region: 'West'
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    region: 'Northeast'
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    region: 'Northeast'
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
    region: 'Southwest'
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    region: 'Northeast'
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
    region: 'Southeast'
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
    region: 'Midwest'
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
    region: 'Midwest'
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    region: 'South'
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
    region: 'West'
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    region: 'Northeast'
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    region: 'Northeast'
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
    region: 'Southeast'
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
    region: 'Midwest'
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
    region: 'Southeast'
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
    region: 'Southwest'
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
    region: 'West'
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
    region: 'Northeast'
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
    region: 'Mid-Atlantic'
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
    region: 'West'
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
    region: 'Mid-Atlantic'
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    region: 'Midwest'
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
    region: 'West'
  }
]
// Creating an arrow function for each state in the objects list
  for (const state of states) {
    state.abbreviation = document.getElementById(state.abbreviation);
    state.abbreviation.addEventListener("click", ()=>{
      mapDetailInfoTittle.innerHTML = "U.S MAP - " +state.name + ` (${state.region})`;
      if(state.region === "West"  ||  state.region === "Midwest"){
        mapDetailInfo.innerHTML ="___ installation is available, in order to continue and request the installation, I am sharing the contact with You where You can request this service. The installations team will follow up with You and provide You with materials, dates, and costs. <br><br> West. Phone# 1-877-695-7664."
      }
      else if(state.region === "Southwest"||state.region === "Southeast"){
        mapDetailInfo.innerHTML ="___ installation is available, in order to continue and request the installation, I am sharing the contact with You where You can request this service. The installations team will follow up with You and provide You with materials, dates, and costs. <br><br> South. Phone# 1-888-516-1010."
      }
      else if(state.region === "Northeast"||state.region === "Northwest" ||state.region === "Mid-Atlantic"){
        mapDetailInfo.innerHTML ="___ installation is available, in order to continue and request the installation, I am sharing the contact with You where You can request this service. The installations team will follow up with You and provide You with materials, dates, and costs. <br><br> North. Phone# 1-877-505-4923."
      }
    })

  }

