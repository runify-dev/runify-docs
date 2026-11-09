---
id: workflow
title: Workflow Engine
sidebar_label: Workflow Engine
---

# Workflow Engine

At the heart of Runify is a **visual canvas**. Instead of writing a program, you build an AI assistant by dragging ready-made blocks onto the canvas, connecting them in the order they should run, and filling in a few settings. This page explains how the canvas works.

## A clear, easy-to-read flow

Runify uses a simple flow where blocks are connected in the order they should run. There are no tangled loops drawn on the main canvas, so the sequence of steps is always clear at a glance — even if you have never built a workflow before.

## Main canvas and loop sub-canvases

Most of your work happens on the **main canvas**. When you need the assistant to repeat a set of steps — for example, to work through a list of items one by one — you place a **loop** on the main canvas. The steps to be repeated live on their own separate **loop sub-canvas**, which you open by double-clicking the loop. Inside it you can add blocks that move on to the next item or stop the repetition early. Keeping repeating steps on their own canvas keeps the main flow clean and easy to follow.

## See exactly what is happening

This is the biggest difference from most AI tools: nothing is hidden. While a workflow runs, the canvas shows in real time:

- Each block's status — waiting, running, finished or failed.
- What went into and came out of every step.
- The results of any tool the assistant used.
- Which way a decision went at a branching point.

You can pause, change a setting and run it again until you get the result you want. Nothing is left to guesswork.

## Building a workflow

1. Create a new workflow.
2. Drag the blocks you need from the palette on the left onto the canvas.
3. Connect them in the order they should run.
4. Configure each block — choose the model, set conditions, fill in the instruction text, and so on.
5. Run the flow and watch the trace, then adjust anything that did not behave as expected.

If you would rather not start from scratch, you can describe what you want in plain language and let Runify draft the flow for you; you can then refine that draft on the canvas.

## The building blocks

Workflows are built from **36 node types**, arranged in the palette into five groups: **AI**, **AI tools**, **Data**, **Control flow** and **Tools**. Everyday examples include AI chat, condition, loop, database query, approval and knowledge search. To reach an outside service, use the block that calls a registered Tool, or connect a third-party integration. The full list is in [Workflow Nodes](/guides/nodes).

## Human-in-the-loop

With the **approval** block you can insert a human confirmation step at a critical point. The assistant then pauses and waits for a person to approve before continuing, so sensitive actions stay under your control without giving up automation.

## Publishing and versions

When a workflow is ready, **publish** it to make it available to end users. Runify keeps a history of published versions, and each published version is fixed, so you can confidently move forward or roll back to an earlier one.
