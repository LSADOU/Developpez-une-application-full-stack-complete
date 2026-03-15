package com.openclassrooms.mddapi.dto.response;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private Long authorId;
    private String authorName;
    private Long topicId;
    private String topicTitle;
    private LocalDateTime createdAt;
}
