import {
	StyledFirstText,
	StyledHeader,
	StyledSecondText,
	StyledTestimonials
} from './testimonials.styles';

const Testimonials = props => {
	return (
		<>
			<StyledTestimonials color='#733FC8' width='327px' height='444px'>
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

				<StyledSecondText width='263px' height='120px'>
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

			<StyledTestimonials color='#48556A' width='320px' height='240px'>
				<StyledHeader>
					<div>
						<img src='/public/images/image-jonathan.jpg' alt='' />
					</div>

					<div>
						<h3>Jonathan Walters</h3>
						<p>Verified Graduated</p>
					</div>
				</StyledHeader>

				<StyledFirstText width='263px' height='48px'>
					<p>The team was very supportive and kept me motivated</p>
				</StyledFirstText>

				<StyledSecondText width='263px' height='72px'>
					<p>
						“ I started as a total newbie with virtually no coding skills. I now
						work as a mobile engineer for a big company. This was one of the
						best investments I’ve made in myself. “
					</p>
				</StyledSecondText>
			</StyledTestimonials>

			<StyledTestimonials
				color='#f3f3f3'
				width='327px'
				height='222px'
			></StyledTestimonials>

			<StyledTestimonials
				color='#19202D'
				width='327px'
				height='384px'
			></StyledTestimonials>

			<StyledTestimonials
				color='#f0f0f0'
				width='327px'
				height='438px'
			></StyledTestimonials>
		</>
	);
};

export default Testimonials;
