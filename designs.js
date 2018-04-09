// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let artgrid = $('#pixelCanvas');

function makeGrid() {
	// Clear any existing grid
	artgrid.children().remove();

	// Create new grid
	let numRows = $('#inputHeight').val();
	let numCols = $('#inputWeight').val();
	    for (var i = 0; i < numRows; i++) {
	    	// Create row
	        var fullrow = $(document.createElement('tr'));
	        for (var j = 0; j < numCols; j++) {
	            // Populate row with correct number of cells
	            fullrow.append('<td class="pixel"></td>');
	        }
	        // Append filled row to table
	        artgrid.append(fullrow);
	    }
};

$('#sizePicker').submit(function(event) {
	event.preventDefault();
	makeGrid();
});

// When clicking on a grid cell, change color to selected color
artgrid.on('mousedown', 'td', function() {
	let paintcolor = $('#colorPicker').val();
	$(this).css('background-color', paintcolor);
});