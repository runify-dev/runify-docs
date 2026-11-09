---
id: notes
title: Knowledge base and documents
sidebar_label: Knowledge base and documents
---

# Knowledge base and documents

The **Knowledge** feature is where you collect the reference material you want your assistants to use — a product handbook, company policies, FAQs, or any other documents. An assistant can look up relevant passages while it answers, so its replies are grounded in your own information rather than guesswork.

## Building a knowledge base

You can add content in two ways:

- **Import files** — bring in **PDF**, **DOC**, **DOCX** or **ZIP** files. A ZIP file is unpacked into several documents, keeping its folder structure.
- **Write in the editor** — create documents directly with the built-in rich-text editor, which supports headings, formatting, tables, images, math formulas and more.

Everything is saved automatically as you work, so an interrupted session never loses content.

## Searching your documents

Runify includes **built-in full-text search** across your knowledge base, so there is nothing extra to install or set up. Once documents are in place, an assistant can find the passages that match a question and use them to shape its answer.

## Using knowledge in a workflow

1. Gather your rules, terminology and FAQs into a knowledge base.
2. Add the **Knowledge search** block to your workflow.
3. When the flow runs, the assistant recalls the matching passages and answers from your documents.

Deleting a knowledge base also removes its documents and their search entries, so nothing is left behind.

## Knowledge vs context management

Two features sound similar but do different jobs:

| | Knowledge base | Context management |
| --- | --- | --- |
| What it holds | The documents you curate and import | Notes and summaries from the conversation |
| How it is used | An assistant searches it for facts about your business | The assistant condenses earlier messages and saves important facts as notes |
| How long it lasts | Persistent — you maintain it over time | Lives across the turns of a conversation |

In short: **knowledge** is your lasting library of documents; **context** is the assistant's working memory for the conversation in progress. See [Workflow Nodes](/guides/nodes) for where each block sits in the palette.

## The chat page

End users talk to a published assistant through a clean, dedicated chat page. You can also place that chat inside your own website or internal system, so people can use it where they already work.
