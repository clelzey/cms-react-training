export interface ComicData {
    id: number,
    thumbnail: Thumbnail,
    title: string,
    issueNumber: number,
    dates: Date[],
    creators?: Creator,
}

export interface Thumbnail {
    extension: string,
    path: string,
}

export interface Date {
    date: string,
    interface: string,
}

export interface Creator {
    items?: CreatorItem[],
}

export interface CreatorItem {
    name: string,
}