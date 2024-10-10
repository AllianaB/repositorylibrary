document.addEventListener('DOMContentLoaded', () => {
    const keywordInputField = document.getElementById('keywordInput');  // Renamed input
    const keywordDisplayList = document.getElementById('keywordList');  // Renamed keywordList
    let keywordArray = [];  // Renamed keywords

    keywordInputField.addEventListener('keydown', (e) => {
        if (e.key === ',' || e.key === 'Enter') {
            e.preventDefault();
            const newKeyword = keywordInputField.value.trim().replace(/,$/, '');  // Renamed keyword
            if (newKeyword) {
                addKeywordToArray(newKeyword);
            }
            keywordInputField.value = '';  // Clear the input field
        }
    });

    function addKeywordToArray(keyword) {
        if (keywordArray.includes(keyword)) {
            return;  // Avoid duplicate keywords
        }
        keywordArray.push(keyword);  // Renamed keywords array
        renderKeywordList();  // Renamed updateKeywordList
    }

    function renderKeywordList() {
        keywordDisplayList.innerHTML = '';  // Clear the list
        keywordArray.forEach((keyword, index) => {
            const keywordDiv = document.createElement('div');
            keywordDiv.classList.add('keyword');
            keywordDiv.innerHTML = `
                ${keyword}
                <button class="remove-btn" onclick="removeKeywordFromArray(${index})">&times;</button>
            `;
            keywordDisplayList.appendChild(keywordDiv);
        });
    }

    window.removeKeywordFromArray = function(index) {
        keywordArray.splice(index, 1);  // Remove the keyword at the specified index
        renderKeywordList();  // Re-render the keyword list
    };
});

document.getElementById("deletebtn").addEventListener("click", function() {
    var confirmation = confirm("Are you sure you want to delete?");
    if (confirmation) {
        // Perform delete operation
        console.log("Item deleted");
        // You can call your delete function here or redirect, etc.
    } else {
        console.log("Delete operation cancelled");
    }
});

