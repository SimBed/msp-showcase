---
layout: page
page: suitability
---

<div class="canvas canvas-text canvas-black canvas-embossed mt-0 py-3 text-start">
  <div class="accordion" id="accordionSuitability">
    <% %w[group\ fitness fitness\ studio personal\ training\ studio multi-studio\ multi-function free-lance\ instructor gym\ boxing studio yoga pilates spin martial\ arts wellness].sort.each do |post| %>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed accordion-cancel">
              <%= post %>
            </button>
          </h2>
        </div>
    <% end %>
  </div>
</div>