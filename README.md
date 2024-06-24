

1.	## Installation: 
a.	Install dependencies: npm install or yarn install

2.	## Starting the Application:
a.	Started the development server with npm start
b.	The application will open in the default web browser at http://localhost:3000.

3.	## Using the Application
a.	New Chat Section: Clicking on "New Chat" starts a new conversation. This clears the current conversation and resets the AI response.
b.	Past Conversations: Selecting a conversation from the list enables to view its messages and interact with the AI.
c.	BotAI: Interaction with the AI, view feedback, and providing new feedback using the icons and forms provided.
d.	Feedback Section: To view feedback provided for conversations.
e.	Dark Mode: Enable dark mode toggle using the switch at the bottom right corner.

4.	## Reasoning Behind Technical Choices
a.	React Framework: Chosen for its component-based architecture to make reusable components.
b.	Material-UI: Used for its pre-built components and styling options, ensuring a consistent design.
c.	Context API: Utilized to manage application state (such as current conversation, feedback) across components without prop drilling.
d.	Mock Data: Incorporated mockResponses.json as provided, for simulating AI responses and initial conversation data, enabling development without real backend dependencies.

5.	## Reasoning Behind Design Choices
a.	Layout and Styling: The application has a responsive layout using Material-UI, ensuring content is responsive to different screen sizes. 
b.	Color Scheme: A gradient background in light mode enhances. Dark mode provides an alternative for better readability in low-light environments.
c.	Icons: Icons such as "New Chat" and feedback icons provide interaction cues, enhancing user experience.

6.	## Trade-offs Made
a.	Responsiveness: Although the application uses a responsive grid layout, detailed responsiveness adjustments were not fully implemented for lack of time. Further refinement could ensure optimal display on all devices and orientations.
b.	Styling: While basic styling and color schemes are applied using Material-UI components and theme customization, more sophisticated styling (e.g., animations, custom transitions, as shown in the demo video) could enhance user experience.
c.	Suggestion Cards: Initial plans for suggestion cards or prompts at the beginning of interactions were not implemented, although component for the same has been made. This could improve user experience by providing conversation starters or AI capabilities overview.

7.	## Additional Notes
a.	Further improvements and enhancements will be made.
