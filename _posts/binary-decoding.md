---
title: 'What is Binary Decoding'
excerpt: 'Binary decoders are electrical circuits that transform binary inputs into output signals that may be utilized to activate a particular output line. They are a necessary component of digital systems and are utilized in a variety of applications such as memory address decoding, data demultiplexing, and control logic.'
coverImage: '/assets/blog/binary-decoding/cover.png'
date: '2023-04-16T03:40:07.322Z'
author:
  name: Nver Khachoyan
  picture: '/assets/blog/authors/nk.jpeg'
ogImage:
  url: '/assets/blog/binary-decoding/cover.png'
---

## Quick Definition

Binary decoders are electrical circuits that transform binary inputs into output signals that may be utilized to activate a particular output line. They are a necessary component of digital systems and are utilized in a variety of applications such as memory address decoding, data demultiplexing, and control logic.

## Explanation

The microprocessor is a complex system under the hood, and its components require a wide range of electrical circuits  to fire in order to execute instructions correctly. Humans have come up with a solution to encode the instructions into smaller values. Let's say you have 4 circuits that you want to fire independently at any given time, and you don't want to have to input 4 bits of information every time you execute the given instruction. What you can do is encode the information into 2 bit values and use a decoder to send the appropriate signals. Look at the truth table below for the 2-to-4 binary decoder. 

> **Electrical circuit**:
>  path for transmitting electric current

A 2-to-4 binary decoder takes 2 inputs and spits out 4 outputs.
![Truth Table for 2-to-4 Binary Decoder](/assets/blog/binary-decoding/2-to-4-truth-table.png?raw=true "Truth Table for 2-to-4 Binary Decoder")

By using this truth table and logic gates, we are able to create an electrical circuit that will turn our 2 bit inputs into 4 bit outputs. We are able to communicate the same signals with fewer bits using a decoder, and that may seem like a small gain, however, there are other decoders that show a more significant ratio. Most commonly used binary decoders are the 2-to-4 decoder, 3-to-8 decoder and 4-to-16 decoder. I have used an online logic gate simulator to create a simple binary decoder to illustrate how it works.

### Below is a 2-to-4 binary decoder created using a logic gate simulator.

>In this example, you can see that the input is 00, therefore, we have an output of 0001. 
>*The least significant bit starts from top to bottom in the graph.*
![Alt text](/assets/blog/binary-decoding/24bd-00.png?raw=true "Title")

>In the second example, we have the input 01 and the output 0010.
![Alt text](/assets/blog/binary-decoding/24bd-01.png?raw=true "Title")

>In the third example, our input is 10 and the output is 0100.
![Alt text](/assets/blog/binary-decoding/24bd-10.png?raw=true "Title")

>Finally, in the fourth example, the input is 11 and the output is 1000.
![Alt text](/assets/blog/binary-decoding/24bd-11.png?raw=true "Title")

In the same way, we are able to use more complex decoders to transmit complicated instructions with fewer bits. We defined binary decoders and why they are useful in this article. We also examined a 2-to-4 binary decoder example with logic gates, and illustrated the logic behind it. In digital systems, binary decoders are essential, and as technology develops, their importance will only increase.

 
