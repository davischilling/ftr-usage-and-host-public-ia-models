# Usage and Hosting of Public AI Models

**Instructor:** Arthur Kaminski

## Module Overview

This module is divided into two main parts: a theoretical part and a 100% practical part.

### First Part - Theoretical Concepts

In the first part, we will cover basic concepts about:

- **What are public AIs** and how to use them
- **Trade-offs**: positive and negative points
- **General overview** of applications that use public AI models
- **Why use public AI models** compared to commercial AI APIs
- **How to use these public models** - where to find and host them
- **How to choose a model** (there are several models available)
- **Introduction to the Transformers library** - main library for accessing public AI models
- **AI application architecture** - important for hosting models on your own infrastructure

*"The famous: AI models - what they eat, where they live, what they are, etc."*

### Second Part - Practical Project

The second half will be 100% focused on code, applying all concepts from the first part.

## Technologies Used

### Required Tools

- **VS Code** (or any text editor for programming)
- **Computer with at least 16 GB of RAM**
- **GPU not required** (everything can run on CPU)

### Languages and Frameworks

- **JavaScript** (main language)
- **Basic Python** (standard language for AI - Transformers library is originally in Python, but has a JavaScript port)
- **React** (simple user interface)
- **Node.js** (server to serve AI models)

## Practical Project - Three Main Tasks

The project consists of creating an application that, given an image, converts it to audio in Portuguese describing what's in the image.

### 1. Image Caption Generation

- Receive an image as input
- Generate a descriptive caption in English

### 2. Translation

- Translate the generated caption from English to Portuguese

### 3. Speech Synthesis

- Convert the translated text to audio
- AI "speaking" the image description

## Types of Model Execution

The project will demonstrate two types of execution:

### Browser Execution

- Mainly using **React**
- Front-end focus

### Server Execution

- Using **Node.js** and **Python**
- Back-end focus
- Practically identical functionality in both languages

## Scope and Limitations

### AI Tasks Covered

The module focuses on **text**-related tasks, as they are:

- Lighter
- Faster
- Lower computational power demand

### Existing AI Tasks (but not covered in detail)

- Text summarization
- Translation
- Caption generation
- Speech synthesis
- Speech recognition
- **Image generation** (not covered due to high computational requirements)
- **Computer vision** (partially covered)

### Hardware Requirements

- **Minimum:** 16 GB RAM
- **GPU:** Not required
- **Note:** If available, GPU can be used, but requires complex additional configurations due to different architectures

## Course Expectations

By the end of the module, especially in the practical part, you will be able to:

- Run a complete AI application
- Understand how to run AI models locally
- Apply public AI model concepts in real projects

**Note:** Execution time may vary depending on available hardware, but all concepts and functionalities will be demonstrated in practice.
