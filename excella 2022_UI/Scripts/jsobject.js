var myobj={}


myobj.itsMe=function()
{
    console.log("hi");
}

myobj.author="flowerking"

var ourobj={
    designer:'sathish',
    showDesigner:function()
    {
        console.log(this.designer);
        return this.designer;
    }
}

var employee=function(employeeId,employeeName)
{
    this.employeeId=employeeId;
    this.employeeName=employeeName;
}

var ram=new employee(101,'ram');

function setAuthor()
{
    var ele=document.getElementById("author");
    ele.innerHTML=myobj.author;

}















