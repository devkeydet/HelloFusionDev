# HelloFusionDev

Early spiking on showcasing the work in pac that is highlighted in this conversation: <https://twitter.com/devkeydet/status/1567654222300160001>.  Keep an eye out.  More to come.  Will improve the readme and try to record some videos (no promises, just good intentions).  Fundamentally, this repo will become a showcase of how the cdsproj file will become the enabler of fusion dev when practicing ALM with Dataverse Solution zip files.

The following behavior exists using pac 1.19.3 or greater:

1. When running _dotnet build_ from the directory the cdsproj file is in, pcf component(s) and plugin dll(s) will be built and placed in the correct location(s) as the solution zip is created.
1. During _pac solution sync_ the plugin dll(s)/nupkg(s) will not be unpacked and pcf build artifacts are not unpacked using _pac solution syc_.

NOTE: There build currently fails.  Investigating why.
