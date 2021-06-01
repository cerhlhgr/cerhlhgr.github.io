alert("Введите данные a,b,c");

function check(text) 
{
	let num = "nan";
	let k = 0;
	while(isNaN(num) || num == '' )
	{
		if(k == 0)
		{
			num = prompt("Введите " + text);
			k++;
		}
		else
			num = prompt("Попробуйте ещё раз " + text);
	}
	return num;
}

let a = check("a");
let b = check("b");
let c = check("c");

let discrm = (b**2)-4*a*c;

if(discrm < 0)
{
	let x11 = (-b/2*a).toFixed(2);
	let x12 = ((Math.abs(discrm)**(1/2))/(2*a)).toFixed(2);
	let x21 = (-b/2*a).toFixed(2);
	let x22 = ((Math.abs(discrm)**(1/2))/(2*a)).toFixed(2);
	alert( "x1 = " + x11 + "+" + x12 +"i" + "\n" + "x2 = " + x21 + "-" +x22 + "i"  );
}
if(discrm == 0)
{
	let x1 = (-b/2*a).toFixed(2);
	alert("x1 = " + x1);
}
if(discrm > 0)
{
	let x1 = ((-b + (discrm)**(1/2) )/(2*a)).toFixed(2);
	let x2 = ((-b - (discrm)**(1/2) )/(2*a)).toFixed(2);
	alert("x1 = " + x1 + "\n" + "x2 = " + x2);
}
