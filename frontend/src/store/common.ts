export interface NullWithId {
    id?: number
}

export interface User {
    family_name: string,
    given_name: string,
    username: string
}

export interface Job extends NullWithId {
    title: string
    tags: Array<{ name: string }>
    summary: string
    submitter?: User
    description: string
}

export interface CalendarEvent extends NullWithId {
    description: string
    early_registration_deadline: string
    end_date: string
    location: string
    start_date: string
    submission_deadline: string
    submitter?: User
    summary: string
    tags: Array<string>
    title: string
}

export interface MemberProfile extends NullWithId {
    bio: string,
    codebases: Array<Codebase>
    date_joined: string
    degrees: Array<string>,
    family_name: string
    follower_count: number
    following_count: number
    full_member: boolean,
    given_name: string
    institution_name: string
    institution_url: string
    keywords: Array<{ name: string }>
    orcid: string
    orcid_url: string
    personal_url: string
    picture: string
    professional_url: string
    profile_url: string
    research_interests: string
    username: string
};

export interface Contributor {
    affiliations: string
    name: string
    profile_url: string
    username: string
}

export interface CodebaseContributor {
    is_maintainer: boolean
    is_rights_holder: boolean
    role: string
    affiliations_list: Array<string>
    given_name: string
    middle_name: string
    family_name: string
    type: string
}

export interface Codebase extends NullWithId {
    associatiated_publications_text: string
    all_contributors: Array<object>
    description: string
    doi: string | null
    featured: boolean
    first_published_on: string
    has_published_changes: boolean
    identifier: string
    is_replication: boolean
    keywords: Array<string>
    last_published_on: string
    latest_version: null
    live: boolean
    peer_reviewed: boolean
    references_text: string
    relationships: object
    repository_url: string
    submitter: User
    summary: string
    tags: Array<{ name: string }>
    title: string
}

export interface Dependency {
    identifier: string,
    name: string,
    os: string,
    url: string,
    version: string
}

// codebase_contributors, dependencies, description, documentation, doi, download_count, enbargo_end_date, license, os, peer_reviewed, platforms, programming_languages, submitted_package, submitter, version_number
export interface CodebaseRelease extends NullWithId {
    codebase_contributors: Array<CodebaseContributor>
    dependencies: Array<Dependency>
    description: string
    documentation: string
    doi: string | null
    embargo_end_date: string | null
    licence: string
    os: string
    peer_reviewed: boolean
    platforms: Array<string>
    programming_languages: Array<string>
    submitted_package: string
    submitter: User
    version_number: string
}