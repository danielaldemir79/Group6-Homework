// Read JSON data
const peopleRaw = await fetch('./people.json');
const people = await peopleRaw.json();



function render(search = '', sortOrder = 'desc') {
  let html = people
    .map(person => ({
      ...person,
      age: calculateAge(person.birthDate)
    }))
    .filter(({ age }) => search === '' || age >= Number(search))
    .toSorted((a, b) => sortOrder === 'asc' ? a.age - b.age : b.age - a.age)
    .map(({ firstName, lastName, email, birthDate, age }) => `
      <section class="person">
        <p><b>First name:</b> ${firstName}</p>
        <p><b>Last name:</b> ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Date of birth:</b> ${birthDate}</p>
        <p><b>Age:</b> ${age}</p>
      </section>
    `)
    .join('');

  document.querySelector('.people').innerHTML = html;
}

// Filter by age input
document.querySelector('.search-field')
  .addEventListener('keyup', event => {
    render(event.target.value);
  });

// Sort by order (asc/desc)
const sortSelect = document.querySelector('.sort-select');
if (sortSelect) {
  sortSelect.addEventListener('change', () => {
    render(document.querySelector('.search-field').value, sortSelect.value);
  });
}

// Initial render
render();
