let USD = document.getElementById('USD');
let EUR = document.getElementById('EUR');
let formId = document.getElementById('formId');
let to = document.getElementById('to');
let selectValue = document.getElementById('mySelect');


to.addEventListener('submit', function(e) {
    e.preventDefault();
    let inputValue = formId.elements[1].value;
    let result = 0;
    if (selectValue.value == 'USD')
    {
        result = +inputValue * USD.innerHTML;
    }
    else{
        result = +inputValue * EUR.innerHTML;
    }
    to.elements[1].value = result;    
})



// es tarberakov porceci chstacvec)) 

// to.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let todo = {item: input.value};
//     fetch("/", {
//         method: "POST",
//         headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//          },
//         body: JSON.stringify(todo),  
//      }).then(res => res.json())
//        .then(res => {
//            console.log(`This is response ${res}`)
//                let result = 0;
//            if (selectValue.value == 'USD')
//            {
//                 result = res.item * USD.value;
//            }
//            else{
//                result = res.item * EUR.value;
//            }
            
//            to.children('input').value = result;
//        })
// })
