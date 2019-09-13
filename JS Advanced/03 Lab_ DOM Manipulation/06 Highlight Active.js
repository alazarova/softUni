function focus() {
    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(i => {
        i.addEventListener('focus', focused);

        function focused(event) {
            event.target.parentNode.className = 'focused';
        };
        i.addEventListener('blur', removeClass)

        function removeClass(event) {
            event.target.parentNode.removeAttribute('class');
        };
    });
}


//    function focus() {
//     let inputs = document.getElementsByTagName('input');
//     Array.from(inputs).forEach(i => {
//       i.addEventListener('focus', (event) => {
//         event.target.parentNode.className = 'focused';
//       });
//       i.addEventListener('blur', (event) => {
//         event.target.parentNode.removeAttribute('class');
//       });
//     });
//    }