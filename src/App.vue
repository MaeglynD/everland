<template>

	<div class="e-landing-page">
		<div class="e-1-container e-gradient">

			<div class="e-bg stars e-grain-animation"></div>

			<img :src="require('@/assets/landscape-1.png')" class="e-abs-bg">

			<v-parallax
			:src="require('@/assets/earth-logo.png')"
			class="e-abs-earth"
			></v-parallax>

			<v-parallax
			:src="require('@/assets/landscape-2-test.png')"
			class="e-abs-landscape"
			></v-parallax>

			<v-parallax
			:src="require('@/assets/floatingIsland.gif')"
			class="e-abs-island"
			></v-parallax>

			<div class="e-nav-container">
				<div class="e-active">Home</div>
				<div>News</div>
				<img :src="require('@/assets/logo.png')" alt="">
				<div>Help</div>
				<div>Careers</div>
			</div>

			<div class="e-text-container">
				<div class="e-text-inner">
					<div class="e-a">stress test <span>may 2nd</span></div>
					<div class="e-b">Recapture your immersion. Signup free now</div>
					<div class="e-c" v-ripple>Signup</div>
				</div>
			</div>

		</div>

		<div class="e-2-container e-container">

			<div class="e-container-inner">
				<div>
					<div class="e-subhead">Why us</div>
					<div class="e-largehead">What makes <span>Everland</span> special?</div>
					<div class="e-2-inner">
						<div class="e-2-section" v-for="x in qualities" :key="x.title">
							<div>
								<img :src="require(`@/assets/${x.title}.png`)" :alt="x.title">
							</div>
							<div>
								<div class="e-a e-generic-text">{{ x.title }}</div>
								<div class="e-b e-generic-text">{{ x.desc }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="e-3-container e-container">

			<div class="e-container-inner">
				<div>
					<div class="e-subhead">Asthetics</div>
					<div class="e-largehead">Gallery</div>
					<carousel-3d
						disable3d
						width="1000"
						height="550"
						space="1010"
						border="0">
						<slide :index="i" v-for="(x, i) in 6" :key="i">
							<template slot-scope="{ isCurrent }">
								<img :src="require(`@/assets/${x}.png`)" :class="{ isCurrent }">
							</template>
						</slide>
					</carousel-3d>
				</div>
			</div>

			<div class="e-4-container e-container">
				<div class="e-container-inner">
					<div>
						<div class="e-subhead">Stay up to date</div>
						<div class="e-largehead">We'll keep you posted</div>
						<div class="e-generic-text">
							Everland is currently in active development and
							is not ready to be played yet. Keep track of our
							progress on twitter or our mailing list
						</div>
						<v-text-field
							v-model="email"
							placeholder="Email address"
							outlined
							dark
							color="#cbcbdf"
							class="height-issue-fix"
							:height="44"
						></v-text-field>
					</div>
					<div class="e-4-img">
						<img :src="require('@/assets/aquarium.gif')" alt="aquarium">
					</div>
				</div>
			</div>

			<div class="e-5-container">
				<div class="e-container-inner">
					<div>
						<img :src="require('@/assets/logo.png')">
					</div>
					<div>
						<ul v-for="x in links" :key="x.title">
							<li class="e-generic-text">{{ x.title }}</li>
							<li v-for="y in x.selection" :key="y[0]">
								<a :href="y[1]">{{ y[0] }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>

	</div>

</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
	name: 'App',

	components: {
		Carousel3d,
		Slide,
	},

	data: () => ({
		qualities: [
			{
				title: 'Social',
				desc: 'Recapture the social aspect of games with systems designed around player interaction',
			},
			{
				title: 'Minigames',
				desc: 'Engage with others in minigames in each zone or participate in open world activities',
			},
			{
				title: 'Personalize',
				desc: 'Collect special outfits, cosmetics, and super rare items then show them off',
			},
			{
				title: 'Quests',
				desc: 'Immerse yourself in the world as you quest to learn secrets and earn special rewards',
			},
			{
				title: 'Housing',
				desc: 'Decorate your apartment with your collection of furniture, or upgrade to a house or mansion',
			},
			{
				title: 'Explore',
				desc: 'Explore to discover secrets, fun interactions, and meet your favorite influencers in the world',
			},
		],
		links: [
			{
				title: 'Navigation',
				selection: [
					['Home', '#'],
					['News', '#'],
					['Careers', '#'],
				],
			},
			{
				title: 'Socials',
				selection: [
					['Twitter', '#'],
					['Discord', '#'],
					['Twitch', '#'],
				],
			},
			{
				title: 'Inquiries',
				selection: [
					['Dev email', '#'],
					['Founder email', '#'],
				],
			},
		],
		email: '',
		sp: 0,
		wh: 10000,
		ww: 10000,
		scrollTimeout: null,
	}),

	computed: {
	},

	created() {
		this.$vuetify.theme.dark = true;

		// this.handleResize();
		// window.addEventListener('scroll', this.handleScroll);
		// window.addEventListener('resize', this.handleResize);
	},

	mounted() {
	},

	methods: {
		handleScroll() {
			window.clearTimeout(this.scrollTimeout);
			this.scrollTimeout = setTimeout(() => {
				this.sp = window.scrollY;
			}, 10);
		},
		handleResize() {
			this.wh = window.innerHeight;
			this.ww = window.innerWidth;
		},
	},

	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.handleResize);
	},

};
</script>

<style lang="scss">
	@import './styles/home.scss';
</style>
