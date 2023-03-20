
    /*===================== Use the Intersection Observer API =====================*/
    /*== https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API ==*/
    /*=============================================================================*/


    /*==========| variables =*/

    let ratio = 0.08; /*___ = 50% of visibilty for the element ___*/
    let hideDivL = document.querySelectorAll('.hideleft');
    let hideDivR = document.querySelectorAll('.hideright');
        /*==========| Intersection Observer's options =*/
    
    const options = {
        root: null,  
        rootMargin: '0px',
        threshold: ratio 
      }
    
    function getInter (entries, observer){
        entries.forEach(function (entry){
            if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            } 
        })   
    }
    
        /*==========| Creation of IntersectionObserver  =*/
    
    const observer = new IntersectionObserver(getInter, options);
    
        /*==========| Observation declaration for each '.hide' =*/
  
    hideDivL.forEach(function (appear){
        observer.observe(appear)
    });
    hideDivR.forEach(function (appear){
        observer.observe(appear)
    });