---
layout: page
title: Suitability
---

- group fitness fitness studio
- personal training studio
- multi-studio, multi-function
- gym
- fitness studio
- pt studio
- boxing studio
- yoga
- pilates
- spin
- martial arts
- wellness



<ul>
  <% collections.posts.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>
