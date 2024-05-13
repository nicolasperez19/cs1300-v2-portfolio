---
title: Innovating on A.I Documentation
organization: DriverAI
description: I boldly ventured into the uncharted territory of AI-generated documentation, leveraging the power of iterative feedback to create a groundbreaking system.
slug: innovating-on-ai-documentation
imagePreview: iterative_design/iterative_design_preview.webp
imageDesktop: iterative_design/iterative_design_hero_desktop.png
imageMobile: iterative_design/iterative_design_hero_mobile.png
isAwardWinning: false
tag: cs1300 iterative design
---

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Background" image="iterative_design/iterative_design_original.png" alt="Iterative design conclusion">
<p class="mb-4"><CustomLink to="https://www.ycombinator.com/" target="_blank"
    rel="noopener noreferrer">DriverAI</CustomLink> is an innovative, new <CustomLink to="https://www.ycombinator.com/" target="_blank"
    rel="noopener noreferrer">Y-Combinator</CustomLink> startup.</p> 
<p class="mb-4">DriverAI turns source code into documentation using <CustomLink to="https://en.wikipedia.org/wiki/Large_language_model" rel="noopener noreferrer"><abbr title="Artificial Intelligence">AI</abbr></CustomLink>, allowing companies to understand complex codebases in minutes.</p>
<p class="mb-4">DriverAI tasked me with redesigning their technical docs and personal notes page.</p>
<p class="mb-8">This is a story of the iterative process of my redesign.</p>
<CustomLink
    to="https://www.driverai.com/"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
>
    See Original Website
</CustomLink>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Discovery" reverse="true" image="iterative_design/iterative_design_discovery.png" alt="Iterative design discovery process">
The first step towards redesigning DriverAI was to discover the pain points of the user and stakeholders involved. In the stakeholder's brief, they stated that when the source code would update, there would be instances where the documentation would be out of date. Since both non-technical and technical users looked at the documentation, displaying errors had to be accessible for both user segments.
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Sketches" image="iterative_design/iterative_design_sketches.jpeg" alt="Iterative design conclusion">
Next came the arduous task of sketching out the user flows. Since technical documentation is a cognitively intense task, I focused on displaying errors through microinteractions instead of obscuring them from the user using overlays.  
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Low Fidelity Prototype" reverse="true" image="iterative_design/iterative_design_lo_fi.png" alt="Iterative design conclusion">
<p class="mb-4">With the sketches and a cup of coffee at hand, I set out to transform it into a low-fidelity prototype.</p>
My low-fidelity prototype included several changes:
<ul class="list-image-square pl-6 mb-8">
<li><b>Error banners at the document level:</b> By placing an out-of-date error at the top of the document, it was clear to the user that the document needed fixing</li>
<li><b>Out-of-date code snippet widget:</b> With the out-of-date code snippet widget, end users could easily automatically replace code snippets using DriverAI's technology. The widget would also allow fined grain control by allowing end users to reselect new code snippets instead if they preferred.</li>
<li><b>Personalized actions:</b> Actions would be personalized according to the user's technical experience. For instance, instead of making a non-technical user have to mull through code, they could assign it to a relevant technical user.</li>
</ul>
<CustomLink
    to="https://www.figma.com/file/kLyrc4n6pVS0mjnVRz09rj/DriverAI?type=design&node-id=185%3A37&mode=design&t=WqoEjX2Qrks1hhix-1"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
>
    See Low Fidelity Prototype
</CustomLink>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Feedback" image="iterative_design/iterative_design_feedback.png" alt="Iterative design feedback">
I presented my low-fidelity protoype to both the stakeholders and to the friends. The general reception to the prototype was positive; however, the stakeholder commented on several possible changes to the prototype:
<ul class="list-image-square pl-6">
<li><b>Long form notes in the personal pages:</b> The stakeholder mentioned that they were considering adding long-form notes to the personal page, but hadn't done it yey</li>
<li><b>Updates, not errors:</b> The stakeholder preferred to the mental model of the changes as updates and not errors. This allowed to expand the definition of updates to not just the code, but also to the documentation text itself.</li>
<li><b>Global updates:</b> The low-fidelity displayed changes at a per-document level, and not globally. The stakeholder said it would be convenient to see all the updates of the documentation at a glance.</li>
</ul>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="High Fidelity Prototype" reverse="true" image="iterative_design/iterative_design_hi_fi.png" alt="Iterative design high fidelity prototype">
<p class="mb-4">With the feedback at hand, I designed a final, high-fidelity prototype.</p>
<ul class="list-image-square pl-6 mb-8">
<li><b>Long form notes in the personal pages:</b> I completely changed the design of the personal notes to a long-form style, similar to Google Docs.</li>
<li><b>Show AI and user suggestions to documentation changes:</b> By displaying changes and suggestions to the documentation text, the user could easily view and accept the changes. I differentiated AI and user suggestions through different colors, with <CustomLink to="https://creativeinsights.gettyimages.com/en/trends/technology/the-future-is-purple" target="_blank" rel="noopener noreferrer">AI being purple</CustomLink> and user suggestions being green.</li>
<li><b>Global and single view of updates:</b> By adding a global button to view updates, users could easily see all the changes done to the codebase at a glance. In addition, they could drill down to a single update if the wanted to.</li>
</ul>
<CustomLink
    to="https://www.figma.com/file/kLyrc4n6pVS0mjnVRz09rj/DriverAI?type=design&node-id=0%3A1&mode=design&t=WqoEjX2Qrks1hhix-1"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
>
    See High Fidelity Prototype
</CustomLink>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Conclusion" image="iterative_design/iterative_design_conclusion.png" alt="Iterative design conclusion">
In conclusion, I think the changes I made to substantially improved DriverAI's interface. It allowed users to easily view and act upon changes to the documentation. Using the iterative process, I was able to refine my design according to the stakeholder's wishes.
</Section>
</div>
