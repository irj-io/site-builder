---
title: Email Integration
description: See how Tyto integrates directly into email conversations
author: Justin Lawrence
authorEmail: justin@tyto.me
date: '2021-04-07'
banner: /assets/images/help-my-tasks-banner.png
bannerAlt: A screenshot of Tyto replying to an email conversation
---

Tyto integrates directly into any email conversation. This means that you can interact with team members and even outside guests without having them have to be Tyto users (don't worry, we'll convince them later).

# How it works

Just forward any email to Tyto to have it create a task.

- The person in the TO field will become the assignee.
- The others will become followers.
- The subject line will become the task title.
- The body of the mail will become the task description.
- Any attachments will become files against the task.
- All messages from Tyto will be threaded into the conversation.
- Any messages to the conversation will be logged against the task.

Tyto also looks out for any instructions or task data within the email. Instructions are prefixed with her name, followed by a comma ("Tyto, "), or by using task data keywords (further below).

# Getting started

Note: Before you can use this feature, you'll need to add any email addresses you want Tyto to recognize into the settings page (Tyto / Settings / Emails).

## Email instructions

Here are some of the instructions Tyto understands directly via email.

- Tyto, schedule this for 12 June.
- Tyto, assign this to me.
- Tyto, assign this to John.
- Tyto, set the due date to 12 September.
- Tyto, move this to Repeat Clients/Client ABC

## Task data

You can also set any task info by specifying it in the email body, by adding any of the following items on a new line within the mail.

```
Duration: 2 hours
Urgency: 8
Importance: 2
Start date: 30 June
Due date: 1 September
Project: Repeat Clients/Client ABC
```

Normally, Tyto will use the subject line as the task title and all the text inside the mail as the task description, but you can override the task title like so:

```
Title: Get client sign-off
```

# Examples

1. Simply forwarding an email to Tyto.

```
To: Tyto, John

Hey John,

Please could you have a look next week. Thanks.
```

2. Conversational Tyto (more on that later)

```
To: Tyto, John

Hey John,

Please could you have a look next week. Thanks.

Tyto, schedule for next week.

Let me know if there's anything you require.

Thanks
Bob
```

3. Adding extra task data

```
To: Tyto, John

Hey John,

Please could you have a look next week. Thanks.

---
Project: Marketing/Inbox
Duration: 30m
Urgency: 3
Importance: 12
Assignee: John
---

```

4. Adding task data and your own data

```
---
Folder: Tyto/Bugs
Duration: 30m
Urgency: 3
Importance: 12
Assignee: John
Value: $12000
Customer: Revlon
Tags: ABC, DEF
Workflow: Panelbeating/New
---
```

And that's all Tyto's mailbot (beep beep) can do for now— but she's ever-evolving, so send through any suggestions to help@tyto.me. You'll get a Tyto tee if your suggestion is used.
