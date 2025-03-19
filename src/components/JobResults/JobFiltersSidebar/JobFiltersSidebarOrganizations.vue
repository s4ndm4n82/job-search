<template>
  <collapsible-accordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <il class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </il>

          <il class="h-8 w-1/2">
            <input id="Between Vue and Me" type="checkbox" class="mr-3" />
            <label for="Between Vue and Me">Between Vue</label>
          </il>

          <il class="h-8 w-1/2">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </il>

          <il class="h-8 w-1/2">
            <input id="Vue and Half Men" type="checkbox" class="mr-3" />
            <label for="Vue and Half Men">Vue and Half Men</label>
          </il>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    CollapsibleAccordion,
  },
};
</script>
