// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody"); // We declare the variable and tell js to look for the tbody tags in HTML

// Creates function to build the table
function buildTable(data) {
    tbody.html(""); //Clears out any existing data
    
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); //tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
        Object.values(dataRow).forEach((val) => {              // By starting our line of code with Object.values, 
            let cell = row.append("td"); // Table data tag     // we're telling JavaScript to reference one object from the array of UFO sightings. 
            cell.text(val);                                    // By adding (dataRow) as the argument, we are saying that we want the values 
                                                               // to go into the dataRow. We've added forEach((val) to specify that 
                                                               // we want one object per row.
    
        });
        
    });
  }



// Handle click funtion 
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value"); // We're telling D3 to look for the #datetime id in the HTML tags.
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date); // Show only the rows where the date is equal to the date filter we created.
    };

    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
