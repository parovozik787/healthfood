function select() {
    document.querySelector('.filter').addEventListener('click', () => filter.classList.toggle('active'));
    const filterParams = [...document.querySelectorAll('.filter > .filter__item')];
    const filter = document.querySelector('.filter');
    filterParams.forEach(el => {
        el.addEventListener('click', function () {
            if (filter.classList.contains('active') && !el.classList.contains(('filter__item--active'))) {
                document.querySelector('.filter__item--active').classList.remove('filter__item--active');
                el.classList.add('filter__item--active');
            }
        });
    });
}
