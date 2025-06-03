# Epic Tech AI - API Documentation

## Overview

The Epic Tech AI API provides programmatic access to our AI content generation platform. Generate text, images, code, and multimedia content through simple REST API calls.

## Base URL

Production: https://api.epic-tech-ai.com/v1 Staging: https://staging-api.epic-tech-ai.com/v1


## Authentication

All API requests require authentication using an API key. Include your API key in the Authorization header:

```bash
Authorization: Bearer YOUR_API_KEY
Getting an API Key
Sign up at epic-tech-ai.com
Navigate to Dashboard → Settings → API Keys
Create a new API key with appropriate permissions
Rate Limits
Rate limits vary by subscription plan:

Creator: 1,000 requests/month
Pro: 10,000 requests/month
Team: 100,000 requests/month
Enterprise: Custom limits
Rate limit headers are included in all responses:

X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
Content Generation
Generate Content
Generate AI content using various models and types.

Endpoint: POST /generate

Request Body:

{
  "type": "text|image|code|audio|video",
  "prompt": "Your generation prompt",
  "model": "gpt-4|dall-e-3|claude-3|custom",
  "settings": {
    // Type-specific settings
  },
  "projectId": "optional-project-id"
}
Response:

{
  "id": "gen_1234567890",
  "type": "text",
  "status": "completed",
  "result": {
    "content": "Generated content...",
    "metadata": {}
  },
  "usage": {
    "tokens": 150,
    "cost": 0.003
  },
  "createdAt": "2024-01-01T00:00:00Z"
}
Text Generation
Generate articles, blogs, marketing copy, and more.

Example Request:

curl -X POST https://api.epic-tech-ai.com/v1/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "text",
    "prompt": "Write a comprehensive guide about sustainable energy",
    "model": "gpt-4",
    "settings": {
      "maxTokens": 2000,
      "temperature": 0.7,
      "topP": 1.0,
      "frequencyPenalty": 0.0,
      "presencePenalty": 0.0,
      "style": "professional",
      "tone": "informative"
    }
  }'
Text Settings:

maxTokens (integer): Maximum tokens to generate (1-4000)
temperature (float): Creativity level (0.0-2.0)
topP (float): Nucleus sampling (0.0-1.0)
frequencyPenalty (float): Frequency penalty (-2.0-2.0)
presencePenalty (float): Presence penalty (-2.0-2.0)
style (string): Writing style (professional, casual, creative, technical)
tone (string): Content tone (informative, persuasive, friendly, formal)
Image Generation
Create stunning visuals, artwork, and designs.

Example Request:

curl -X POST https://api.epic-tech-ai.com/v1/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "image",
    "prompt": "A futuristic cityscape at sunset with flying cars",
    "model": "dall-e-3",
    "settings": {
      "size": "1024x1024",
      "quality": "hd",
      "style": "vivid",
      "n": 1
    }
  }'
Image Settings:

size (string): Image dimensions (256x256, 512x512, 1024x1024, 1024x1792, 1792x1024)
quality (string): Image quality (standard, hd)
style (string): Image style (vivid, natural)
n (integer): Number of images to generate (1-4)
Response:

{
  "id": "gen_img_1234567890",
  "type": "image",
  "status": "completed",
  "result": {
    "images": [
      {
        "url": "https://storage.epic-tech-ai.com/images/generated_image.png",
        "revisedPrompt": "Enhanced prompt used for generation"
      }
    ]
  },
  "usage": {
    "cost": 0.04
  }
}
Code Generation
Generate applications, functions, and scripts.

Example Request:

curl -X POST https://api.epic-tech-ai.com/v1/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "code",
    "prompt": "Create a React component for a user profile card with avatar, name, and bio",
    "model": "gpt-4",
    "settings": {
      "language": "typescript",
      "framework": "react",
      "style": "functional",
      "includeTests": true,
      "includeDocumentation": true
    }
  }'
Code Settings:

language (string): Programming language (javascript, typescript, python, java, etc.)
framework (string): Framework to use (react, vue, angular, express, etc.)
style (string): Code style (functional, class-based, modular)
includeTests (boolean): Include unit tests
includeDocumentation (boolean): Include code documentation
Audio Generation (Coming Soon)
Generate music, voiceovers, and sound effects.

Example Request:

curl -X POST https://api.epic-tech-ai.com/v1/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "audio",
    "prompt": "Upbeat electronic music for a tech product demo",
    "settings": {
      "duration": 30,
      "genre": "electronic",
      "mood": "upbeat",
      "format": "mp3",
      "quality": "high"
    }
  }'
Video Generation (Coming Soon)
Create animated videos and presentations.

Example Request:

curl -X POST https://api.epic-tech-ai.com/v1/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "video",
    "prompt": "Animated explainer video about renewable energy",
    "settings": {
      "duration": 60,
      "style": "animated",
      "resolution": "1080p",
      "format": "mp4"
    }
  }'
Generation Management
Get Generation
Retrieve details about a specific generation.

Endpoint: GET /generations/{id}

Response:

{
  "id": "gen_1234567890",
  "type": "text",
  "prompt": "Original prompt",
  "status": "completed",
  "result": {
    "content": "Generated content..."
  },
  "usage": {
    "tokens": 150,
    "cost": 0.003
  },
  "createdAt": "2024-01-01T00:00:00Z",
  "completedAt": "2024-01-01T00:00:05Z"
}
List Generations
Get a list of your generations with filtering and pagination.

Endpoint: GET /generations

Query Parameters:

type (string): Filter by generation type
status (string): Filter by status (pending, processing, completed, failed)
limit (integer): Number of results (1-100, default: 20)
offset (integer): Pagination offset (default: 0)
startDate (string): Filter from date (ISO 8601)
endDate (string): Filter to date (ISO 8601)
Example:

curl "https://api.epic-tech-ai.com/v1/generations?type=text&limit=10&offset=0" \
  -H "Authorization: Bearer YOUR_API_KEY"
Response:

{
  "data": [
    {
      "id": "gen_1234567890",
      "type": "text",
      "prompt": "Original prompt",
      "status": "completed",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 10,
    "offset": 0,
    "hasMore": true
  }
}
Delete Generation
Delete a generation and its associated data.

Endpoint: DELETE /generations/{id}

Response:

{
  "success": true,
  "message": "Generation deleted successfully"
}
Templates
List Templates
Get available templates for quick generation.

Endpoint: GET /templates

Query Parameters:

type (string): Filter by generation type
category (string): Filter by category
public (boolean): Include public templates
Response:

{
  "data": [
    {
      "id": "tpl_blog_post",
      "name": "Blog Post Outline",
      "description": "Generate a structured blog post outline",
      "type": "text",
      "category": "content",
      "prompt": "Create a blog post outline about {topic}...",
      "settings": {
        "maxTokens": 1000,
        "temperature": 0.7
      }
    }
  ]
}
Use Template
Generate content using a predefined template.

Endpoint: POST /templates/{id}/generate

Request Body:

{
  "variables": {
    "topic": "Artificial Intelligence",
    "audience": "beginners"
  },
  "settings": {
    // Override template settings
  }
}
Projects
Create Project
Organize your generations into projects.

Endpoint: POST /projects

Request Body:

{
  "name": "Marketing Campaign Q1",
  "description": "Content for Q1 marketing campaign",
  "settings": {
    "defaultModel": "gpt-4",
    "defaultSettings": {}
  }
}
List Projects
Endpoint: GET /projects

Get Project
Endpoint: GET /projects/{id}

Update Project
Endpoint: PUT /projects/{id}

Delete Project
Endpoint: DELETE /projects/{id}

Usage & Analytics
Get Usage Stats
View your API usage and costs.

Endpoint: GET /usage

Query Parameters:

period (string): Time period (day, week, month, year)
startDate (string): Start date (ISO 8601)
endDate (string): End date (ISO 8601)
Response:

{
  "period": "month",
  "usage": {
    "totalGenerations": 1250,
    "textGenerations": 800,
    "imageGenerations": 300,
    "codeGenerations": 150,
    "totalTokens": 125000,
    "totalCost": 25.50
  },
  "limits": {
    "maxGenerations": 10000,
    "remainingGenerations": 8750
  },
  "breakdown": [
    {
      "date": "2024-01-01",
      "generations": 45,
      "tokens": 4500,
      "cost": 0.90
    }
  ]
}
Account Management
Get Account Info
Endpoint: GET /account

Response:

{
  "id": "acc_1234567890",
  "email": "user@example.com",
  "plan": "pro",
  "subscription": {
    "status": "active",
    "currentPeriodEnd": "2024-02-01T00:00:00Z"
  },
  "usage": {
    "currentPeriod": {
      "generations": 1250,
      "limit": 10000
    }
  }
}
API Keys Management
List API Keys
Endpoint: GET /api-keys

Create API Key
Endpoint: POST /api-keys

Request Body:

{
  "name": "Production API Key",
  "permissions": ["generate", "read"],
  "expiresAt": "2024-12-31T23:59:59Z"
}
Revoke API Key
Endpoint: DELETE /api-keys/{id}

Webhooks
Configure webhooks to receive real-time notifications about generation events.

Webhook Events
generation.completed - Generation finished successfully
generation.failed - Generation failed
usage.limit_reached - Usage limit reached
subscription.updated - Subscription changed
Configure Webhook
Endpoint: POST /webhooks

Request Body:

{
  "url": "https://your-app.com/webhooks/epic-tech-ai",
  "events": ["generation.completed", "generation.failed"],
  "secret": "your-webhook-secret"
}
Webhook Payload Example
{
  "event": "generation.completed",
  "data": {
    "id": "gen_1234567890",
    "type": "text",
    "status": "completed",
    "result": {
      "content": "Generated content..."
    }
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
Error Handling
The API uses conventional HTTP response codes and returns detailed error information.

HTTP Status Codes
200 - Success
201 - Created
400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
429 - Rate Limited
500 - Internal Server Error
Error Response Format
{
  "error": {
    "code": "invalid_request",
    "message": "The request is missing required parameters",
    "details": {
      "field": "prompt",
      "issue": "This field is required"
    }
  }
}
Common Error Codes
invalid_request - Request is malformed
authentication_failed - Invalid API key
rate_limit_exceeded - Too many requests
insufficient_credits - Not enough credits
generation_failed - AI generation failed
invalid_model - Unsupported model
SDKs
Official SDKs are available for popular programming languages:

JavaScript/Node.js
npm install @epic-tech-ai/sdk
import { EpicTechAI } from '@epic-tech-ai/sdk';

const client = new EpicTechAI({
  apiKey: 'YOUR_API_KEY'
});

const result = await client.generate({
  type: 'text',
  prompt: 'Write a blog post about AI',
  model: 'gpt-4'
});
Python
pip install epic-tech-ai
from epic_tech_ai import EpicTechAI

client = EpicTechAI(api_key='YOUR_API_KEY')

result = client.generate(
    type='text',
    prompt='Write a blog post about AI',
    model='gpt-4'
)
PHP
composer require epic-tech-ai/php-sdk
use EpicTechAI\Client;

$client = new Client('YOUR_API_KEY');

$result = $client->generate([
    'type' => 'text',
    'prompt' => 'Write a blog post about AI',
    'model' => 'gpt-4'
]);
Support
Documentation: docs.epic-tech-ai.com
API Status: status.epic-tech-ai.com
Support: support@epic-tech-ai.com
Community: community.epic-tech-ai.com
Changelog
v1.0.0 (2024-01-01)
Initial API release
Text and image generation
Project management
Usage analytics
v1.1.0 (2024-02-01)
Code generation support
Template system
Webhook support
Enhanced error handling
For more information, visit our developer portal.
