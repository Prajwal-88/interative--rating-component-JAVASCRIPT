const rating_card=document.querySelector("#rating-sec");
const submit_btn=document.querySelector("#submit-btn");
const thank_you_card=document.querySelector("#thank-you-card");
const rating_buttons = document.querySelectorAll('#rating-btn');
const point=document.querySelector("#points");

submit_btn.addEventListener('click',()=>{
    setInterval(() => {
        rating_card.classList.add('hidden')
        thank_you_card.classList.remove('hidden')
    }, 200)
    
})

rating_buttons.forEach(rate => {
    rate.addEventListener('click', () => {
        let num = rate.textContent - 1;
        let prev_btn = rating_buttons[num-1];

        point.textContent=num+1;

        if(num - 1 >= 0 && num - 1 < rating_buttons.length){
            prev_btn.className = "bg-gray-400 p-2 text-Very_Dark_Blue rounded-full px-4 hover:bg-Orange hover:text-white active:scale-105"
        }

        clear_fun(num)
    })
})

const clear_fun = (num) => {
    let alive = true;
    let super_prev_btns = num - 2;
    let next_btns = num + 1;
    let present_btn=num;

    rating_buttons[present_btn].className="bg-Orange p-2 rounded-full px-4 hover:bg-Orange hover:text-white  text-white active:scale-105";
    while(alive){
        // right sub array
        for(let i = next_btns; i < rating_buttons.length; i++){
            let buttons = rating_buttons[i];

            buttons.className = "bg-gray-600 p-2 rounded-full px-4 hover:bg-Orange hover:text-white active:scale-105"
        }

        // left sub array
        for(let i = super_prev_btns; i >= 0; i--){
            let buttons = rating_buttons[i];

            buttons.className = "bg-gray-600 p-2 rounded-full px-4 hover:bg-Orange hover:text-white active:scale-105"
        }

        alive = false;
    }
}