---
id: datasources
title: Data Sources
sidebar_label: Data Sources
---

# Data Sources

A **data source** is a connection to a database your business already uses. Adding one lets an assistant look up real business information — orders, customers, inventory and so on — instead of only chatting from general knowledge.

## Adding a data source

1. Open the **Data Sources** page from the main menu.
2. Choose **Create** and pick the type you want to connect, such as **PostgreSQL** or **MySQL** for a business database, or **Redis** for a fast cache.
3. Fill in the connection details your IT team gives you.
4. Click **Test connection** to confirm Runify can reach it. If the test passes, save the data source.

:::tip
If the test fails, double-check the address and account details with your IT team — a typo in these is the most common cause.
:::

## Browsing your data

Once a data source is connected, you can browse it right inside Runify: open the data source to see its **tables**, and open a table to see its **columns** and sample rows. This lets you confirm you reached the right place and understand what information is available before you build a workflow.

## Using a data source in a workflow

With a data source saved, add the relevant blocks to a workflow:

- **Database query / write** — look up information or add records in a connected business database.
- **Cache read / write** — store and reuse intermediate results, so repeated questions are answered faster.

The assistant then works with your live business data, turning it from a chat-only tool into one that actually knows your business. See [Workflow Nodes](/guides/nodes) for the full list of data blocks.

## Next steps

- Adjust storage and sign-in options in [Configuration](/getting-started/configuration).
