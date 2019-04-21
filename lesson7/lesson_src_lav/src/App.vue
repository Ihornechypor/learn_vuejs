<template>
	<div>
		<header>
			<div class="container">
				<div class="row">
					<div class="col col-sm-9">
						<h1>Site</h1>
					</div>
					<div class="col col-sm-3">
						<div class="alert alert-default">
							<div>In Cart: {{ lengthInCart }}</div>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col col-sm-3 menu">
						<ul class="list-group">

						</ul>
					</div>
					<div class="col col-sm-9">

					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>

	export default {

	}
</script>

<style>
	.menu{
		border-right: 1px solid #ddd;
	}

	.list-group-item{
		transition: background 0.3s, color 0.3s;
	}

	.list-group-item a{
		text-decoration: none;
	}

	.list-group-item.active a{
		color: inherit;
	}

	.slide-enter{

	}

	.slide-enter-active{
		animation: slideIn 0.5s;
	}

	.slide-enter-to{

	}

	.slide-leave{

	}

	.slide-leave-active{
		animation: slideOut 0.5s;
	}

	.slide-leave-to{

	}

	@keyframes slideIn{
		from{transform: rotateY(90deg);}
		to{transform: rotateY(0deg);}
	}

	@keyframes slideOut{
		from{transform: rotateY(0deg);}
		to{transform: rotateY(90deg);}
	}
</style>
