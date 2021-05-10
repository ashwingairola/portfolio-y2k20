export enum ESkillType {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
	DATABASE = 'database',
	TOOLS = 'tools',
	LANGUAGES = 'languages',
	MISC = 'misc'
}

export interface Skill {
	id: number;
	title: string;
	logo: string;
	proficiency: number;
	type: ESkillType;
}
