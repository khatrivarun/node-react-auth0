import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreatePostDTO } from 'src/dtos/create-post.dto';
import { AuthorizationGuard } from 'src/guards/authorization.guard';
import { Post as PostModel } from 'src/models/post.model';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post('post')
  @UseGuards(AuthorizationGuard)
  public addPost(@Body() createPostDTO: CreatePostDTO): PostModel {
    return this.blogService.addPost(createPostDTO);
  }

  @Get('posts')
  public getPosts(): PostModel[] {
    return this.blogService.getPosts();
  }
}
