---
to: src/projects/<%= h.changeCase.kebab(name) %>.md
---
---
title: <%= h.changeCase.title(title) %>
organization: <%= h.changeCase.kebab(title) %>
description: <%= description ? description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente dolorum asperiores amet tenetur tempore maiores officia dolorem provident aliquam atque dolore quos modi, blanditiis doloribus qui architecto inventore dolor." %>
slug: <%= h.changeCase.kebab(title) %>
imagePreview: <%= h.changeCase.kebab(title) %>/<%= h.changeCase.kebab(name) %>-preview.webp
imageDesktop: <%= h.changeCase.kebab(title) %>/<%= h.changeCase.kebab(title) %>-hero-desktop.webp
imageMobile:  <%= h.changeCase.kebab(title) %>/ <%= h.changeCase.kebab(title) %>-hero-mobile.webp
isAwardWinning: <%= awardWinning === "yes" ? "true" : "false" %>
tag: <%= h.changeCase.lower(tag) %>
---

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Background" image="ab_testing/ab_testing_version_a.png" alt="Original medical appointment website">
<p class="mb-4">MEDx is a self-serve medical platform. On the platform, patients can book appointments with their physicians.</p>
<p class="mb-4">Unfortunately, patients reported difficulties booking appointments.</p>
<p class="mb-4">As a result, MEDx tasked me to redesign their booking appointment page.</p>
<CustomLink
    to="#/"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
>
    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path></svg>
    See Original Website
</CustomLink>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Design Changes" reverse="true" image="ab_testing/ab_testing_version_a.png" alt="Optimized medical appointment website">
My redesign included several changes:
<ul class="list-image-square pl-6 mb-8">
<li><b>Improved legibility of appointment dates:</b> Moving the appointment dates to a single line allowed for an <CustomLink to="https://uxplanet.org/f-shaped-pattern-for-reading-content-80af79cd3394" target="_blank" rel="noopener noreferrer">"F" scan reading pattern</CustomLink>, promoting reading efficiency for end user when trying to scan a list of appointments.</li>
<li><b>Fixating on the physician within the information hierarchy:</b> End users look for their physicians name when trying to book an appointment. Making the physician's name the main header of an appointment would reduce the time needed to scan for the correct appointment.</li>
<li><b>Eliminating unnecessary buttons unrelated to the task:</b> The "See Appointments" button was irrelevant to the task of booking an appointment. Removing it would prevent misclicks and time spent scanning to correctly book an appointment.</li>
</ul>

<CustomLink
to="#/"
target="_blank"
rel="noopener noreferrer"
class="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center">
<svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path></svg>
    See Redesigned Website

</CustomLink>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Hypothesis Testing" image="ab_testing/ab_testing_methodology.png" alt="Visualization of how AB testing works">
<p class="mb-4">My hypothesis was that my redesign was more effective than the original.</p>
<p class="mb-4">So, I conducted an <CustomLink to="https://hbr.org/2017/06/a-refresher-on-ab-testing" target="_blank" rel="noopener noreferrer">A/B test</CustomLink> to prove my assumptions empirically. Participants tested both versions of the website and relevant metrics were logged automatically during the experiment.</p>

The metrics I tracked included:

<ul class="list-image-square pl-6 mb-4">
<li><b>Time to first click:</b> The time it takes an end user to execute their first click on the page</li>
<li><b>Time on page:</b> The time an end user spends on the page</li>
<li><b>Misclick rate:</b> The rate at which an end user mislicks</li>
</ul>
<p class="mb-4">I conducted <CustomLink to="https://www.investopedia.com/terms/t/two-tailed-test.asp#:~:text=A%20two%2Dtailed%20test%2C%20in,and%20testing%20for%20statistical%20significance." target="_blank" rel="noopener noreferrer">two-tailed t-tests</CustomLink> to evaluate the results of the time to first click and the time on page metrics. This was because I wanted to know the difference in means for the metrics, which were continuous in nature.</p>
<p>Likewise, I conducted a <CustomLink to="https://www.investopedia.com/terms/c/chi-square-statistic.asp" target="_blank" rel="noopener noreferrer">chi-squared test</CustomLink> to evalute the misclick rate. This was because misclicks are categorical in nature (either you misclick or you don't).</p>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Time to First Click Results" reverse="true" image="ab_testing/ab_testing_time_first_click.png" alt="Visualization of time to click results">
<p class="mb-4">I found a <b>statistically significant decrease</b> (p=0.00167611289553046) in the time spent to perform a click between my redesign and the original, as p<=0.05.</p>

<p class="mb-4">The average time spent perform a click on my redesign (5.4s) was smaller than the original (10.9s).</p>

As a result, I had strong evidence that that the <CustomLink to="https://en.wikipedia.org/wiki/Alternative_hypothesis" target="_blank" rel="noopener noreferrer">alternative hypothesis</CustomLink> was true. In other words, I could say with confidence that end users would perform an action quicker on my redesign than the original.

</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Time on Page Results" image="ab_testing/ab_testing_time_page.png" alt="Visualization of time to click results">
<p class="mb-4">I also found a <b>statistically significant decrease</b> (p=0.000108857162436545) in the time spent on the page between my redesign and the original, as p<=0.05.</p>

<p class="mb-4">The average time spent on the page of my redesign (9.1s) was smaller than the original (25.8s).</p>

As a result, I also had strong evidence that that the <CustomLink to="https://en.wikipedia.org/wiki/Alternative_hypothesis" target="_blank" rel="noopener noreferrer">alternative hypothesis</CustomLink> was true. In other words, I could say with confidence that end users would spend less time on my redesign than the original.

</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Misclick Rate Results" image="ab_testing/ab_testing_misclick_rate.png" alt="Visualization of misclick rate results">
<p class="mb-4">Lastly, I found a <b>statistically significant decrease</b> (p=0.000956934756441208) in misclick rates between my redesign and the original, as p<=0.05.</p>

<p class="mb-4">The misclick rate of my redesign (0%) was smaller than the original (53.33%).</p>

As a result, I had strong evidence that that the <CustomLink to="https://en.wikipedia.org/wiki/Alternative_hypothesis" target="_blank" rel="noopener noreferrer">alternative hypothesis</CustomLink> was true. In other words, I could say with confidence that end users would misclick less on my redesign than the original.

</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Conclusion" reverse="true" image="ab_testing/ab_testing_conclusion.png" alt="Visualization of experiment results">
<p class="mb-4">The results of the A/B test support the hypothesis that Version B of the medical appointment website performs better than Version A in terms of facilitating easier appointment bookings.</p>

<p class="mb-4">The improvements in legibility, information hierarchy, and interface design led to quicker booking times, increased appointment bookings, and higher user satisfaction.</p>

<p class="mb-4">As a result, implementing the changes observed in Version B can enhance the overall user experience and efficiency of the medical appointment website.</p>
</Section>
</div>



