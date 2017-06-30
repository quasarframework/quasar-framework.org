title: v0.14 Upgrade Guide
---

Hi,

While we wait for @rstoenescu to issue a complete guide, here’s a starting point for all of us impatient dudes who want to port a 0.13.x app to 0.14.

1. npm update -g quasar-cli
2. quasar init 'default#beta' FOLDERNAME (will create a new folder with 0.14beta basics)
3. cd FOLDERNAME
4. npm i
5. Manually move your 0.13 code into that folder structure. Repeat step 4 once all your dependencies are set up.
6. Check the beginners intro and the beta docs, and learn about using components and tree-shaking. Also you may want to run this script to find out what Quasar components your app uses:
  ```js
  find ./src -name *.vue -printf "list=\$(grep -oP \"<\\\\K(q-[^\\\\s>/]+)\" %p | sed -r 's/(-|^)(.)([^-]*)/\\\\U\\\\2\\\\L\\\\3/g; s/^/  /; s/$/,/' | sort | uniq); echo \"\\\n*** %p\\\n\\\nimport {\\\n\$list\\\n} from 'quasar';\\\n\\\ncomponents: {\\\n\$list\\\n},\\\n\";" | sh
  ```
7. Go ahead and apply what you learned.
8. `quasar dev`: check for any components still missing, adjust imports accordingly, rinse and repeat until your app starts and displays correctly.

To include icons you can now skip the respective CDNs and use quasar-extras, like this:
`npm i --save quasar-extras`, then use it [like this](http://beta.quasar-framework.org/components/transition.html#Adding-an-Animation-to-the-Bundle).

If you have used animations in your code, take a look at [this](http://beta.quasar-framework.org/components/transition.html#Adding-an-Animation-to-the-Bundle).

Since the beta is still being updated several times daily, before running to github or gitter to report a problem, please make sure you have the LATEST 0.14 version by running:
`npm update quasar-framework` from within your app folder (same for quasar-extras).

# Starter kit

# Importing components

# Removed / renamed components

# Components changes

# Dependencies

vue, vue-route & optional quasar-extras only
