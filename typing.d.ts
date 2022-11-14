interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    __updatedAt: string
}

interface Image {
    _type: 'image',
    asset: {
        _ref: string,
        _type: "reference"
    }
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo",
    address: string,
    backgroundInformation: string,
    email: string,
    heroImage: Image,
    name: string,
    phoneNumber: string,
    profilePic: Image,
    role: string,
    socials: Social[];
}

export interface Technology extends SanityBody{
    _type: "experience",
    image: Image,
    progress: number,
    title: string,
}
export interface Project extends SanityBody{
    title: string,
    _type: "project",
    image: Image,
    linkToBuild: string,
    summary: string,
    technologies: Technology[],
}

export interface Skill extends SanityBody{
    _type: "skill",
    image: Image,
    progress: number,
    title: string,
}

export interface Experience extends SanityBody{
    _type: "experience",
    companyImage: Image,
    company: string,
    jobTitle: string,
    isCurrentlyWorking: boolean,
    tools: Technology[],
    dateStarted: date,
    dateEnded: date,
}

export interface Social extends SanityBody{
    _type: "social",
    title: string,
    url: string,
}