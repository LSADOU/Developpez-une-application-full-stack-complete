package com.openclassrooms.mddapi.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.openclassrooms.mddapi.dto.request.CreatePostRequest;
import com.openclassrooms.mddapi.dto.response.PostResponse;
import com.openclassrooms.mddapi.entity.Post;
import com.openclassrooms.mddapi.entity.Topic;
import com.openclassrooms.mddapi.entity.User;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;

@Service
public class PostService {

    private PostRepository postRepository;
    private TopicRepository topicRepository;
    private UserRepository userRepository;

    public PostService(PostRepository pr, UserRepository ur, TopicRepository tr){
        this.postRepository = pr;
        this.topicRepository = tr;
        this.userRepository = ur;
    }

    public List<PostResponse> getFeed(String email){
        List<Topic> subscribedTopics = this.userRepository.findByEmail(email).get().getSuscribedTopics();
        if (subscribedTopics.size() == 0){
            return Collections.emptyList();
        }else{
            List<Post> subscribedPosts = this.postRepository.findByTopicIn(subscribedTopics);
            List<PostResponse> feed = subscribedPosts.stream().map(subscribedPost -> {
                PostResponse postResponse = new PostResponse();
                postResponse.setId(subscribedPost.getId());
                postResponse.setTitle(subscribedPost.getTitle());
                postResponse.setTopicId(subscribedPost.getTopic().getId());
                postResponse.setTopicTitle(subscribedPost.getTopic().getTitle());
                postResponse.setContent(subscribedPost.getContent());
                postResponse.setAuthorId(subscribedPost.getAuthor().getId());
                postResponse.setAuthorName(subscribedPost.getAuthor().getUsername());
                postResponse.setCreatedAt(subscribedPost.getCreatedAt());
                return postResponse;
            }).collect(Collectors.toList());
            return feed;
        }
    }

    public PostResponse createPost(String email, CreatePostRequest pr){
        Optional<User> foundUser = this.userRepository.findByEmail(email);
        if(foundUser.isPresent()){
            Optional<Topic> foundTopic = this.topicRepository.findById(pr.getTopicId());
            if(foundTopic.isPresent()){
                Post newPost = new Post();
                newPost.setAuthor(foundUser.get());
                newPost.setTopic(foundTopic.get());
                newPost.setContent(pr.getContent());
                newPost.setTitle(pr.getTitle());
                this.postRepository.save(newPost);
                PostResponse newPostResponse = new PostResponse();
                newPostResponse.setId(newPost.getId());
                newPostResponse.setTitle(newPost.getTitle());
                newPostResponse.setTopicId(newPost.getTopic().getId());
                newPostResponse.setTopicTitle(newPost.getTopic().getTitle());
                newPostResponse.setContent(newPost.getContent());
                newPostResponse.setAuthorId(newPost.getAuthor().getId());
                newPostResponse.setAuthorName(newPost.getAuthor().getUsername());
                newPostResponse.setCreatedAt(newPost.getCreatedAt());
                return newPostResponse;
            }else{
                throw new RuntimeException("Thème "+pr.getTopicId()+" non trouvé lors de la création du post");
            }
        }else{
            throw new RuntimeException("Utilisateur "+email+" non trouvé lors de la création du post");
        }
    }

    public PostResponse getPostById(Long id){
        Optional<Post> foundPost = this.postRepository.findById(id);
        if(foundPost.isPresent()){
            PostResponse postResponse = new PostResponse();
            postResponse.setId(foundPost.get().getId());
            postResponse.setTitle(foundPost.get().getTitle());
            postResponse.setTopicId(foundPost.get().getTopic().getId());
            postResponse.setTopicTitle(foundPost.get().getTopic().getTitle());
            postResponse.setContent(foundPost.get().getContent());
            postResponse.setAuthorId(foundPost.get().getAuthor().getId());
            postResponse.setAuthorName(foundPost.get().getAuthor().getUsername());
            postResponse.setCreatedAt(foundPost.get().getCreatedAt());
            return postResponse;
        }else{
            throw new RuntimeException("Post "+id+" non trouvé");
        }
    }
}
