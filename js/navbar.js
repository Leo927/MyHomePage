function addNavbar(path)
{
	if(path ==null)
		path = "";
	document.body.innerHTML += `<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<a class="nav-link" href="`+path+`index.html">Home</a>
				</li>
				<li class="nav-item dropdown">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          CS215 Labs
		        </a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a class="dropdown-item" href="`+path+`lab1/index.html">lab 1</a>
		          <a class="dropdown-item" href="`+path+`lab2/index.html">lab 2</a>
		          <a class="dropdown-item" href="`+path+`lab3/index.html">lab 3</a>
		          <a class="dropdown-item" href="`+path+`lab4/signup.html">lab 4</a>
		          <a class="dropdown-item" href="`+path+`lab5/signup.html">lab 5</a>
		          <a class="dropdown-item" href="`+path+`lab6/signup.html">lab 6</a>
		          <a class="dropdown-item" href="`+path+`lab7/lab7.html">lab 7</a>
		          <a class="dropdown-item" href="`+path+`lab8/lab8.html">lab 8</a>
		          <a class="dropdown-item" href="`+path+`lab9/signup.html">lab 9</a>
		          <a class="dropdown-item" href="`+path+`lab10/index.php">lab 10</a>
		        </div>
		      </li>

		      <li class="nav-item dropdown">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          CS215 Course
		        </a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a class="dropdown-item" href="http://www2.cs.uregina.ca/~li725/CS215ProjectMiniPoll/index.html">CS 215 Mini Poll Project</a>
		          <a class="dropdown-item" href="`+path+`assignment4/cs215assignment4.html">assignment 4</a>
		        </div>
		      </li>
			</ul>
			<a href="`+path+`basic_html_pages/signup.html" class="btn btn-outline-success my-2 my-sm-0">Sign Up</a>
		</div>
	</nav>`;
}