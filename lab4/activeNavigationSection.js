//if(document.location.pathname.toString() === String('orders')) {
    //document.getElementById(document.location.pathname.toString()).className = 'navigation__button__active';
    let docname = document.location.toString().split('/');
    docname = docname.pop().split('.')[0];
    document.getElementById(docname).classList.toggle('navigation__button__active');
    //alert(docname);
//}