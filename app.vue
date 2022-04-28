<template lang="pug">
main
	h1 Welcome to my template!
	p.
		It's a pretty simple site using <a href="https://v3.nuxtjs.org/">Nuxt 3</a>, <a href="https://pugjs.org/api/getting-started.html">Pug</a> and <a href="https://sass-lang.com/">Sass</a>.<br>
		I hope they provide an even better developer experience then nuxt already does. In case of problems or critiscism, feel free to open an issue!
	a( href="https://github.com/obsidianical" ).signature - Gabriel/Obsidianical

</template>

<style lang="sass">
html, body
	margin: 0
	padding: 0

*
	box-sizing: border-box

main
	color: #ebdbb2
	font-family: 'Montserrat', sans-serif
	background-color: #282828
	height: 100vh
	padding: 2rem
	a
		text-decoration: none
		color: #458588
		&:hover
			text-decoration: underline
		&:visited
			color: #076678
</style>
