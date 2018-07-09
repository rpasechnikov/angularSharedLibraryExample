# Overview
Basic Angular 6 component library being consumed by another angular application. Currently contains an item-list component which can be populated with items. That's all! :)

* consuming-app is an angular application
* shared-app is an application, which has component-library library inside of it

# Notes
* This is probably not the right way of source controlling libraries as each build causes lots of changes in the dist folder. Not sure on the right pattern to do this, without having the consuming app manually building the dependency

# How do I get started?
* cd into consuming-app and 'ng serve'
