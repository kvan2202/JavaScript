// Calculator/Operators in javascript
// var a = parseInt(prompt("Enter first number"));
// var b = parseInt(prompt("Enter Second number"));
// document.write("The sum is "+(a+b)); 
// document.write("<br> The differnce is "+(a-b));
// document.write("<br> The multiplication is "+(a*b));
// document.write("<br> The division is "+(a/b));
// document.write("<br> The modulous is "+(a%b));

// WAP to find even or odd 
// var a = parseInt(prompt("Enter Number"));
// if(a%2==0)
// document.write("<br> The number "+a+" is Even ");
// else
// document.write("<br> The number "+a+" is Odd ");

//WAP Fibonacci
// var num = parseInt(prompt("Enter the number of terms in fibonacci "));
// var s=0,a=0,b=1;
// document.write(a+" "+b);
// for(var i=0; i<=num; i++)
// {
//     s=a+b;
//     a=b;
//     b=s;
//     document.write(s+" ")
// }

//WAP Pattern 1
// var i=0,j=0;
// for(i=0;i<=5;i++)
// {
//     for(j=0;j<=i;j++)
//     {
//     document.write(j);
//     }
//     document.write("<br>");

// }

//Function to perfom mathematical functions

// var a = parseInt(prompt("Enter 1st number"));
// var b = parseInt(prompt("Enter 2nd number"));

// function operations(a,b)
// {
//     document.write("The sum is "+(a+b));
//     document.write("<br>The difference is "+(a-b));
//     document.write("<br>The modulous is "+(a%b));
//     document.write("<br>The division is "+(a/b));
// }

// operations(a,b);

//sum of elements

// var n = parseInt(prompt("Enter the array size"));

// arr= [];
// var sum=0;
// for(var i=0; i<n; i++)
// {
//     arr[i]= parseInt(prompt("Enter the "+(i+1)+" element "));
//     sum = sum + arr[i];
// }

// document.write("<br> The sum of elements is "+ sum);

//check the no of even and odd 

// var n = parseInt(prompt("Enter the array size "));
// arr= [];

// even=0,odd=0;
// for(var i=0; i<n; i++)
// {
//     arr[i]= parseInt(prompt("Enter the "+(i+1)+" element "));
//     if(arr[i]%2==0)
//     even++;
//     else
//     odd++;
// }

// document.write("<br> The number of even elements are "+even+" and odd are "+odd);

// palindrome

// var num = parseInt(prompt("Enter the num "));

// if(parseInt(num/100) == num%10)
// document.write("The nuber is palindrome ");
// else 
// document.write("The nuber is not a palindrome ");

// Unique elements 

// var n=prompt("Enter the size of array ");
// arr=[];
// narr=[];
// for(i=0;i<n;i++)
// {
//     arr[i]=prompt("Enter the "+(i+1)+" element ");   
// }

// for(i=0;i<n;i++)
// {
//     for(j=i+1;j<n;j++)
//     {
//         if(arr[i]==arr[j])
//         arr[i]="$";
//     }
// }

// document.write("The unique elements are <br> ");

// for(i=0;i<n;i++)
// {
//     if(arr[i]!="$")
//         document.write(arr[i]);
// }

//two sum

// var n=prompt("Enter the size of array ");
// arr=[];
// SubmitEvent;
// target=9;
// for(i=0;i<n;i++)
// {
//     arr[i]=prompt("Enter the "+(i+1)+" element ");   
// }

// for(i=0;i<n;i++)
// {
//     for(j=i+1;j<n;j++)
//     {
//         sum = parseInt(arr[i])+ parseInt(arr[j]);
//         console.log(sum);
//         if(sum == target )
//         document.write("The element positions are"+i+", "+j );
//     }
// }

// even or odd 
// var n=prompt("Enter a number ");
// if(n%2==0)
// document.write(n+" is even");
// else
// document.write(n+" is odd");

// prime 
// var n=prompt("enter a number ");
// var count=0;
// for(var i=1;i<=n;i++)
// {
//     if(n%i==0)
//     count++;
// }
// if(count==2)
// document.write(n+" is prime");
// else
// document.write(n+" is composite");

//armstrong 
// var n= prompt("enter a number");
// var num= n.length;
// var s=0;
// var temp=n,rem=0;
// while(temp>0)
// {
//     rem=temp%10;
//     s+= Math.pow(rem,num);
//     temp= parseInt(temp/10);
// }
// if(s==n)
// document.write(n+" is a armstrong number");
// else
// document.write(n+" is not armstrong number");

//palindrome
// var i=0,flag=0; 
// var n=prompt("Enter a number ");
// var len= parseInt(n.length);
// var arr=[""];
// var narr=[""];
// for(i=0;i<len;i++)
// {
//     arr[i]=n.charAt(i);
//     console.log(arr[i]);
// }
// for(i=len-1;i>=0;i--)
// {
//     narr[i]=n.charAt(i);
//     console.log(narr[i]);
// }
// console.log(arr);
// console.log(narr);
// for(i=0;i<len;i++)
// {
//     //console.log(arr[i].localeCompare(narr[i]))
//     if(arr[i]!=narr[i])
//     {
//         flag=1;
//         break;
//     }
// }
// if(flag==1)
// document.write("Not a palindrome");
// else
// document.write("Is a palindrome");

