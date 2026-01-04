export enum PublicationType {
    JOURNAL = "Journal Articles",
    CONFERENCE = "Conference Proceedings",
    UNDER_REVIEW = "Under Review"
}

export interface Publication {
    title: string;
    authors: string;
    venue: string;
    year?: string;
    type: PublicationType;
    link?: string;
}

export interface Experience {
    role: string;
    institution: string;
    location: string;
    period: string;
    details: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    gpa?: string;
}

export interface Project {
    title: string;
    description: string;
}

export interface SkillCategory {
    category: string;
    skills: string[];
}