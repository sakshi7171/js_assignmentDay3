
let marks = +prompt("Enter the marks");
//console.log(marks);


if (marks >= 85)
{
    console.log(` Marks are ${marks} grade is  A`);
} 
else if (marks>= 65 && marks <85 )
{
    console.log(`Marks are ${marks} and grade is B`);

}
else if (marks >= 45 && marks < 65)
{
    console.log(`Marks are ${marks} and grade is C`);

}
else if (marks >= 35 && marks < 45)
{
    console.log(`Marks are ${marks} and grade is D`);
}

else
{ 

    console.log(`You are Fail`);
}