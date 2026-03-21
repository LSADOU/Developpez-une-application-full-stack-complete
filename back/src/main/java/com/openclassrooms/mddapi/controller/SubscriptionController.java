package com.openclassrooms.mddapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openclassrooms.mddapi.dto.response.MessageResponse;
import com.openclassrooms.mddapi.dto.response.TopicResponse;
import com.openclassrooms.mddapi.service.SubscriptionService;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    private SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService ss){
        this.subscriptionService = ss;
    }

    @GetMapping("")
    public List<TopicResponse> getAllSubscription(@AuthenticationPrincipal UserDetails ud) {
        return this.subscriptionService.getSubscriptions(ud.getUsername());
    }
    
    @PostMapping("/{topicId}")
    public MessageResponse suscribe(@AuthenticationPrincipal UserDetails ud, @PathVariable Long topicId) {
        return this.subscriptionService.suscribe(ud.getUsername(), topicId);
    }
    
    @DeleteMapping("/{topicId}")
    public MessageResponse unsuscribe(@AuthenticationPrincipal UserDetails ud, @PathVariable Long topicId) {
        return this.subscriptionService.unsuscribe(ud.getUsername(), topicId);
    }

}
