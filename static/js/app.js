// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out data if exists
    tbody.html("");
    // Next, loop through objects in data
    data.forEach((dataRow) => {
        // and append a row and cells for each value in the row    
        let row = tbody.append("tr");
        // Loop through each field in dataRow and add each value as table cell "td"
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick(){
    // Get the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check if a date was selected and filter data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebulid table using the filtered data @NOTE:  If no date was selected, filteredData will just be original tableData.
    buildTable(filteredData);
}
// Create event to listen for button click
d3.selectAll("#filter-btn").on("click", handleClick);

//Build table with the page loads
buildTable(tableData);