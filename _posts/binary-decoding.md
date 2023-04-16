---
title: 'What is Binary Decoding'
excerpt: 'Binary decoders are electrical circuits that transform binary inputs into output signals that may be utilized to activate a particular output line. They are a necessary component of digital systems and are utilized in a variety of applications such as memory address decoding, data demultiplexing, and control logic.'
coverImage: '/assets/blog/binary-decoding/cover.png'
date: '2023-04-15T03:40:07.322Z'
author:
  name: Nver Khachoyan
  picture: '/assets/blog/authors/nk.jpeg'
ogImage:
  url: '/assets/blog/binary-decoding/cover.png'
---

## Quick Definition

Binary decoders are electrical circuits that transform binary inputs into output signals that may be utilized to activate a particular output line. They are a necessary component of digital systems and are utilized in a variety of applications such as memory address decoding, data demultiplexing, and control logic.

## Explanation

The microprocessor is a complex system under the hood, and its components require a wide range of electrical circuits to fire in order to execute instructions correctly. Humans have come up with a solution to encode the instructions into smaller values. Let's say you have 4 circuits that you want to fire independently at any given time, and you don't want to have to input 4 bits of information every time you execute the given instruction. What you can do is encode the information into 2 bit values and use a decoder to send the appropriate signals. Look at the truth table below for the 2-to-4 binary decoder. 

A 2-to-4 binary decoder takes 2 inputs and spits out 4 outputs.

| Input | Output |
|-------|--------|
| 00    | 0001   |
| 01    | 0010   |
| 10    | 0100   |
| 11    | 1000   |


Looking at this table, I hope it is clear to you how we are able to communicate the same signals with fewer bits using a decoder. This may seem like a small gain, but there are other decoders that show a more significant ratio. Most commonly used binary decoders are the 2-to-4 decoder, 3-to-8 decoder and 4-to-16 decoder.

Here is a 2-to-4 binary decoder created using a logic gate simulator.

![Alt text](/assets/blog/binary-decoding/cover.png?raw=true "Title")

1. path for transmitting electric current





