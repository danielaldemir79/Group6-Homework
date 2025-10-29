
// read json from a url using fetch and get the response
const peopleRaw = await fetch('people.json');

// unpack the json into a data structure in memory ('deserialize')
const people = await peopleRaw.json();


// Calculate age function based on birth date
function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  // Adjust if birthday hasn't occurred this year yet
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age; // returnera åldern!
}



// Get DOM elements
const sortDropdown = document.getElementById('sort-type');
const searchInput = document.getElementById('search-input');
const searchContainer = document.getElementById('search-container');



function render(sortType, searchTerm = '') {
  // sortType: 'firstName', 'lastName', 'email', 'age'
  // searchTerm: vad användaren skrivit i sökrutan
  
  let filteredPeople;
  
  // Filter och sortera baserat på sortType
  switch (sortType) {
    
    case 'firstName':
      filteredPeople = people 
        .filter(({ firstName }) => searchTerm === '' 
          || firstName.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .toSorted((a, b) => a.firstName > b.firstName ? 1 : -1);
      break;
      
    case 'lastName':
      filteredPeople = people
        .filter(({ lastName }) => searchTerm === '' 
          || lastName.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .toSorted((a, b) => a.lastName > b.lastName ? 1 : -1);
      break;
      
    case 'email':
      filteredPeople = people
        .filter(({ email }) => searchTerm === '' 
          || email.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .toSorted((a, b) => a.email > b.email ? 1 : -1);
      break;
      
    case 'age':
      filteredPeople = people
        .filter((person) => {
          if (searchTerm === '') return true; //Show all if empty
          const age = calculateAge(person.birthDate);
          return age.toString().startsWith(searchTerm);
          //returns age in string
        })
        .toSorted((a, b) => calculateAge(a.birthDate) - calculateAge(b.birthDate)); // Sortera på ålder (yngst först)
      break;
      
    default:
      filteredPeople = []; // Om inget giltigt val, tom lista
  }

  // Skapa HTML
  let html = filteredPeople 
    .map(({ firstName, lastName, email, birthDate }) => {
      const age = calculateAge(birthDate);
      return `
        <section class="person">
          <p><b>First name:</b> ${firstName}</p>
          <p><b>Last name:</b> ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Date of birth:</b> ${birthDate} <span class="age-highlight">(${age} år gammal)</span></p>
        </section>
      `;
    })
    .join(''); // Slå ihop alla sektioner till en sträng
  
  // Visa resultatet
  document.querySelector('.people').innerHTML = html; 
}


// Vid dropdown förändring
sortDropdown.addEventListener('change', (e) => {
  const sortType = e.target.value; // Value i dropdown

  if (sortType === '') {
    // Inget valt - dölj sökruta och rensa input
    searchContainer.style.display = 'none'; // Dölj sökruta
    searchInput.value = ''; // Nollställ input-fältet
    document.querySelector('.people').innerHTML = ''; // Töm resultat
  } else {
    // Något valt
    searchContainer.style.display = 'block'; // Visa sökruta
    searchInput.value = ''; // Nollställ input-fältet
    render(sortType, ''); // Rendera med valt sorteringsalternativ och tom sökterm
  }
});

// lyssna på sökinput förändring
searchInput.addEventListener('keyup', (e) => {  // Vid keyup i sökinput
  const currentSort = sortDropdown.value; // Value i dropdown
  const searchTerm = e.target.value;  // Text i sökinput
  render(currentSort, searchTerm);    // Rendera med nuvarande sortering och sökterm
});







