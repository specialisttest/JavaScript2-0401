//server URL
const personApiUrl = "https://randomuser.me/api/?results=3";

document.addEventListener('readystatechange', function (event) {
    if (document.readyState === 'interactive')
        document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
});

//Get persons async function to receive persons list, generate and fill table rows
async function getPersons() {
    try {
        //Get request by fetch
        let response = await fetch(personApiUrl);
        if (response.ok) {
            //Converting the response to Json
            const data = await response.json();
            //Get table element
            const table = document.getElementById("PersonTable");
            //Mapping all persons into the table
            data.results.forEach(function (author) {
                //Create new element to insert into the table
                const tr = createNode('tr'),
                    fullNameRow = createNode('td'),
                    PicRow = createNode('td'),
                    PicEl = createNode('img'),
                    emailRow = createNode('td');
                //Insert the data into the element
                fullNameRow.innerHTML = `${author.name.title}. ${author.name.last} ${author.name.first}`;
                PicEl.src = author.picture.medium;
                emailRow.innerHTML = author.email;
                //Insert the elements into the table
                append(tr, fullNameRow);
                append(PicRow, PicEl);
                append(tr, PicRow);
                append(tr, emailRow);
                append(table, tr);
            })
        }
    }
    catch (e) {
        console.log(e);
    }
}
//Create new element by element name
function createNode(element) {
    return document.createElement(element);
}

// Append the element(el) into the parent
function append(parent, el) {
    return parent.appendChild(el);
}
