
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

  // Using map to convert our array of objects (people) to html
  // with calculated age displayed next to birth date
  
  
    let html = people
    // sort by firstName like the other files
    .toSorted((a, b) => a.sortType > b.sortType ? 1 : -1)
    // map to convert each element to a string with html
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
    // join to join our array of strings into one large string
    .join('');
  
  // replace the content of article.people element with our new html
   document.querySelector('.people').innerHTML = html;
}






