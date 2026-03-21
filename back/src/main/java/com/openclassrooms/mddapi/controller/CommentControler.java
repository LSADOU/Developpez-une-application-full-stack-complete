package com.openclassrooms.mddapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openclassrooms.mddapi.dto.request.CreateCommentRequest;
import com.openclassrooms.mddapi.dto.response.CommentResponse;
import com.openclassrooms.mddapi.service.CommentService;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("api/posts")
public class CommentControler {

    private CommentService commentService;

    public CommentControler(CommentService cs){
        this.commentService = cs;
    }

    @GetMapping("/{postId}/comments")
    public List<CommentResponse> getCommentByPostId(@PathVariable Long postId, @AuthenticationPrincipal UserDetails ud) {
        return this.commentService.getCommentByPostId(postId);
    }
    

    @PostMapping("/{postId}/comments")
    public CommentResponse createComment(@PathVariable Long postId, @AuthenticationPrincipal UserDetails ud, @RequestBody CreateCommentRequest ccr) {
        return this.commentService.createComment(ud.getUsername(), postId, ccr);
    }
    

}
