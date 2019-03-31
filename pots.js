function update()
		{
			document.getElementById('text').value = blood;
			document.getElementById('text').innerHTML = blood;
			document.getElementById('life').value = soul;
			document.getElementById('life').innerHTML = soul;
			document.getElementById('costAC1').innerHTML = ((AC1+1) * 5 );
			document.getElementById('costAC2').innerHTML = ((AC2+1) * 20);
			document.getElementById('costAC3').innerHTML = ((AC3+1) * 35);
			document.getElementById('costAC4').innerHTML = ((AC4+1) * 50);
			document.getElementById('costAC5').innerHTML = ((AC5+1) * 65);
		}
		var soul = 0;
		var blood = 0;

		var AC1 = 0;
		var autoClick1 = 0;
		
		var AC2 = 0;
		var autoClick2 = 0;

		var AC3 = 0;
		var autoClick3 = 0;

		var AC4 = 0;
		var autoClick4 = 0;	

		var AC5 = 0;
		var autoClick5 = 0;	

		var AM1 = 0;
		var autoClickm1 = 0;

		var AM2 = 0;
		var autoClickm2 = 0;

		var AM3 = 0;
		var autoClickm3 = 0;

		var AM4 = 0;
		var autoClickm4 = 0;		

		var AM5 = 0;
		var autoClickm5 = 0;

		var AM6 = 0;
		var autoClick6 = 0;	
		var autoClickm6 = 0;

		var AM7 = 0;
		var autoClick7 = 0;	
		var autoClickm7 = 0;

		var AM8 = 0;
		var autoClick8 = 0;	
		var autoClickm8 = 0;

		var AM9 = 0;
		var autoClick9 = 0;	
		var autoClickm9 = 0;

		var AM10 = 0;
		var autoClick10 = 0;	
		var autoClickm10 = 0;

		var AM11 = 0;
		var autoClick11 = 0;	
		var autoClickm11 = 0;

		var AM12 = 0;
		var autoClick12 = 0;	
		var autoClickm12 = 0;	

function timer1()
		{
			document.getElementById("life").innerHTML = soul;
			soul = soul + autoClick1;
			soul = soul + autoClick2;
			soul = soul + autoClick3;
			soul = soul + autoClick4;
			soul = soul + autoClick5;
			soul = soul + autoClick6;
			soul = soul + autoClick7;
			soul = soul + autoClick8;
			soul = soul + autoClick9;
			soul = soul + autoClick10;
			soul = soul + autoClick11;
			soul = soul + autoClick12;
			update()
		}
		{

		}
		setInterval(timer1, 1000)
function timer2()
{
	document.getElementById('text').innerHTML = blood;
	blood = blood + autoClickm1;
	blood = blood + autoClickm2;
	blood = blood + autoClickm3;
	blood = blood + autoClickm4;
	blood = blood + autoClickm5;
	blood = blood + autoClickm6;
	blood = blood + autoClickm7;
	blood = blood + autoClickm8;
	blood = blood + autoClickm9;
	blood = blood + autoClickm10;
	blood = blood + autoClickm11;
	blood = blood + autoClickm12;
	update()
}
setInterval(timer2, 1)
// BUTTON
function addl() 
		{	
			soul = soul + 1
			blood = blood + 1
			update()
		}
function autol1()
{
	if (soul >= ((AC1+1) * 5))
	{
		soul = soul - ((AC1+1) * 5);
		AC1 = AC1 + 1;
		autoClick1 = autoClick1 + 2;
		autoClickm1 = autoClickm1 + 10;
		update();
	}
}
function autol2()
{
	if (soul >= ((AC2+1) * 20))
	{
		soul = soul - ((AC2+1) * 20);
		AC2 = AC2 + 1;
		autoClick2 = autoClick2 + 9;
		autoClickm2 = autoClickm2 + 45;
		update();
	}
}
function autol3()
{
	if (soul >= ((AC3+1) * 35))
	{
		soul = soul - ((AC3+1) * 35);
		AC3 = AC3 + 1;
		autoClick3 = autoClick3 + 16;
		autoClickm2 = autoClickm2 + 80;
		update();
	}
}
function autol4()
{
	if (soul >= ((AC4+1) * 50))
	{
		soul = soul - ((AC4+1) * 50);
		AC4 = AC4 + 1;
		autoClick4 = autoClick4 + 23;
		autoClickm2 = autoClickm2 + 115;
		update();
	}
}
function autol5()
{
	if (soul >= ((AC5+1) * 65))
	{
		soul = soul - ((AC5+1) * 65);
		AC5 = AC5 + 1;
		autoClick5 = autoClick5 + 30;
		autoClickm2 = autoClickm2 + 150;
		update();
	}
}


function create1()
{
	if (blood >= ((AM6+1) * 100000)) 
	{
		blood = blood - ((AM6+1) * 100000);
		AM6 = AM6 + 1;
		autoClick6 = autoClick6 + 100;
		autoClickm6 = autoClickm6 + 500;
		document.getElementById('mons4').src = "fiend/f5.png"
		update();
	}
}
function create2()
{
	if (blood >= ((AM7+1) * 300000)) 
	{
		blood = blood - ((AM7+1) * 300000);
		AM7 = AM7 + 1;
		autoClick7 = autoClick7 + 100;
		autoClickm7 = autoClickm7 + 2000;
		document.getElementById('mons5').src = "fiend/f7.png"
		update();
	}
}
function create3()
{
	if (blood >= ((AM8+1) * 500000)) 
	{
		blood = blood - ((AM8+1) * 500000);
		AM8 = AM8 + 1;
		autoClick8 = autoClick8 + 100;
		autoClickm8 = autoClickm8 + 8000;
		document.getElementById('mons6').src = "fiend/f2.png"
		update();
	}
}
function create4()
{
	if (blood >= ((AM9+1) * 700000)) 
	{
		blood = blood - ((AM9+1) * 700000);
		AM9 = AM9 + 1;
		autoClick9 = autoClick9 + 100;
		autoClickm9 = autoClickm9 + 32000;
		document.getElementById('mons7').src = "fiend/f4.png"
		update();
	}
}
function create5()
{
	if (blood >= ((AM10+1) * 900000)) 
	{
		blood = blood - ((AM10+1) * 900000);
		AM10 = AM10 + 1;
		autoClick10 = autoClick10 + 100;
		autoClickm10 = autoClickm10 + 128000;
		document.getElementById('mons2').src = "fiend/f8.png"
		update();
	}
}
function create6()
{
	if (blood >= ((AM11+1) * 1100000)) 
	{
		blood = blood - ((AM11+1) * 1100000);
		AM11 = AM11 + 1;
		autoClick11 = autoClick11 + 100;
		autoClickm11 = autoClickm11 + 512000;
		document.getElementById('mons3').src = "fiend/f1.png"
		update();
	}
}
function create7()
{
	if (blood >= ((AM12+1) * 5000000)) 
	{
		blood = blood - ((AM12+1) * 5000000);
		AM12 = AM12 + 1;
		autoClick12 = autoClick12 + 100;
		autoClickm12 = autoClickm12 + 2048000;
		document.getElementById('mons1').src = "fiend/f3.png"
		update();
	}
}

var k = 'a';
function asd()
{
	var image = document.getElementById('asd');
	if (k == 'a') {
		image.src = 'char/d/d2.png';
		k = 'b';
	}
	else if (k == 'b') {
		image.src = 'char/d/d3.png';
		k = 'c'
	}
	else {
		image.src = 'char/d/d1.png';
		k = 'a';
	}
}