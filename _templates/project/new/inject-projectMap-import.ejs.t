---
inject: true
to: src/projectMap.tsx
prepend: true
---
//@ts-nocheck
import <%= h.changeCase.pascal(name) %>, {
  attributes as <%= h.changeCase.camel(name) %>Attributes,
} from "@/projects/<%= h.changeCase.kebab(name) %>.md";