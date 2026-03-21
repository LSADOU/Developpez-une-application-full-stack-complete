package com.openclassrooms.mddapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openclassrooms.mddapi.dto.request.CreatePostRequest;
import com.openclassrooms.mddapi.dto.response.PostResponse;
import com.openclassrooms.mddapi.service.PostService;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;





@RestController
@RequestMapping("api/posts")
public class PostController {

    private PostService postService;

    public PostController(PostService ps){
        this.postService = ps;
    }
    
    @GetMapping("")
    public List<PostResponse> getFeed(@AuthenticationPrincipal UserDetails ud) {
        return this.postService.getFeed(ud.getUsername());
    }
    
    @GetMapping("/{postId}")
    public PostResponse getPostById(@PathVariable Long postId) {
        return this.postService.getPostById(postId);
    }

    @PostMapping("")
    public PostResponse createPost(@AuthenticationPrincipal UserDetails ud, @RequestBody CreatePostRequest cpr) {
        return this.postService.createPost(ud.getUsername(), cpr);
    }
    
    
}
