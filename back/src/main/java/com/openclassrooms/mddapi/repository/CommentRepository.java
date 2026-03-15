package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.entity.Post;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.openclassrooms.mddapi.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment,Long>{

    List<Comment> findByPost( Post p);
}
