(function() {

    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
      // options
      itemSelector: '.products__item',
      filter: '.new'
         });

    const controlls = document.querySelectorAll('.filter__link');
    const activeClass = ('filter_item--active');

    controlls.forEach(function(control){
        control.addEventListener('click', function(e){
            e.preventDefault();

     const filterName = control.getAttribute("data-filter");
            
    controlls.forEach(function(link){
               link.closest('.filter_item').classList.remove(activeClass);
           })

           control.closest('.filter_item').classList.add(activeClass);

           iso.arrange({
               filter: `.${filterName}`
           })
        })
    })

}());

