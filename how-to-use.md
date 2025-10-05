# How to Use Public AI Models

How are we going to use these AI models?

## Model Distribution Methods

These models are normally distributed by the companies and people who trained them. They can be distributed in two main ways:

### 1. Direct Distribution
- **Direct links**: A link to the company's website or repository where the model is stored
- **Manual download**: You download the model to run it locally on your machine

### 2. Public Repository Platforms (Most Common)
- Models are distributed through public repositories on distribution platforms
- These platforms normally already have a **library, SDK, or API** that you can use to access the models
- Many of them have a Python library you can install, or something in JavaScript that you can fetch and run locally

**Benefits of platforms:**
- **Facilitates and standardizes** access to these models for everyone
- Instead of each company/person defining how their model is distributed, we have the guarantee that if it's on the platform, you already have a common interface to use that model

## Hugging Face and Transformers

One of the **most well-known platforms**, perhaps the de facto standard and most widely used and accepted, is the **Transformers library**, distributed by **Hugging Face**.

### Terminology
- **Hugging Face**: The company
- **Transformers**: The library itself
- People use both terms interchangeably
- When installing, we install the **Transformers library**
- People often say "I'll get a model from Hugging Face" or "I'll install a model that's on Hugging Face"

## Exploring Hugging Face Platform

### Website Overview
- **URL**: HuggingFace.co
- Main page where you can explore available models
- All models are **open and public** that you can download

### Popular Models Available
You can already see some very famous names:
- **Llama** from Meta
- **Qwen** from Alibaba
- **DeepSeek** from DeepSeek
- **Google models**
- All very well-known models

### Platform Features

#### Model Search and Filtering
- **1.5 million models** available
- Excellent interface for searching models
- **Filter by task type** (e.g., Question Answering - ask a question and get an answer)
- **Language-specific models** (e.g., models specific for Persian)
- **Multiple contributors** - various users contributing models

#### Repository Structure
- Follows the same pattern as other platforms like GitHub
- **Repository naming**: `username/model-name`
- **Companies have accounts**: Meta, DeepSeek, Google all have accounts on Hugging Face
- All upload models you can use

#### Model Categories and Tasks
You can filter by various categories:
- **Natural Language Processing**
- **Translation models**
- **Question Answering**
- Many other specialized tasks

### Model Documentation and Details

When entering a specific model, you'll see:
- **Comprehensive documentation**
- **Licensing information**
- **Discord links** for better understanding
- **Training explanations** - how the model was trained
- **Model families** - lists of all models within a family

#### Model Families Examples
- **DeepSeek**: DeepSeek R1, DeepSeek V3
- **Meta**: Llama 4, Llama 3
- You can explore different models within each company's profile

### Available Resources

For each model, you can explore:
- **Configuration files** (JSON format)
- **Chat templates** for conversation models
- **All files and resources** available for that model
- **License information** and usage guidelines

### Platform Navigation
- **Works similarly to GitHub**
- You can explore the platform freely to see different models
- **Model variety**: small models, large models
- **"Model zoo"** - essentially a collection you can explore

## Course Implementation

**In this module, we'll use the Hugging Face library.**

Throughout the module, we'll explore different models that we'll use for our activities and projects.
