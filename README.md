# Overview
Angular 6 shared library being consumed by another angular application, demonstrating the issue with NG directives

* consuming-app is an angular application, using shared-app component-library library component inside of itself

# Notes
* Commit 0176537bf731131ccb46ab6a99f346f8a4b3e09f shows a working example of using the shared component inside of a consuming app
* Commit 50e7e31865192f281b8a4c08dffaf5515818a863 shows a no longer working example of the same setup, except also using an *ngFor directive
