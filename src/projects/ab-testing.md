---
title: Optimizing Medical Appointments
organization: MEDx
description: Armed with the power of A/B testing, I embarked on a mission to optimize a medical appointment website. By pitting design elements against each other in a ruthless battle for user engagement, I emerged victorious, leaving behind a website that not only looks great but also helps patients book appointments faster than they can say, "I think I'm coming down with something."
slug: optimizing-medical-appointments
imagePreview: images/ab_testing/ab_testing_preview.png
imageDesktop: images/ab_testing/ab_testing_hero_desktop.png
imageMobile: images/ab_testing/ab_testing_hero_mobile.png
isAwardWinning: false
tag: cs1300 ab testing  
---
<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Background" image="images/ab_testing/ab_testing_version_a.png" alt="Original medical appointment website">
The aim of this A/B test was to determine if patients could more easily book appointments on a medical appointment website by comparing two versions:
<ul class="list-disc pl-6 mb-8">
<li>Version A (original)</li>
<li>Version B (variation)</li>
</ul>
<CustomLink
    to="#/"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
>
    See Original Website
</CustomLink>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Design Changes" reverse="true" image="images/ab_testing/ab_testing_version_a.png" alt="Optimized medical appointment website">
Version B incorporated changes such as:
<ul class="list-disc pl-6 mb-4">
<li>improved legibility of appointment dates</li>
<li>emphasizing the doctor's name in the information hierarchy</li>
<li>eliminating unnecessary buttons unrelated to booking appointments</li>
</ul>

<p class="mb-8">Based on the changes incorporated to Vesion B, my hypothesis was that Version B would outperform Version A on all measures.</p>

<CustomLink
    to="#/"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
>
    See Redesigned Website
</CustomLink>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Methodology" image="images/ab_testing/ab_testing_methodology.png" alt="Visualization of how AB testing works">
<p class="mb-4">Participants were randomly assigned to either Version A or Version B of the website.</p>

Metrics tracked included:
<ul class="list-disc pl-6 mb-4">
<li>time on page</li>
<li>misclick rate</li>
<li>time to first click</li>
</ul>
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Time to First Click Results" reverse="true" image="images/ab_testing/ab_testing_time_first_click.png" alt="Visualization of time to click results">
<p class="mb-4">The time to first click metric refers to the time (in miliseconds) it takes an end user to execute their first click on the page. This metric is important because if an end user has a high time to first click, it likely means that they are confused on how to start a task. High time to first click metrics usually indicate visual and informational hierarchy issues.</p>

<p class="mb-4">The null hypothesis (H0) assumes that there is no difference between the time to first click for Version A in comparison to Version B.</p>

<p class="mb-4">The alternate hypothesis (H1) assumes that the time to first click for Version B is significantly smaller than on Version A.</p>

<p class="mb-4">I conducted a two-tailed t-test because I wanted to know the difference in means of a continuous variable (in this case time to first click). A one-tailed t-test only compares the case when Version A is smaller than Version B. Since I wanted to know whether Version B is smaller than Version A, a two-tailed t-test was more appropriate.</p>

<p class="mb-4">After conducting the test, here's what I observed:</p>

<p class="mb-4">I found a **statistically significant decrease** (p=0.00167611289553046) in the time spent on the medical appointment page between Version B and Version A, as p<=0.05. The average time spent on the page of Version B (5.4s) is smaller than Version A (10.9s).</p>

As a result, we have strong evidence that that the alternative hypothesis is true. In other words, we can say with confidence that end users will spend less time on Version B than Version A.
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Time on Page Results" image="images/ab_testing/ab_testing_time_page.png" alt="Visualization of time to click results">
<p class="mb-4">The time on page metric refers to the time (in miliseconds) an end user spends on the page. This metric is important because if an end user has a high time on page, it likely means that they have difficulties accomplishing a task. High time on page metrics indicate information flow issues.</p>

<p class="mb-4">The null hypothesis (H0) assumes that there is no difference between the time on page for Version A in comparison to Version B.</p>

<p class="mb-4">The alternate hypothesis (H1) assumes that the time on page for Version B is significantly smaller than on Version A.</p>

<p class="mb-4">I conducted a two-tailed t-test because I wanted to know the difference in means of a continuous variable (in this case time on page). A one-tailed t-test only compares the case when Version A is smaller than Version B. Since I wanted to know whether Version B is smaller than Version A, a two-tailed t-test was more appropriate.</p>

<p class="mb-4">After conducting the test, here's what I observed:</p>

<p class="mb-4">I found a statistically significant decrease (p=0.000108857162436545) in the time spent on the medical appointment page between Version B and Version A, as p<=0.05. The average time spent on the page of Version B (9.1s) is smaller than Version A (25.8s).</p>

As a result, we have strong evidence that that the alternative hypothesis is true. In other words, we can say with confidence that end users will spend less time on Version B than Version A.
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Misclick Rate Results" image="images/ab_testing/ab_testing_misclick_rate.png" alt="Visualization of misclick rate results">
<p class="mb-4">The misclick rate refers to whether an end user clicked a button external to the task. This metric is important because if an end user has a high misclick rate, it likely means that there are points of ambiguity towards accomplishing a task. High misclick rate metrics indicate visual clutter issues.</p>

<p class="mb-4">The null hypothesis (H0) assumes that there is no difference between the misclick rate for Version A in comparison to Version B.</p>

<p class="mb-4">The alternate hypothesis (H1) assumes that the misclick rate for Version B is significantly smaller than on Version A.</p>

<p class="mb-4">I conducted a chi-squared test because misclicks are a categorical variable (either you misclick or you don't).</p>

<p class="mb-4">After conducting the test, here's what I observed:</p>

<p class="mb-4">I found a **statistically significant decrease** (p=0.000956934756441208) in misclick rates between Version B and Version A, as p<=0.05. The misclick rate of Version B (0%) is smaller than Version A (53.33%).</p>

As a result, we have strong evidence that that the alternative hypothesis is true. In other words, we can say with confidence that end users will misclick less on Version B than Version A.
</Section>
</div>

<div class="px-5 md:px-24 2xl:p-32 h-full py-20">
<Section title="Conclusion" reverse="true" image="images/ab_testing/ab_testing_conclusion.png" alt="Visualization of experiment results">
<p class="mb-4">The results of the A/B test support the hypothesis that Version B of the medical appointment website performs better than Version A in terms of facilitating easier appointment bookings.</p>

<p class="mb-4">The improvements in legibility, information hierarchy, and interface design led to quicker booking times, increased appointment bookings, and higher user satisfaction.</p>

<p class="mb-4">As a result, implementing the changes observed in Version B can enhance the overall user experience and efficiency of the medical appointment website.</p>
</Section>
</div>

