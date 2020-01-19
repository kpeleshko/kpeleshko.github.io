function remove () {
    document.querySelector('.americano').classList.add('nonactive');
    document.querySelector('.capushino').classList.add('nonactive');
    document.querySelector('.water').classList.add('nonactive');
    document.querySelector('.btn-americano').classList.remove('on');
    document.querySelector('.btn-capushino').classList.remove('on');
    document.querySelector('.btn-water').classList.remove('on');
};



document.querySelector('.btn-americano').addEventListener('click', function() {
    remove ();
    document.querySelector('.americano').classList.remove('nonactive');
    document.querySelector('.btn-americano').classList.add('on');
});

document.querySelector('.btn-capushino').addEventListener('click', function() {
    remove ();
    document.querySelector('.capushino').classList.remove('nonactive');
    document.querySelector('.btn-capushino').classList.add('on');
});

document.querySelector('.btn-water').addEventListener('click', function() {
    remove ();
    document.querySelector('.water').classList.remove('nonactive');
    document.querySelector('.btn-water').classList.add('on');
});