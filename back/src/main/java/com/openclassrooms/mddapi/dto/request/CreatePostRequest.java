package com.openclassrooms.mddapi.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreatePostRequest {
    private String title;
    private String content;
    private Long topicId;
}
