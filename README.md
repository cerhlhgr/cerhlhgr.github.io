
  
<!DOCTYPE html>
<html lang="en">
<голова>
  <meta charset="utf-8">
  <title>particles.js</title>
  <link rel="stylesheet" media="screen" href="css/style.css">
</head>
<тело>



<div id="firstShow"><p>Открыть</p></div>

<div id="secondShow">
	<br>
	<a href="https://vk.com/patrikahalchina" class="share">
		<h1>Создатель</h1>
	</a>
	<br>

	<a href="https://cerhlhgr.github.io/1" class="share">
			<h1>Lab1</h1>
	</a>
	<br>
	<a href="https://cerhlhgr.github.io/2" class="share">
			<h1>Lab2</h1>
	</a>
	<br>
	<a href="https://cerhlhgr.github.io/3" class="share">
			<h1>Lab3</h1>
	</a>
	<br>
	<a href="https://cerhlhgr.github.io/4" class="share">
			<h1>Lab4</h1>
	</a>
	<br>
	<a href="https://cerhlhgr.github.io/5" class="share">
			<h1>Lab5</h1>
	</a>
	<br>
	<a href="https://cerhlhgr.github.io/6" class="share">
			<h1>Lab6</h1>
	</a>
</div>

<script>
	document.getElementById('firstShow').addEventListener('mouseover',()=>
	{
		console.log("popal");
		document.getElementById('firstShow').style.backgroundColor = 'darkorange';
	}
	)

	document.getElementById('firstShow').addEventListener('mouseout',()=>
	{
		console.log("popal");
		document.getElementById('firstShow').style.backgroundColor = 'chocolate';
	}
	)

	document.getElementById('firstShow').addEventListener('click',()=>
	{
		document.getElementById('firstShow').style.visibility = 'hidden';	
		document.getElementById('secondShow').style.opacity = '1';
		document.getElementById('secondShow').style.visibility = 'visible';	

		
	}
	
	);


</script>


<!-- particles.js container -->
<div id="particles-js"></div>

<!-- scripts -->
<script src="particles.js"></script>
<script src="js/app.js"></script>


</body>
</html>
