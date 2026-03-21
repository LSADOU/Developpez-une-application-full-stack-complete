package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.entity.Topic;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.openclassrooms.mddapi.entity.Post;

public interface PostRepository extends JpaRepository<Post,Long>{

    List<Post> findByTopicIn( List<Topic> t);
}
