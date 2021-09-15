//Comment
$('.avatar-image-container').addClass('rounded-circle');
$('.comment-actions').children("span").children("a").addClass('btn btn-sm btn-danger');
$('.comment-actions').children("a").addClass('btn btn-sm btn-primary text-white me-2');
$('.comment').addClass('list-group-item m-2');
// Number of comments title
document.getElementById('comments').childNodes[3].classList.add('h6', 'text-white', 'bg-dark', 'rounded-top', 'px-4', 'py-2');
//navbar
$('.nav-item').children("span").addClass('px-5 text-light p-3 d-block bg-primary');
$('#btnSidebar').on('click',function(){$('.sidebar').toggleClass('d-none')});
$('.navbar-toggler').on('click',function(){$('#brand').toggleClass('d-none');$('#menu').toggleClass('col-12')});
