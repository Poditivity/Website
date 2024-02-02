$(document).ready(function () {
    $('.question').click(function () {
        $(this).parent('.faq').toggleClass('active').siblings().removeClass('active');
    });
});


const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', (e) => {
        const arrow = question.querySelector('.fa-chevron-down');
        arrow.classList.toggle('hide');
    })
})
