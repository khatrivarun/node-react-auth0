import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from 'src/dtos/create-post.dto';
import { Post } from 'src/models/post.model';

@Injectable()
export class BlogService {
  private posts: Post[];

  constructor() {
    this.posts = [
      {
        title: 'Title',
        description: 'Description',
        body: 'Body',
        author: 'Author',
        date_posted: 'Date Posted',
      },
      {
        title: 'Title',
        description: 'Description',
        body: 'Body',
        author: 'Author',
        date_posted: 'Date Posted',
      },
      {
        title: 'Title',
        description: 'Description',
        body: 'Body',
        author: 'Author',
        date_posted: 'Date Posted',
      },
      {
        title: 'Title',
        description: 'Description',
        body: 'Body',
        author: 'Author',
        date_posted: 'Date Posted',
      },
    ];
  }

  public addPost(createPostDTO: CreatePostDTO): Post {
    const newPost: Post = new Post();
    newPost.title = createPostDTO.title;
    newPost.description = createPostDTO.description;
    newPost.body = createPostDTO.body;
    newPost.author = createPostDTO.author;
    newPost.date_posted = createPostDTO.date_posted;

    this.posts.push(newPost);

    return newPost;
  }

  public getPosts(): Post[] {
    return this.posts;
  }
}
