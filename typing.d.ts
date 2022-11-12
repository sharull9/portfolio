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
    backgroundInformation: string,
    address: string,
    email: string,
    name: string,
    role: string,
    phoneNumber: string,
    heroImage: Image,
    profilePic: Image
}

export interface Technology extends SanityBody{
    _type: "experience",
    image: Image,
    progress: number,
    title: string,
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
    technologies: Technology,
    dateStarted: date,
    dateEnded: date,
}

export interface Social extends SanityBody{
    _type: "social",
    title: string,
    url: string,
}