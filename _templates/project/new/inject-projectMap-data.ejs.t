---
inject: true
to: src/projectMap.tsx
after: projectsMap
---
    {
        markdown: < <%= h.changeCase.pascal(name) %> />,
        attributes: <%= h.changeCase.camel(name) %>Attributes,
    },