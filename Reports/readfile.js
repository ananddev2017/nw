var csv = require('node-csv').createParser();

function GetDataVals(testid,callback) {
	
	csv.mapFile('./Reports/Data.csv', function(err, data) {
		if (err) {
			console.log('an error has occured.');
		};
		console.log(data); //Outputs: [ { id: '1', user: 'foo', pass: 'bar' } ]
		console.log(data.length);

		var r = 0;
		for (i = 0; i <= data.length; i++) { 
			if (data[i].UserId == testid)
			{
				testid = i;
				console.log(i);
				break;
			}
		}
		console.log("Found TC row - " + (i+1));
		callback(i);
		return;
	});

};

//Call function to get row
var testid = "user8";
GetDataVals(testid, function(response){
    // Here you have access to your variable
    //console.log(response);
	var rowid = response+1;
    console.log("Found TC rowid - " + (rowid));
    //call csvread function to get data values based on RowID
    // var dataVal = getDatavalues(rowid);  
})

