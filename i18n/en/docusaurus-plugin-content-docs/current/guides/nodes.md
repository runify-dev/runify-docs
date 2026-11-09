---
id: nodes
title: Workflow Nodes
sidebar_label: Workflow Nodes
---

# Workflow Nodes

Workflows are composed of nodes — the ready-made blocks you drag onto the canvas to build an AI assistant. Runify provides **36 node types**, arranged in the palette into five groups. The tables below list each one by its plain name and what it does.

## AI (3)

| Node | Purpose |
| --- | --- |
| AI chat | The assistant's reasoning core — understands the conversation, writes replies and decides which tools to use |
| Context compression | Condenses a long conversation so earlier details are not lost |
| Extract notes | Pulls important facts out of the conversation and saves them as notes |

## AI tools (12)

| Node | Purpose |
| --- | --- |
| Create file | Makes a new file as part of the flow |
| Read file | Opens a file so the assistant can use its contents |
| List folder | Shows the files inside a folder |
| Find files | Locates files whose names match a pattern |
| Search in files | Looks for text inside files |
| Apply file changes | Updates files with a set of edits |
| Upload file | Brings a file into the flow |
| Download file | Saves a file out of the flow |
| Custom action | Carries out a custom action on the computer on the assistant's behalf |
| List Skills | Shows the Skills available to the assistant |
| Download Skills | Adds new Skills from the Skill store |
| Run a Skill | Carries out a chosen Skill |

## Data (5)

| Node | Purpose |
| --- | --- |
| Database query | Looks up information in a connected business data source |
| Database write | Adds or updates records in a connected business data source |
| Read cached value | Retrieves a stored result so it can be reused |
| Write cached value | Stores a result for later reuse |
| Knowledge search | Finds relevant content in your knowledge base |

## Control flow (6)

| Node | Purpose |
| --- | --- |
| Start | The entry point where every flow begins |
| Condition | Chooses a branch based on a value or the assistant's answer |
| Loop | Repeats a set of steps for each item in a list or until a condition is met |
| Loop start | Marks the beginning of the steps to be repeated |
| Continue loop | Moves on to the next repetition |
| Break loop | Stops repeating early |

## Tools (10)

| Node | Purpose |
| --- | --- |
| Custom logic | Handles special calculations or formatting you define yourself |
| Extract fields | Pulls structured information out of a piece of text |
| Set a value | Stores data and passes it between steps |
| Send response | Produces the answer the flow returns |
| Add to context | Places content into the assistant's working memory |
| Read context | Looks up stored working memory |
| Save context | Stores working memory for later turns |
| Current user | Reads who is using the assistant |
| Call a Tool | Runs a registered Tool or a connected service |
| Approval | Pauses for a person to confirm before continuing |

:::tip Reaching outside services
To connect an assistant to an outside service, use the **Call a Tool** block (which runs a registered Tool) or add a third-party integration from System settings.
:::

## Two things that are easy to confuse

- **Knowledge search** looks up information in the documents you imported into a knowledge base — your own reference library.
- **Context management** looks after the running conversation: it condenses earlier messages, saves important facts as notes and recalls them in later turns.

The two work independently: one is about your documents, the other about the live conversation. See [Knowledge base and documents](/guides/notes) for more on the difference.

## Combining blocks

A typical assistant mixes several groups. For example, it might start by receiving a question, decide whether a data lookup is needed, query a business database or call a connected service, have the AI write an answer from the result, pause for a person's approval on sensitive steps, and finally produce a reply or a file. You build this simply by connecting the blocks in that order on the canvas.
