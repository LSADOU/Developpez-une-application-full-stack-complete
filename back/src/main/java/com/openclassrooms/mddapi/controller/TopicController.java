package com.openclassrooms.mddapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openclassrooms.mddapi.dto.response.TopicResponse;
import com.openclassrooms.mddapi.service.TopicService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/topics")
public class TopicController {

    private TopicService topicService;

    public TopicController(TopicService ts){
        this.topicService = ts;
    }

    @GetMapping("")
    public List<TopicResponse> getAllTopics() {
        return this.topicService.allTopics();
    }
    
}
