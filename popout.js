


// createTodo <- creates todo button onlick open ".new_item"
// new_item <- if button pressed save and hide new item

document.querySelector('.createTodo').addEventListener('click', function(){
    document.querySelector('.new_item').style.display = 'block'
});

document.querySelector('.new_item button').addEventListener('click', function(){
    var itemName = document.querySelector('.new_item input').value;
    if(itemName != ''){
        var itemStorage = localStorage.getItem("todo_items");
        var itemsArr = JSON.parse(itemStorage);
        itemsArr.splice(itemsArr.length+1,0,{"item":itemName, "status":0});
        saveItems(itemsArr);
        fetchItems();
    }
});


function fetchItems(){

    const itemsList = document.querySelector('ul.todo_items');
    itemsList.innerHTML = '';
    var newItemHTML = '';
    try{
        // fetching items from storage  
        var items = localStorage.getItem("todo_items");
        var itemsArr = JSON.parse(items);
          
        for (var i = 0; i < itemsArr.length; i++){
            var status = '';
            if (itemsArr[i].status == 1){
                status = 'class = "done"';
            }
            newItemHTML += `<li data-itemindex="${i}" ${status}>
            <span class = "item">${itemsArr[i].item}</span>
            <div><span class="itemComplete">Done</span><span class="itemDelete">delete</span></div>
            </li>`;
        
        }
        
        itemsList.innerHTML = newItemHTML;

        var itemsListUl = document.querySelectorAll('ul li');
        for (var i = 0; i < itemsArr.length; i++){
            itemsListUl[i].querySelector('.itemComplete').addEventListener('click', function(){
               
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemComplete(index);

            });
            itemsListUl[i].querySelector('.itemDelete').addEventListener('click', function(){
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemDelete(index);
            });
        }

    }catch(e){
        // create a default item list...
    }

}

function itemDelete(index){

    var itemStorage = localStorage.getItem("todo_items");
    var itemsArr = JSON.parse(itemStorage);

    itemsArr.splice(index,1);

    saveItems(itemsArr);
    document.querySelector('ul.todo_items li[data-itemindex="'+index+'"]').remove();



}

function itemComplete(index){
 
    var itemStorage = localStorage.getItem("todo_items");
    var itemsArr = JSON.parse(itemStorage);

    itemsArr[index].status = 1;
    saveItems(itemsArr);
    document.querySelector('ul.todo_items li[data-itemindex="'+index+'"]').className='done';
    
}

function saveItems(obj){
    string = JSON.stringify(obj);   
    localStorage.setItem("todo_items", string);
}

fetchItems();