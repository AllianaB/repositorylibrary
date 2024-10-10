document.getElementById("deleterow").addEventListener("click", function() {
    var confirmation = confirm("Are you sure you want to delete this row?");
    if (confirmation) {
        // Perform delete operation
        console.log("Row deleted");
        // You can call your delete function here to remove the row
    } else {
        console.log("Delete operation cancelled");
    }
});
