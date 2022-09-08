# HelloFusionDev

Early spiking on showcasing the work in pac that is highlighted in this conversation: <https://twitter.com/devkeydet/status/1567654222300160001>.  Keep an eye out.  More to come.  Will improve the readme and try to record some videos (no promises, just good intentions).  Fundamentally, this repo will become a showcase of how the cdsproj file will become the enabler of fusion dev when practicing ALM with Dataverse Solution zip files. 

NOTE: plugin dll/nupkg is currently included in the repo.  This is because _pac solution sync_ does not handle plugins in the same fashion it does pcf components referenced from a cdsproj.  When it does (TBD), I will update the repo.  The result will be that:

1. When running _dotnet build_ from the directory the cdsproj file is in, pcf component(s) and plugin dll(s) will be built and placed in the correct location(s) as the solution zip is created.
1. During _pac solution sync_ the plugin dll(s)/nupkg(s) will not be unpacked just like pcf build artifacts are not unpacked today using _pac solution syc_.
