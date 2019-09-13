function create(sentences) {
    for (let el of sentences) {
        let paragraph = document.createElement('p');
        let content = document.getElementById('content');
        let myDiv = document.createElement('div');
        paragraph.textContent = el;
        myDiv.appendChild(paragraph);
        content.appendChild(myDiv);
        paragraph.style.display = 'none';
        myDiv.addEventListener('click', function() {
            paragraph.style.display = "block";
        });


    }

}