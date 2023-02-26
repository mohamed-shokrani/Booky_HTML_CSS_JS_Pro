
SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =()=>{
    SearchForm.classList.toggle('active')
}
window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }else{
        document.querySelector('.header .header2').classList.remove('active');

    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }else{
        document.querySelector('.header .header2').classList.remove('active');

    }
}