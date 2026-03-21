package com.openclassrooms.mddapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.openclassrooms.mddapi.dto.request.CreateCommentRequest;
import com.openclassrooms.mddapi.dto.response.CommentResponse;
import com.openclassrooms.mddapi.entity.Comment;
import com.openclassrooms.mddapi.entity.Post;
import com.openclassrooms.mddapi.entity.User;
import com.openclassrooms.mddapi.repository.CommentRepository;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.UserRepository;

@Service
public class CommentService {

    private CommentRepository commentRepository;
    private PostRepository postRepository;
    private UserRepository userRepository;

    public CommentService(CommentRepository cr, PostRepository pr, UserRepository ur){
        this.commentRepository = cr;
        this.postRepository = pr;
        this.userRepository = ur;
    }

    public List<CommentResponse> getCommentByPostId(Long PostId){
        Optional<Post> foundPost = this.postRepository.findById(PostId);
        if(foundPost.isPresent()){
            List<Comment> allCommentsFromPost = this.commentRepository.findByPost(foundPost.get());
            return allCommentsFromPost.stream().map(comment -> {
                CommentResponse commentResponse = new CommentResponse();
                commentResponse.setAuthorId(comment.getAuthor().getId());
                commentResponse.setAuthorName(comment.getAuthor().getUsername());
                commentResponse.setContent(comment.getContent());
                return commentResponse;
            }).collect(Collectors.toList());
        }else{
            throw new RuntimeException("Post "+PostId+" non trouvé lors de la récupération des commentaires");
        }
    }

    public CommentResponse createComment(String email, Long postId, CreateCommentRequest ccr){
        Optional<Post> foundPost = this.postRepository.findById(postId);
        if(foundPost.isPresent()){
            Optional<User> foundUser = this.userRepository.findByEmail(email);
            if(foundUser.isPresent()){
                Comment newComment = new Comment();
                newComment.setAuthor(foundUser.get());
                newComment.setContent(ccr.getContent());
                newComment.setPost(foundPost.get());
                this.commentRepository.save(newComment);
                CommentResponse newCommentResponse = new CommentResponse();
                newCommentResponse.setAuthorId(newComment.getAuthor().getId());
                newCommentResponse.setAuthorName(newComment.getAuthor().getUsername());
                newCommentResponse.setContent(newComment.getContent());
                return newCommentResponse;
            }else{
                throw new RuntimeException("Utilisateur "+email+" non trouvé lors de la création du commentaire");
            }
        }else{
            throw new RuntimeException("Post "+postId+" non trouvé lors de la creation du commentaires");
        }
    }
}
