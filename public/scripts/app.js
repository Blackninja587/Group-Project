// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
<<<<<<< HEAD
        console.log("App Started");
=======
        console.log("App started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/grade-list');
                }
            });
        }
>>>>>>> 969b78a (crud added)
    }
    window.addEventListener("load", Start);
})();