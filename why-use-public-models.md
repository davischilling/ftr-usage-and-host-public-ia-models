# Why Use Public AI Models?

A relevant question you might be having now is: **Why would I use a public AI model if I can simply call the ChatGPT API and receive a response that already meets all my needs and that I'm satisfied with?**

Well, aside from the fact that public AI models are **free** and you don't pay anything to use them (unlike using the ChatGPT API where you need to pay for each use, each token generated, each request), we have some other important considerations we need to discuss, particularly in terms of **control, customization, and governance**.

## Control and Transparency

### Complete Processing Transparency

When you run a public AI model on your computer or your company's infrastructure, you have **complete transparency** of all the model's processing.

You know:
- From the input data, what was done to pre-process that input data
- You have control over when the model has access to this data
- After the model's output, you have visibility into how this output returns to your system
- How it's displayed to your user

This is very different from having an API where:
- You send a request
- You receive a response
- You have no idea what happened in that process within the API you requested

**What OpenAI, Google, or Meta did with your request - you don't know.**

With public models, you know exactly:
- When you call the model
- What the exact input was
- What the exact response from the model was
- What processing you had to do

## Advantages of Public Models

### 1. Control and Governance

This gives you a huge advantage in terms of:
- **Control**: You have great ability to modify this processing
- **Governance**: You know exactly what's happening inside the black box that is your model during processing

### 2. Customization and Adaptation

Since the model is public and open, you can very easily adapt it for any task:
- Modify its parameters
- Customize components like the tokenizer (a specific part of the model)
- Alter its weights freely to suit the task you want to execute

### 3. Guaranteed Expected Behavior

You have **guaranteed expected behavior** because:
- You have total control over the code being executed
- You know what you can change and when you can change it
- You can control versions

This isn't true when using an API where:
- All code is under another company's responsibility
- They can change it freely as long as they keep the API the same
- Sometimes the API also changes and you have no control over it

### 4. Potential Cost Reduction

I mentioned that public models are free, but you also have the cost of running them.

**Processing an AI model is sometimes the biggest cost you have within an AI system**, among other services running in your infrastructure. Normally, AI services are some of the most expensive.

However, even though you're not paying for API usage, you might still be paying for processing. But even if the cost is higher than using an API, **you can also manage it better**:

- You can scale the model up or down at will
- You don't have control when the API price is set by another company
- You can only control demand (how many times you call the API)
- Sometimes you can't even control that, because if your users need to use the model, you'll need to make API calls

With public models, you have better control over costs, depending on processing costs, but there's potential to reduce your costs.

### 5. Complete Data Control

You have **total control over the model's input and output data**.

This data issue has been much debated. When you send a request to OpenAI's ChatGPT:
- OpenAI has the right, according to their terms of use, to keep this data
- Store the data to train their future models
- This means it will be incorporated into future model versions

**Potential problems:**
- **Data leaks**: A very big problem (you've probably seen news of other companies that had data leaked because of this)
- **Unknown future use**: You don't know what this data will be used for in the future
- You're signing a blank check without knowing if it will be used for analysis, training models, etc.

**With models in your infrastructure**: You have 100% guarantee that this data won't be accessed by another company and won't be used to train any other model.

*Note: You can still close a private contract with OpenAI or Google through an API so this data isn't used, but you're still transmitting this data over the network and it's exposed somehow.*

With public models, everything stays within your closed environment, providing **greater security and control over this data**.

## Trade-offs of Public Models

### 1. Potentially Worse Performance

Public models can have **potentially worse performance than state-of-the-art models**.

Normally, companies that release public models won't release their best model to the public - they keep that closed. For example:
- Meta and Google, who release models, normally release less performant models
- They have worse results because they want to convince you to pay for their API to get better results

**You have to make this trade-off**: Do I want to run a model locally or do I want the better, state-of-the-art performance that these companies provide?

### 2. Specialized Hardware Requirements

AI models normally need **specialized hardware**:
- These models usually require one or more GPUs
- If you're running AI in your company's own infrastructure, you'll need to provision these GPUs
- If you're running in the cloud, you'll need to pay extra to access this hardware
- This can potentially increase costs beyond processing costs - you'll have additional hardware costs

### 3. Specialized Technical Knowledge Required

To modify public models and make adjustments while ensuring performance follows expectations, **you'll need people who really know how the model works** and know how to modify it.

### 4. Higher Maintenance Costs

This includes:
- **Monitoring requirements**: You'll need to monitor performance
- **Team requirements**: You'll need a team to ensure performance stays stable
- **Uptime management**: Ensuring no downtime

**All of this you'll need to take into consideration** when running public models on your own infrastructure.
