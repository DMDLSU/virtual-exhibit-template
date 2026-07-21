
# CSARCH2 Virtual Exhibit: Journey of a Message
**Section** S01
**Members:** 
* Cubarrubias, Dion Mel
* Encarnacion, Alessandro Gabriel
* Evangelista, Aiella
* Junsay, Andre Renee
* Rodriguez, Juan Titus


## Project Overview

This project dives into the history of networking to show how humans have stayed connected and shared data over time, taking visitors on a journey from the days of physical mail and early telephones all the way up to the fiber optic cables and WIFI networks we rely on today.

## The Tech Stack
*  Astro 6
*  Node.js
*  React

## Website Deployment Link
https://dmdlsu.github.io/virtual-exhibit-template/


## Interactive Element: The Data Ride

To make the exhibit interactive, we're building a virtual "journey". Instead of just reading an article, the user actually acts as a piece of "Data" traveling through different eras of communication. As the user progresses along the website, they will trigger animations, audio clips, and interactive prompts specific to that time period.

Here is a breakdown of the five eras visitors will travel through:

* **The Mail Era (Physical):** Users have to pick whether their data (a letter) ships by land, boat, or plane to see how the choice affects transfer speeds.
* **The Telephone Era (Switchboards):** The user will see a phone prompt and must choose to accept or decline the call.
* **The Internet Era (Modems):** A prompt to connect to the internet, complete with the classic screeching dial-up sound.
* **The Fiber Optic Era (Underwater Cables):** Users will make a technical routing choice between older copper wiring and modern optical cables.
* **The Wi-Fi Era (Wireless):** A simulated wifi strength meter, where users may experiment with different aspect affecting signal strength.


## Concepts to be discussed [Revised]

Each era will be shown in-depth, and will be discussed in four different categories: What kind of message is being sent, how far it could be delivered, how fast it could be delivered, and what the limitations of that era were.

* **The Mail Era (Physical):** This era's main form of messages was physical, handwritten letters. This era served as the foundation for long distance communication. Its mode of delivery, boats and carriages, both varied in speed, often taking days to even months depending on the distance of the recipient. That being said, the range of its delivery was very vast, often depending on whether the area of the recipient had its dedicated courier, with its limitations being its slow delivery.
  
* **The Telephone Era (Switchboards):** Here, we will be introducing the first telephones and telegraphs, along with the concept of the switchboards and their operators. Through phone lines, two-way live communication was made possible. Within minutes, people were able to communicate with other people in different parts of the country, and eventually other parts of the world. This era, however, relied on the construction of phone lines and towers, requiring every area to have some in order to be connected.
  
* **The Internet Era (Modems):** With the introduction of the first computers, we were able to send messages such as emails and files to any computer around the world in a matter of seconds. The first websites were able to disseminate information easily, spreading data faster than ever. While being revolutionary at the time, its speed was limited, unlike today.
  
* **The Fiber Optic Era (Underwater Cables):** With the demand for the internet growing, these Fiber Optics were made to replace the limited data-carrying capacity of copper cables. Made of glass strands, they were able to send data packets to the recipient very fast. However, these were more expensive to make than the traditional electricity-using copper wires, and still required the devices to be connected by a wire.
  
* **The Wi-Fi Era (Wireless):** Where we are today. Messages in the form of texts, videos, movies, and many more can now be sent to anyone around the world without the need for wires. This allowed for the use of mobile devices such as phones, which allowed messages to be sent anywhere, anytime, as long as it was connected to the network.

## Mobile Responsive Layout

On mobile devices, the Virtual Interactive Environment will be embedded at the top of the screen, while the detailed descriptions of the data evolutions sit below it. Users will also be prompted to make their interactive choices through this lower menu area.

If a user rotates their device to landscape mode, they can expand the interactive environment into full-screen mode. Once they return to portrait orientation, the descriptions and menus will smoothly reappear. As the ride progresses, the relevant text headers will dynamically highlight to match the active scene in the video, though users can easily tap on previous headers to revisit earlier information

## Tentative Style Guide Snapshot

We would have the whole area or screen black, after which a letter would appear with narration explaining how communication was back then, and it would swoop in the direction of a person. The user would have an option to choose a boat, a bird, or a carriage, as the main methods of carrying the letter.

We would have a black and white filter to match the time of telegraphs and telephones, where the methods of media that people had through the screen (TV, movies, etc.) were black and white

It would go have a 90's to maybe 2000's commercial theme or style

It will be similar to the first area, with blue hues similar to an aquarium, showcasing the underwater fiber optic cables

As we're constantly networking even when walking through social media so it would pan to a modern-day style/area, with the point-of-view of the user being them walking, scrolling through social media posts, while notifications would pop up (Twitter, Facebook, Instagram, Reddit, etc.)

--------------------------------------------------
## Development Documentation
--------------------------------------------------

## Initial Proposal

The project was initially proposed as a virtual exhibit that teaches the evolution of communication and networking through an interactive experience instead of a traditional informational website. Rather than having users read long paragraphs, we wanted them to actively experience how messages were transmitted throughout history.

Our main objectives were to:
- Present the evolution of communication technologies in chronological order.
- Explain networking concepts in a simple and engaging way.
- Encourage active learning through user interaction.
- Create a responsive experience that works on both desktop and mobile devices.

The concept eventually evolved into **"Journey of a Message,"** where users become a piece of data traveling through different eras of communication.

---

## Technical Discussions

### Choosing the Technology Stack

After discussing different web technologies, we selected the following:

- **Astro** for its performance and ability to efficiently render content-heavy websites.
- **React** for implementing interactive components, animations, and user interactions.
- **Node.js** as the development environment and package manager.

### Structuring the Experience

One of our discussions centered on how users should navigate the exhibit.

**Option 1:** Separate webpage for every communication era.

**Pros**
- Easier content organization.
- Simpler page development.

**Cons**
- Frequent page transitions interrupt immersion.
- Users may lose the sense of a continuous journey.

**Final Decision**

We chose a multi-page interactive experience where users continuously travel through every communication era.

### AI Usage Declaration

Artificial intelligence (AI) tools and large language models (LLMs) were used in the development of this project in the following ways:
- Code Debugging Assistance
- UI and text formatting
- Code Consistency and organization

---

## Creative Discussions

Several creative concepts were considered before deciding on the final direction.

### Museum Exhibit

Initially, we considered creating a virtual museum where users would walk from one exhibit to another.

While straightforward, it lacked interaction and felt too similar to reading an online article.

### Time Machine

Another idea was allowing users to travel through history using a time machine.

Although visually interesting, it shifted the focus away from networking and communication technologies.

### Travelling through eras (Final Concept)

We ultimately chose a virtual journey where users become the message being transmitted through history.

This concept was selected because it:
- Makes learning interactive.
- Places the user at the center of the experience.
- Naturally connects each communication era.
- Better demonstrates networking concepts through movement and interaction.

---

## Major Revisions

During development, several improvements were made to the original proposal.

### Standardizing Every Era

Originally, each communication era contained different amounts of information.

To improve consistency, every era was revised to discuss:

- Type of message
- Transmission distance
- Transmission speed
- Limitations

This made comparisons between technologies much easier.

### Improving Interactivity

The exhibit initially focused more on narration and animations.

Later revisions introduced meaningful user decisions, including:

- Choosing transportation methods during the Mail Era.
- Accepting or declining a telephone call.
- Connecting using a dial-up modem.
- Choosing between copper and fiber optic cables.

These interactions reinforce the networking concepts instead of simply entertaining users.

---

## Aha! Moments

### Becoming the Data

One of the biggest breakthroughs during brainstorming was realizing that users should become the data being transmitted instead of simply observing communication history.

This significantly increased immersion and aligned the experience more closely with networking concepts.

### Consistency Matters

Another realization was that every era should answer the same four questions:

- What message is being sent?
- How far can it travel?
- How fast can it travel?
- What are its limitations?

Using the same structure throughout the exhibit creates a more organized learning experience.

### Every Interaction Should Teach Something

Instead of adding interactions solely for engagement, we ensured every user action demonstrates a real communication or networking concept.

---

## Challenges Encountered

### Balancing Education and Entertainment

One challenge was ensuring the exhibit remained educational without becoming a collection of unrelated mini-games.

**Solution:** Every interaction directly demonstrates a networking principle.

---

### Historical Accuracy

Communication technologies evolved over long periods, making it difficult to determine which milestones to include.

**Solution:** We selected representative technologies that best illustrate major developments in communication history.

---

### Smooth Transitions

Transitioning between historical eras while maintaining immersion proved challenging.

**Solution:** The user's message continuously travels from one technology to another, creating a seamless journey.

---

### Mobile Responsiveness

The large interactive environment needed to remain usable on smaller screens.

**Solution:** We designed a responsive layout where the interactive environment remains at the top while descriptions and controls stay below, with an expanded landscape mode for greater immersion.

---

## Development Decisions

Throughout development, several ideas were considered but ultimately not implemented.

| Proposed Feature | Reason for Exclusion |
|------------------|----------------------|
| Virtual Reality support | Beyond the project's scope and timeline. |
| Multiplayer visitors | Added unnecessary complexity. |
| Voice recognition | Not essential to achieving the project's learning objectives. |
| Separate webpage for every era | Reduced immersion by interrupting the user's journey. |
| Fully 3D environment | Development time and performance constraints. |

---

## Lessons Learned

Developing this project taught us that educational experiences become significantly more engaging when users actively participate instead of passively reading information. Framing the visitor as the message itself transformed the project into a more immersive learning experience while making networking concepts easier to understand.


We also learned the importance of iterative design. Through continuous discussions, revisions, and testing, we refined both the educational content and the user experience. Maintaining consistency across every communication era, carefully balancing interactivity with educational value, and designing for multiple devices all contributed to creating a more effective virtual exhibit.

Overall, the project strengthened our understanding of networking concepts while also improving our collaboration, planning, and web development skills.

---
### References
Akamai (n.d.). *What Are Packets?*. Akamai. https://www.akamai.com/glossary/what-are-packets

Colburn, R. (2025, August 28). *Before Mobile Phones: Train Phones, Telegraphs and Other Mobile Communications*. IEEE Insight. https://insight.ieeeusa.org/articles/before-mobile-phones-train-phones-telegraphs-and-other-mobile-communications/

Incognito (2017, July 11). *A Brief History of Data Communications*. Incgonito. https://www.incognito.com/blog/a-brief-history-of-data-communications-2/

Pahlavan, K., Krishnamurthy, P. (2020, November 19). *Evolution and Impact of Wi-Fi Technology and Applications: A Historical Perspective*. Springer Nature Link. https://link.springer.com/article/10.1007/s10776-020-00501-8

Senko (n.d). *The Evolution of Data Transmission: Why Fiber is Replacing Copper at the Chip Level*. Senko. https://www.senko.com/the-evolution-of-data-transmission-why-fiber-is-replacing-copper-at-the-chip-level/
