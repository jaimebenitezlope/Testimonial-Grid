import {
	StyledFirstText,
	StyledHeader,
	StyledSecondText,
	StyledTestimonials
} from './testimonials.styles';

const Testimonials = props => {
	return (
		<>
			<StyledTestimonials
				background-color='#733FC8'
				color='white'
				width='327px'
				height='444px'
			>
				<StyledHeader>
					<div>
						<img src='/public/images/image-daniel.jpg' alt='' />
					</div>

					<div>
						<h3>Daniel Clifford</h3>
						<p>Verified Graduated</p>
					</div>
				</StyledHeader>

				<StyledFirstText width='263px' height='120px' margin-top='50px'>
					<p>
						I received a job offer mid-course, and the subjects I learned were
						current, if not more so, in the company I joined. I honestly feel I
						got every penny’s worth.
					</p>
				</StyledFirstText>

				<StyledSecondText width='263px' height='120px' margin-top='200px'>
					<p>
						“ I was an EMT for many years before I joined the bootcamp. I’ve
						been looking to make a transition and have heard some people who had
						an amazing experience here. I signed up for the free intro course
						and found it incredibly fun! I enrolled shortly thereafter. The next
						12 weeks was the best - and most grueling - time of my life. Since
						completing the course, I’ve successfully switched careers, working
						as a Software Engineer at a VR startup. ”
					</p>
				</StyledSecondText>
			</StyledTestimonials>

			<StyledTestimonials
				background-color='#48556A'
				width='320px'
				height='240px'
				color='white'
			>
				<StyledHeader>
					<div>
						<img src='/public/images/image-jonathan.jpg' alt='' />
					</div>

					<div>
						<h3>Jonathan Walters</h3>
						<p>Verified Graduated</p>
					</div>
				</StyledHeader>

				<StyledFirstText width='263px' height='48px' margin-top='40px'>
					<p>The team was very supportive and kept me motivated</p>
				</StyledFirstText>

				<StyledSecondText width='263px' height='72px' margin-top='110px'>
					<p>
						“ I started as a total newbie with virtually no coding skills. I now
						work as a mobile engineer for a big company. This was one of the
						best investments I’ve made in myself. “
					</p>
				</StyledSecondText>
			</StyledTestimonials>

			<StyledTestimonials
				color='#000000'
				background-color='#f3f3f3'
				width='327px'
				height='222px'
			>
				<StyledHeader>
					<div>
						<img src='/public/images/image-jeanette.jpg' alt='' />
					</div>

					<div>
						<h3>Jeanette Harmon</h3>
						<p>Verified Graduated</p>
					</div>
				</StyledHeader>

				<StyledFirstText width='263px' height='48px' margin-top='40px'>
					<p>The team was very supportive and kept me motivated</p>
				</StyledFirstText>

				<StyledSecondText width='263px' height='72px' margin-top='110px'>
					<p>
						“ I started as a total newbie with virtually no coding skills. I now
						work as a mobile engineer for a big company. This was one of the
						best investments I’ve made in myself. “
					</p>
				</StyledSecondText>
			</StyledTestimonials>

			<StyledTestimonials
				color='white'
				background-color='#19202D'
				width='327px'
				height='384px'
			>
				<StyledHeader>
					<div>
						<img src='/public/images/image-patrick.jpg' alt='' />
					</div>

					<div>
						<h3>Patrick Abrams</h3>
						<p>Verified Graduated</p>
					</div>
				</StyledHeader>

				<StyledFirstText width='263px' height='48px' margin-top='50px'>
					<p>
						Awesome teaching support from TAs who did the bootcamp themselves.
						Getting guidance from them and learning from their experiences was
						easy.
					</p>
				</StyledFirstText>

				<StyledSecondText width='263px' height='72px' margin-top='200px'>
					<p>
						“ The staff seem genuinely concerned about my progress which I find
						really refreshing. The program gave me the confidence necessary to
						be able to go out in the world and present myself as a capable
						junior developer. The standard is above the rest. You will get the
						personal attention you need from an incredible community of smart
						and amazing people. ”
					</p>
				</StyledSecondText>
			</StyledTestimonials>

			<StyledTestimonials
				background-color='#f0f0f0'
				width='327px'
				height='438px'
			>
				<StyledHeader>
					<div>
						<img src='/public/images/image-kira.jpg' alt='' />
					</div>

					<div>
						<h3>Kira Whittle</h3>
						<p>Verified Graduated</p>
					</div>
				</StyledHeader>

				<StyledFirstText width='263px' height='48px' margin-top='50px'>
					<p>Such a life-changing experience. Highly recommended!</p>
				</StyledFirstText>

				<StyledSecondText width='263px' height='72px' margin-top='120px'>
					<p>
						“ Before joining the bootcamp, I’ve never written a line of code. I
						needed some structure from professionals who can help me learn
						programming step by step. I was encouraged to enroll by a former
						student of theirs who can only say wonderful things about the
						program. The entire curriculum and staff did not disappoint. They
						were very hands-on and I never had to wait long for assistance. The
						agile team project, in particular, was outstanding. It took my
						learning to the next level in a way that no tutorial could ever
						have. In fact, I’ve often referred to it during interviews as an
						example of my developent experience. It certainly helped me land a
						job as a full-stack developer after receiving multiple offers. 100%
						recommend! ”
					</p>
				</StyledSecondText>
			</StyledTestimonials>
		</>
	);
};

export default Testimonials;
