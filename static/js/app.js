// from data.js
var tableData = data;
var q_date_set = []

filter_table = d3.select("#filter-btn");

filter_table.on("click" ,  function() {
    
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue)
    
    var filteredData = tableData.filter(item => item.datetime === inputValue);
    

    var dataRoll = d3.select(".data-rols");

    dataRoll.html("");

    var columns = ["DateTime" , "City" , "State", "Country" , "Shape", "Duration", "Comments"]

  // ----------------------------------------------------------------------------------------------
  function tabulate(data, columns) {
    var table = d3.select('table')
    var	tbody = d3.select('tbody');

    var rows = tbody.selectAll('tr')
      .data(filteredData)
      .enter()
      .append('tr');

    var cells = rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return {column: column, value: row[column]};
        });
      })
      .enter()
      .append('td')
        .text(function (d) { return d.value; });

  return table;
}

tabulate(filteredData, ["datetime" , "city" , "state", "country" , "shape","duration","comments"]); 

});
	