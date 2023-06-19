export interface IPost {
    image: String,
    caption: String,
    likeCount: Number,
    commentCount: Number,
    shareCount: Number,
    uploadDate: Date,
    category: String,
    comments?: IComment[],
}

export interface IComment {
    email: String,
    comment: String,
}