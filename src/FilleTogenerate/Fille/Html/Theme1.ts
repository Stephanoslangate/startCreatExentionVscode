import * as vscode from 'vscode';

export class Theme1 {
    getContentTheme(){
		return `
			<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<title>Theme 1</title>
			</head>
			<style>
				*{
			padding: 0;
			margin: 0;
		}

		header{
			width: 100%;
		}
		nav{
			width: 100%;
			display: flex;
			height: 50px;
			line-height: 50px;
			background-color: rgb(102, 103, 104);
			justify-content: center;
		}
		nav ul{
			display: flex;
		}
		nav ul li{
			margin-left: 30px;
			list-style-type: none;
		}
		/* Traitement logo */
		.logo a{
			text-decoration: none;
			font-size: 30px;
			border: 2px solid rgb(221, 216, 216);
			padding-top: 5px;
			padding-bottom: 5px;
			padding-left: 15px;
			padding-right: 15px;
			background-color: white;
			color: black;
		}
		h2{
			text-align: center;
			margin-bottom: 13px;
		}
		aside{
			float: left;
			display: flex;
			width: 300px;
			height: 430px;
			background-color: rgb(199, 195, 204);
			margin-right: 90px;
			justify-content: center;
			align-items: center;
		}
		aside p, .section1 p{
			font-size: 40px;
		}
		.section1{
			display: flex;
			width: 900px;
			height: 100px;
			background-color: rgb(199, 195, 204);
			justify-content: center;
			align-items: center;

		}
		.section2{
			display: flex;
			width: 900px;
			height: 300px;
			margin-top: 30px;
			background-color: rgb(199, 195, 204);
		}
		main{
			padding-left: 30px;
			padding-top: 20px;
		}
		.fisrt-en > p{
			text-align: center;
			padding-top: 10px;
			font-size: 40px;

		}
		article{
			width: 170px;
			height: 200px;
			display: flex;
			background-color: rgb(92, 93, 94);
			justify-content: center;
			align-items: center;
		}
		article p{
			font-size: 40px;
			color: white;
		}
		.articles{
		display: flex;
		margin-left: 70px;
		margin-top: 15px;
		}

		#article2,#article3{
			margin-left: 130px;
		}
		footer{
			width: 100%;
			height: 60px;
			display: flex;
			background-color: rgb(163, 163, 163);
			justify-content: center;
			align-items: center;
			margin-top: 40px;
		}
			</style>
			<body>

					<header>
						<nav>
							<div class="logo">
								<a href="">Logo</a>
							</div>
							<ul>
								<li>Accueil</li>
								<li>Portfolio</li>
								<li>A Propos</li>
								<li>Contact</li>
							</ul>
						</nav>
					</header>
					<main>
						<h2>TITRE DE MA PAGE</h2>
						<aside>
							<p>Aside</p>
						</aside>

						<div>
							<section class="section1">
								<p>Section</p>
							</section>
							<section class="section2">
								<div class="fisrt-en">
									<p>Section</p>
									<div class="articles">
										<article >
											<p>Article</p>                                    </p>
										</article>
										<article id="article2">
											<p>Article</p>
										</article>
										<article id="article3">
											<p>Article</p>
										</article>
									</div>
								</div>
							</section>
						</div>
					</main>
					<footer>
						<p>Footer</p>
					</footer>

			</body>
		</html>
			
			`;
	}

}