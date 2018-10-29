//Comment
$('.avatar-image-container').addClass('rounded-circle');
$('.comment-actions').children("span").children("a").addClass('btn btn-danger');
$('.comment-actions').children("a").addClass('btn btn-info');
$('.comment').addClass('list-group-item m-2');
$('#comments').addClass('card mx-2');
$('#comments').children("h4").addClass('card-header');
//navbar
$('.nav-item').children("span").addClass('py-2 bg-primary text-light d-flex px-4');
$('#btnShowSidebar').on('click', function(){ $('#Sidebar').toggleClass('d-none')});
