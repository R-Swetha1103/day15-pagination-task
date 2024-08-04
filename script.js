function createPagination(totalPages, currentPage) {
    const container = document.getElementById('pagination-container');
    container.innerHTML = ''; 

    const ul = document.createElement('ul');
    ul.classList.add('pagination');

    const prevButton = document.createElement('li');
    prevButton.classList.add('pagination-item');
    if (currentPage > 1) {
        prevButton.innerHTML = '<a href="#">Prev</a>';
        prevButton.addEventListener('click', () => createPagination(totalPages, currentPage - 1));
    } else {
        prevButton.classList.add('disabled');
        prevButton.innerHTML = '<span>Prev</span>';
    }
    ul.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('pagination-item');
        if (i === currentPage) {
            pageItem.classList.add('active');
            pageItem.innerHTML = `<span>${i}</span>`;
        } else {
            pageItem.innerHTML = `<a href="#">${i}</a>`;
            pageItem.addEventListener('click', () => createPagination(totalPages, i));
        }
        ul.appendChild(pageItem);
    }
    const nextButton = document.createElement('li');

    nextButton.classList.add('pagination-item');
    if (currentPage < totalPages) {
        nextButton.innerHTML = '<a href="#">Next</a>';
        nextButton.addEventListener('click', () => createPagination(totalPages, currentPage + 1));
    } else {
        nextButton.classList.add('disabled');
        nextButton.innerHTML = '<span>Next</span>';
    }
    ul.appendChild(nextButton);

    container.appendChild(ul);
}
createPagination(10, 1);
