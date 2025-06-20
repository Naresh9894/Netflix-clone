const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
//select tab content item
function selectItem(e){
    removeBorder();
    removeshow();
    //add border to current tab
    this.classList.add('tab-border');
   //grab content item from DOM
    const tabContentItem = document. querySelector(`#${this.id}-content`);
   //add show class
   tabContentItem.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeshow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
//listen for the click

tabItems.forEach(item => item.addEventListener('click', selectItem));