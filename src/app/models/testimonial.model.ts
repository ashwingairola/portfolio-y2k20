export interface Testimonial {
	id: number;
	author: TestimonialAuthor;
	description: string;
}

export interface TestimonialAuthor {
	firstName: string;
	middleName?: string;
	lastName?: string;
	designation?: string;
	company?: string;
	relation?: string;
}
