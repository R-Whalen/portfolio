/**
 * Denotes a skill and a level of confidence out of 100%
 */
export interface Skill {
    name: string;
    confidence: number;
}

/**
 * Shows a simple job title and 
 */
export interface Employment {
    title: string;
    description: string;
    startYear: number;
    endYear: number;
}