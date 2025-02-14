function showAlert(){
    alert('hello this  is a javascript alert');
}
function changeText(){
    ducument.getElementedById('text').innerHTML='Text changed';
}
function handleClick(){
    document.getElementedById('clickMessage').innerHTML='Button Clicked';
}
function validateForm(){
    let name=document.getElementedById('name').value;
    if(name==''){
        alert('please enter your name');
        return false;
    }
    return true;
}
function checkNumber(){
    let num=parseInt(document.getElementById('number input').value);
    let result=num>10?'Greater than 10':'10 or less';
    document.getElementById('numberResult').innerHTML=result;
}
function checAge(){
    let age=parseInt(document.getElementsById('ageInput').value);
    if(age>=18){
        document.getElementById('ageresult'),innerHTML='You are an adult';
    }else
    {
        document.getElementById('ageResult').innerHTML='you are a minor';
    }
}
function displayArrayItem(){
    let items=['Apple','Banana','cherry','Date','orange'];
    let index=parseInt(document.getElementById('array index').value);
    let result=items[index]||'Invalid index';
    document.getElementById('arrayResult').innerHTML=result;
}
