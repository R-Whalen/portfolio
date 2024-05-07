/**
 * Denotes a skill and a level of confidence out of 100%
 */
export interface Skill {
    name: string;
    confidence: number;
}

/**
 * Shows a simple job title, gives a description and a range that employment period lasted
 */
export interface Employment {
    title: string;
    education: boolean;
    description: string;
    startYear: number;
    endYear: number;
}