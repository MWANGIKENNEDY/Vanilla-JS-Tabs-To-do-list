const myForm=document.querySelector('#myForm');
const myInput=document.querySelector('#myInput');
const myUl=document.querySelector('.myUl');


myForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(!myInput.value){
        return;
    }
    const myTextNode=document.createTextNode(myInput.value);
    const myLi=document.createElement('li');
    myLi.classList.add('hey');
    myLi.appendChild(myTextNode);
    myLi.addEventListener('click',function(){
        this.parentElement.removeChild(this);
        //this.classList.toggle('selected');
    });
    myUl.appendChild(myLi);
    myInput.value='';
});


const myTabs=document.querySelectorAll('[data-source]');
const myTabsContent=document.querySelectorAll('[data-target]');

myTabs.forEach(
    (myTab)=>{
        myTab.addEventListener('click',()=>{
            const target=document.querySelector(myTab.dataset.source);
            console.log(myTab.dataset.source);
            myTabsContent.forEach(mtbs=>{
                
                mtbs.classList.remove('active');
                console.log("inside for each");
            })
            console.log("after for each");
            target.classList.add('active');
        })
    }
)



