const render = response => {
    const newsElement = (
        document.getElementById('loading')
    );
    newsElement.innerHTML = response;
};

const update = () => {
fetch('list.html').then(
    response => response.text()
 ).then(
    response => render(response)
 )
}

setInterval(update, 1000);
